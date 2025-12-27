import Parser from "rss-parser";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RELIEFWEB_URL =
  "https://api.reliefweb.int/v1/jobs?appname=rwint-user-0&profile=list&preset=latest&limit=10&filter[field]=country.name&filter[value]=Somalia";

const RSS_FEEDS = [
  { url: "https://somalijobs.com/feed", source: "SomaliJobs" },
  { url: "https://qaranjobs.com/feed", source: "QaranJobs" },
  { url: "https://joblink.so/feed", source: "JobLink" },
  { url: "https://shaqodoon.net/feed", source: "Shaqodoon" },
];

const parser = new Parser();

const formatDate = (value) => {
  if (!value) {
    return "";
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  return date.toISOString().split("T")[0];
};

const normalizeTitle = (title) => (title || "").trim() || "Untitled role";

const normalizeCompany = (company) => (company || "").trim() || "Unknown";

const mapReliefWeb = (item) => {
  const fields = item.fields || {};
  return {
    id: item.id || fields.url || fields.title,
    title: normalizeTitle(fields.title),
    company: normalizeCompany(fields.organization?.[0]?.name),
    date: formatDate(fields.date?.created),
    source: "ReliefWeb",
    url: fields.url,
    tags: ["UN", "Verified"],
    badge: "UN / International",
    badgeColor: "blue",
  };
};

const mapRssItem = (item, sourceName) => ({
  id: item.guid || item.id || item.link,
  title: normalizeTitle(item.title),
  company: normalizeCompany(
    item.creator || item.author || item["dc:creator"] || sourceName,
  ),
  date: formatDate(item.isoDate || item.pubDate),
  source: sourceName,
  url: item.link,
  tags: ["Local"],
  badge: "Local / Private Sector",
  badgeColor: "green",
});

export async function GET() {
  const [reliefResponse, ...rssResponses] = await Promise.all([
    fetch(RELIEFWEB_URL, { next: { revalidate: 0 } }),
    ...RSS_FEEDS.map(async (feed) => {
      try {
        const parsed = await parser.parseURL(feed.url);
        return { feed, data: parsed };
      } catch {
        return { feed, data: null };
      }
    }),
  ]);

  let reliefJobs = [];
  try {
    if (reliefResponse.ok) {
      const reliefJson = await reliefResponse.json();
      reliefJobs = (reliefJson?.data || []).map(mapReliefWeb);
    }
  } catch {
    reliefJobs = [];
  }

  const rssJobs = rssResponses.flatMap(({ feed, data }) => {
    if (!data || !Array.isArray(data.items)) {
      return [];
    }
    return data.items
      .filter((item) => item?.link)
      .map((item) => mapRssItem(item, feed.source));
  });

  const jobs = [...reliefJobs, ...rssJobs]
    .filter((job) => job.url)
    .sort((a, b) => {
      const timeA = Date.parse(a.date) || 0;
      const timeB = Date.parse(b.date) || 0;
      return timeB - timeA;
    })
    .slice(0, 50);

  return NextResponse.json({
    updatedAt: new Date().toISOString(),
    jobs,
  });
}

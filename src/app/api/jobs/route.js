import Parser from "rss-parser";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FEED_URLS = [
  "https://somalijobs.com/feed",
  "https://joblink.so/feed",
];

const parser = new Parser();

const getHostname = (url) => {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return "Unknown source";
  }
};

export async function GET() {
  const feeds = await Promise.all(
    FEED_URLS.map(async (feedUrl) => {
      try {
        const feed = await parser.parseURL(feedUrl);
        return { feedUrl, feed };
      } catch {
        return { feedUrl, feed: null };
      }
    })
  );

  const jobs = feeds.flatMap(({ feedUrl, feed }) => {
    if (!feed || !Array.isArray(feed.items)) {
      return [];
    }

    const sourceName = feed.title || getHostname(feedUrl);

    return feed.items
      .filter((item) => item?.link)
      .map((item) => ({
        title: item.title || "Untitled role",
        link: item.link,
        company:
          item.creator ||
          item.author ||
          item["dc:creator"] ||
          sourceName,
        pubDate: item.isoDate || item.pubDate || "",
        source: sourceName,
      }));
  });

  jobs.sort((a, b) => {
    const timeA = Date.parse(a.pubDate) || 0;
    const timeB = Date.parse(b.pubDate) || 0;
    return timeB - timeA;
  });

  return NextResponse.json({
    updatedAt: new Date().toISOString(),
    jobs,
  });
}

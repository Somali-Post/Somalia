import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

import { newsArticles } from "@/data/news";

export default function LatestNews() {
  const recentNews = newsArticles.slice(0, 3);

  return (
    <section className="relative bg-slate-50 py-20">
      <div className="container mx-auto relative z-10 px-6">
        <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div>
            <h2 className="mb-4 text-4xl font-bold text-blue-900">
              Latest Government News
            </h2>
            <p className="max-w-xl text-blue-700">
              Official updates, press releases, and milestones from the Federal
              Republic.
            </p>
          </div>
          <Link
            href="/media"
            className="hidden items-center gap-2 font-semibold text-blue-700 transition-all hover:gap-3 md:flex"
          >
            View News Archive <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {recentNews.map((news) => (
            <div
              key={news.id}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute left-4 top-4 rounded-full bg-blue-600/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-sm">
                  {news.category}
                </div>
              </div>

              <div className="flex flex-grow flex-col p-6">
                <div className="mb-3 flex items-center gap-2 text-sm font-medium text-gray-500">
                  <Calendar size={14} className="text-blue-500" />
                  {news.date}
                </div>

                <h3 className="mb-3 line-clamp-3 text-xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-blue-700">
                  {news.title}
                </h3>

                <p className="mb-6 line-clamp-3 flex-grow text-sm leading-relaxed text-gray-600">
                  {news.excerpt}
                </p>

                <Link
                  href={`/media/${news.id}`}
                  className="mt-auto inline-flex w-full items-center justify-center rounded-lg border border-blue-100 py-3 font-semibold text-blue-700 transition-colors hover:bg-blue-50"
                >
                  Read Press Release
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/media"
            className="inline-flex items-center gap-2 font-semibold text-blue-700"
          >
            View News Archive <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}

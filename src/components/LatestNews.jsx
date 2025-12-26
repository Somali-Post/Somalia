"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const NEWS_ITEMS = [
  {
    id: 1,
    title: "Somalia Officially Joins the East African Community (EAC)",
    date: "March 04, 2024",
    category: "Diplomacy",
    excerpt:
      "A historic milestone as the Federal Republic becomes the 8th member state of the regional bloc, opening markets and travel opportunities.",
    image: "/images/hero.jpg",
  },
  {
    id: 2,
    title: "Historic Achievement: Somalia Reaches HIPC Completion Point",
    date: "December 13, 2023",
    category: "Economy",
    excerpt:
      "International creditors forgive $4.5 billion in debt, normalizing Somalia's financial relations with the world after three decades.",
    image: "/images/invest/logistics.jpg",
  },
  {
    id: 3,
    title: "NIRA Rolls Out Digital National ID Cards Nationwide",
    date: "September 20, 2024",
    category: "Technology",
    excerpt:
      "The National Identification and Registration Authority accelerates the digital ID campaign to boost security and banking access.",
    image: "/images/invest/ict.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function LatestNews() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Latest Government News
          </h2>
        </div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {NEWS_ITEMS.map((news) => (
            <motion.article
              key={news.id}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              variants={cardVariants}
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 px-6 py-5">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  <span>{news.date}</span>
                  <span className="text-blue-600">{news.category}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {news.title}
                </h3>
                <p className="text-sm text-slate-600">{news.excerpt}</p>
                <Link
                  href="#"
                  className="inline-flex items-center rounded-full border border-blue-600 px-4 py-2 text-xs font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                >
                  Read Press Release
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


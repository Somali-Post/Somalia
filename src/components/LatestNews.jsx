"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const NEWS_ITEMS = [
  {
    title: "Prime Minister Launches New Infrastructure Project",
    date: "Dec 24, 2025",
    image: "/images/hero.jpg",
  },
  {
    title: "Cabinet Approves 2026 National Budget",
    date: "Dec 22, 2025",
    image: "/images/hero.jpg",
  },
  {
    title: "Somalia Hosts Regional Trade Summit",
    date: "Dec 20, 2025",
    image: "/images/hero.jpg",
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
              key={news.title}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md"
              variants={cardVariants}
            >
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-3 px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {news.date}
                </p>
                <h3 className="text-lg font-semibold text-slate-900">
                  {news.title}
                </h3>
                <Link
                  href="#"
                  className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
                >
                  Read More
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


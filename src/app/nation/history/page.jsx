"use client";

import { motion } from "framer-motion";
import { Music } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

const QUICK_FACTS = [
  { label: "Capital", value: "Mogadishu" },
  { label: "Currency", value: "Somali Shilling (SOS)" },
  { label: "Religion", value: "Islam (Sunni)" },
  { label: "Time Zone", value: "UTC+3 (East Africa Time)" },
  { label: "Calling Code", value: "+252" },
];

const SYMBOLS = [
  {
    title: "The Flag",
    image: "/logos/flag.png",
    description:
      "A light blue rectangle with a white star in the center. Adopted Oct 12, 1954. The five points represent the five regions where Somalis reside.",
  },
  {
    title: "The Coat of Arms",
    image: "/logos/coat-of-arms.png",
    description:
      "A blue shield with a gold frame and a white star, supported by two leopards standing on crossed spears and palm leaves.",
  },
  {
    title: "Qolobaa Calankeed",
    icon: Music,
    description:
      "Meaning \"Every Nation Has Its Own Flag\". It emphasizes national pride and unity. Adopted August 1, 2012.",
  },
];

const NARRATIVE = [
  {
    title: "Maritime Trade",
    text: "One of the oldest trading nations, with the longest coastline in mainland Africa. Ports of Mogadishu, Kismayo, and Berbera linked the Horn of Africa to Arabia, Asia, and the Mediterranean.",
  },
  {
    title: "Islam & Scholarship",
    text: "Islam in Somalia dates back to the 7th century. The Masjid al-Qiblatayn in Zeila is among the oldest mosques in Africa, featuring two minarets.",
  },
  {
    title: "Nation of Poets",
    text: "A culture rooted in oral tradition. The domestication of the camel in the 3rd millennium BC shaped nomadic life, while the rock art of Laas Geel preserves early Somali heritage.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HistoryPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <PageHeader
          title="History of the Republic"
          description="From the Land of Punt to the Federal Republic"
        />

        <motion.section
          className="bg-slate-50 py-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
              <div className="space-y-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  The Federal Republic
                </p>
                <h2 className="text-2xl font-semibold sm:text-3xl">
                  The Federal Republic
                </h2>
                <p className="text-base text-slate-600">
                  Somalia, officially the Federal Republic of Somalia, is the
                  easternmost country in continental Africa. Located in the Horn
                  of Africa, it is bordered by Ethiopia, Djibouti, Kenya, the
                  Gulf of Aden, and the Indian Ocean.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Quick Facts
                </h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {QUICK_FACTS.map((fact) => (
                    <div
                      key={fact.label}
                      className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                        {fact.label}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-900">
                        {fact.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {SYMBOLS.map((symbol) => (
                <article
                  key={symbol.title}
                  className="rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-sm"
                >
                  {symbol.image ? (
                    <img
                      src={symbol.image}
                      alt={symbol.title}
                      className="mx-auto h-14 w-14 rounded-full object-contain"
                    />
                  ) : (
                    <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-[#4189DD]">
                      <symbol.icon className="h-6 w-6" />
                    </span>
                  )}
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {symbol.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    {symbol.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          className="bg-white py-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mx-auto max-w-5xl px-6">
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Historical Narrative
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
                A Legacy of Trade & Civilization
              </h2>
            </div>

            <div className="space-y-8">
              {NARRATIVE.map((block) => (
                <div
                  key={block.title}
                  className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    {block.title}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">
                    {block.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">{block.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}

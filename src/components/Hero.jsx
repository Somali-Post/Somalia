"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-800 py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <svg
          viewBox="0 0 24 24"
          className="absolute right-[-120px] top-1/2 h-[520px] w-[520px] -translate-y-1/2 text-white opacity-[0.05]"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />
      </div>

      <div className="container mx-auto flex min-h-[600px] flex-col items-center gap-12 px-6 lg:flex-row lg:justify-between">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex w-full max-w-xl flex-col items-start gap-6 text-left"
        >
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
            Official Portal of the Federal Government
          </span>
          <h1 className="text-5xl font-bold leading-tight sm:text-6xl">
            Federal Republic of Somalia
          </h1>
          <p className="text-xl text-blue-100">Peace, Progress, and Prosperity.</p>

          <div className="flex w-full flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder="Search for services, ministries, or documents..."
              className="w-full rounded-lg border border-white/20 bg-white px-4 py-4 text-base text-slate-900 shadow-lg outline-none placeholder:text-slate-400 focus:border-blue-300"
            />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Search
            </button>
          </div>

          <p className="text-sm text-white/70">
            Popular: Passport, Visa, Jobs, Tender
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative flex w-full max-w-md items-center justify-center"
        >
          <div className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.35),_transparent_70%)]" />
          <Image
            src="/logos/coat-of-arms.png"
            alt="Coat of Arms of Somalia"
            width={480}
            height={480}
            className="relative h-auto w-full max-w-md"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}

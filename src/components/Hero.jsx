"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import GlobalSearch from "@/components/GlobalSearch";
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-800 py-20 text-white">
      <div className="container mx-auto flex min-h-[600px] flex-col items-center gap-12 px-6 lg:flex-row lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex w-full max-w-xl flex-col items-start gap-6 text-left"
        >
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
            Official Portal of the Federal Government
          </span>
          <h1 className="text-5xl font-bold leading-tight sm:text-6xl">
            Federal Republic of Somalia
          </h1>
          <p className="text-xl text-blue-100">Peace, Progress, and Prosperity.</p>

          <GlobalSearch />

          <p className="text-sm text-white/70">
            Popular: Passport, Visa, Jobs, Tender
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
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

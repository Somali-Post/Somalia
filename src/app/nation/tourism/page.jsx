"use client";

import { motion } from "framer-motion";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const DESTINATIONS = [
  {
    title: "Laas Geel",
    description: "Ancient rock art and sandstone shelters.",
    image: "/images/tourism-caves.jpg",
  },
  {
    title: "Lido Beach",
    description: "Golden shoreline and vibrant coastal energy.",
    image: "/images/tourism-beach.jpg",
  },
  {
    title: "Lag Badana Park",
    description: "A protected coastal forest and wildlife reserve.",
    image: "/images/tourism-waterfall.jpg",
  },
  {
    title: "Cal Madow Mountains",
    description: "Misty peaks and dramatic highland scenery.",
    image: "/images/tourism-mogadishu.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function TourismPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <section className="relative h-screen overflow-hidden">
          <img
            src="/images/tourism-beach.jpg"
            alt="Somalia coastline"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/50" />
          <div className="relative z-10 flex h-full items-center">
            <div className="container mx-auto px-6 text-white">
              <motion.div
                className="max-w-2xl space-y-6"
                initial="hidden"
                animate="show"
                variants={fadeUp}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                  Somalia Tourism
                </p>
                <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
                  The Pearl of the Indian Ocean.
                </h1>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center text-white/80"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
            <span className="mt-3 h-8 w-4 rounded-full border border-white/60">
              <span className="mx-auto mt-2 block h-2 w-1 rounded-full bg-white/70" />
            </span>
          </motion.div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Unspoiled Beauty
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
                Unspoiled Beauty
              </h2>
            </div>

            <motion.div
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12 } },
              }}
            >
              {DESTINATIONS.map((destination) => (
                <motion.article
                  key={destination.title}
                  className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm"
                  variants={fadeUp}
                >
                  <div className="aspect-[4/5] w-full overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-6 px-6 pb-6 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <h3 className="text-lg font-semibold">{destination.title}</h3>
                    <p className="mt-2 text-sm text-white/85">
                      {destination.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-900 via-[#1f5fa6] to-blue-800 py-16 text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 text-center lg:flex-row lg:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Ready to Visit?
              </p>
              <h3 className="mt-3 text-3xl font-semibold">Plan your entry.</h3>
            </div>
            <button className="rounded-full border border-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-blue-900">
              Visa Requirements
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { IdCard, Shield, Smartphone } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const CAROUSEL_IMAGES = [
  "/images/tourism/carousel-1.jpg",
  "/images/tourism/carousel-2.jpg",
  "/images/tourism/carousel-3.jpg",
];

const ESSENTIALS = [
  {
    title: "Visas & Entry",
    description:
      "Visa on Arrival (VOA) is available at Aden Adde International Airport ($60). E-Visa services are rolling out at visa.gov.so.",
    icon: IdCard,
  },
  {
    title: "The Cashless Economy (EVC+)",
    description:
      "Somalia is a cashless society. Mobile money (EVC Plus/Zaad) is used for everything from coffee to taxis.",
    icon: Smartphone,
  },
  {
    title: "Security & Logistics",
    description:
      "Mogadishu has secure Green Zones. Visitors are advised to coordinate with local hosts or security details for excursions. Liido Beach and Peace Park are popular secure public spots.",
    icon: Shield,
  },
];

const DESTINATIONS = [
  {
    title: "Liido Beach",
    description:
      "The vibrant heart of Mogadishu's social life. Seafood cafes, ocean breeze, and resilience.",
    image: "/images/tourism/hero-1.jpg",
  },
  {
    title: "Laas Geel",
    description:
      "5,000-year-old rock art near Hargeisa. One of the best-preserved Neolithic sites in Africa.",
    image: "/images/tourism/hero-3.jpg",
  },
  {
    title: "National Museum",
    description:
      "Recently reopened, housing the artifacts and history of the Somali people.",
    image: "/images/tourism/museum.jpg",
  },
  {
    title: "Jazeera Beach",
    description:
      "A serene, pristine stretch of coast for those seeking quiet beauty.",
    image: "/images/tourism/jazeera.jpg",
  },
];

export default function TourismPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % CAROUSEL_IMAGES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={CAROUSEL_IMAGES[activeIndex]}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={CAROUSEL_IMAGES[activeIndex]}
                alt="Somalia destination"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-slate-950/55" />
          <div className="relative z-10 flex h-full items-center">
            <div className="container mx-auto px-6 text-white">
              <motion.div
                className="max-w-2xl space-y-6"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                  Somalia Tourism Guide
                </p>
                <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
                  Discover the Pearl of the Indian Ocean.
                </h1>
                <p className="text-lg text-white/85 sm:text-xl">
                  Ancient History. Pristine Beaches. Resilient Spirit.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                Practical Guide
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-blue-900">
                Travel Essentials
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {ESSENTIALS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                Top Destinations
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-blue-900">
                Must-Visit Locations
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {DESTINATIONS.map((destination) => (
                <div
                  key={destination.title}
                  className="overflow-hidden rounded-2xl bg-white shadow-md"
                >
                  <div className="relative h-56">
                    <Image
                      src={destination.image}
                      alt={destination.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-3 p-5">
                    <h3 className="text-lg font-semibold text-blue-900">
                      {destination.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {destination.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-16 text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 text-center lg:flex-row lg:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Ready to Visit?
              </p>
              <h3 className="mt-3 text-3xl font-semibold">
                Start planning your journey.
              </h3>
            </div>
            <Link
              href="#"
              className="rounded-full border border-yellow-500 px-6 py-3 text-sm font-semibold text-yellow-500 transition hover:bg-yellow-500 hover:text-blue-900"
            >
              Find a Registered Tour Operator
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

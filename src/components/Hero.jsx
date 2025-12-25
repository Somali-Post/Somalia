"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-80px)] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Somalia coastal city"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-blue-900/60" />

      <div className="relative flex h-[calc(100vh-80px)] items-center text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl space-y-6 text-left">
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Official Portal of the Federal Republic of Somalia
            </h1>
            <p className="text-base text-white/90 sm:text-lg">
              Peace, Progress, and Prosperity
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="rounded-full bg-[#4189DD] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2f72c2]"
              >
                Find a Service
              </Link>
              <Link
                href="/media"
                className="rounded-full border border-white/80 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Government News
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

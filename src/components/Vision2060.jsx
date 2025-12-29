"use client";

import { Link } from "@/i18n/navigation";

export default function Vision2060() {
  return (
    <section className="bg-blue-900 py-16 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="text-center text-4xl font-semibold tracking-[0.2em] sm:text-5xl lg:text-left lg:text-6xl">
          VISION 2060
        </div>
        <div className="max-w-xl space-y-4 text-center lg:text-left">
          <h3 className="text-2xl font-semibold">
            A Peaceful, Prosperous, and Proud Somalia.
          </h3>
          <p className="text-sm text-white/80 sm:text-base">
            Our strategic roadmap for development, stability, and democratic
            governance.
          </p>
          <Link
            href="#"
            className="inline-flex items-center rounded-full border border-[#D4AF37] px-5 py-2 text-sm font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-blue-900"
          >
            Download Strategy
          </Link>
        </div>
      </div>
    </section>
  );
}


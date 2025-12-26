"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-16 text-slate-900">
      <div className="max-w-xl text-center">
        <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-sm">
          <Image
            src="/logos/coat-of-arms.png"
            alt="Coat of Arms"
            width={84}
            height={84}
            className="opacity-60"
          />
        </div>
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          404 - Page Not Found
        </h1>
        <p className="mt-3 text-sm text-slate-600 sm:text-base">
          The requested page could not be found on the Federal Government Portal.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Return Home
          </Link>
          <Link
            href="/government/ministries"
            className="inline-flex items-center justify-center rounded-full border border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            Browse Ministries
          </Link>
        </div>
        <Link
          href="/contact"
          className="mt-4 inline-flex text-sm font-semibold text-blue-600 transition hover:text-blue-700"
        >
          Contact Support
        </Link>
      </div>
    </main>
  );
}

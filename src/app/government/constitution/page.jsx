"use client";

import Link from "next/link";
import { FileDown } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

const SECTIONS = [
  {
    id: "chapter-1",
    title: "Chapter 1: Declaration of the Republic",
    body:
      "Somalia is a Federal, Sovereign, and Democratic Republic based on the Constitution and Islamic Sharia.",
  },
  {
    id: "chapter-2",
    title: "Chapter 2: Fundamental Rights",
    body:
      "Human dignity, equality, freedom of expression, and the rights of the accused are protected.",
  },
  {
    id: "chapter-3",
    title: "Chapter 3: Land & Property",
    body: "Land belongs to the people and is regulated by the state.",
  },
  {
    id: "chapter-4",
    title: "Chapter 4: Public Representation",
    body: "Elections and political parties form the basis of representation.",
  },
  {
    id: "chapter-5",
    title: "Chapter 5: Devolution of Powers",
    body:
      "Powers are distributed between the Federal Government and Member States.",
  },
];

export default function ConstitutionPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <PageHeader
          title="The Provisional Constitution"
          description="The Supreme Law of the Federal Republic of Somalia."
        />

        <section className="py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.3fr_0.7fr]">
            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                    Table of Contents
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border border-blue-600 px-4 py-2 text-xs font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                  >
                    <FileDown className="h-4 w-4" />
                    Download PDF
                  </Link>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  {SECTIONS.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="font-semibold text-slate-700 hover:text-blue-600"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="space-y-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                    Overview
                  </p>
                  <h2
                    className="text-3xl font-semibold text-blue-900"
                    style={{
                      fontFamily: '"Playfair Display", "Times New Roman", serif',
                    }}
                  >
                    The Constitutional Framework
                  </h2>
                </div>
                <Link
                  href="#"
                  className="hidden items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-xs font-semibold text-white transition hover:bg-blue-700 sm:inline-flex"
                >
                  <FileDown className="h-4 w-4" />
                  Download Full Constitution (PDF)
                </Link>
              </div>

              {SECTIONS.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                >
                  <h3
                    className="text-2xl font-semibold text-blue-900"
                    style={{
                      fontFamily: '"Playfair Display", "Times New Roman", serif',
                    }}
                  >
                    {section.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">{section.body}</p>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

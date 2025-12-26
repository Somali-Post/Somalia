"use client";

import { Scale, Shield, TrendingUp, Users } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

const PILLARS = [
  {
    title: "Inclusive Politics & Democratization",
    description:
      "Finalizing the Federal Constitution, implementing One Person, One Vote elections, and strengthening the federal member state system.",
    icon: Scale,
  },
  {
    title: "Security & Rule of Law",
    description:
      "Assuming full security responsibility from ATMIS, rebuilding the National Army (SNA), and establishing independent courts to ensure justice for all.",
    icon: Shield,
  },
  {
    title: "Economic Growth",
    description:
      "Leveraging the Blue Economy (Fisheries), modernizing Agriculture, and energy diversification. Creating a welcoming climate for foreign and diaspora investment.",
    icon: TrendingUp,
  },
  {
    title: "Social Development",
    description:
      "Investing in human capital: Universal primary education, accessible healthcare, and empowering women and youth in the workforce.",
    icon: Users,
  },
];

const MILESTONES = [
  {
    year: "2023",
    title: "Admission to EAC",
    description: "Joining the East African Community.",
  },
  {
    year: "2024",
    title: "Debt Relief (HIPC)",
    description: "Completion of the debt relief process.",
  },
  {
    year: "2025",
    title: "Constitutional Review & Elections",
    description: "Advancing electoral reforms and governance.",
  },
  {
    year: "2030",
    title: "Achieving SDGs",
    description: "Progress toward the Sustainable Development Goals.",
  },
  {
    year: "2060",
    title: "Centennial Celebration",
    description: "A secure, democratic, and prosperous Somalia.",
  },
];

export default function VisionPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <PageHeader
          title="Centennial Vision 2060"
          description="A roadmap to a secure, democratic, and prosperous Somalia by our 100th year of independence."
        />

        <section className="py-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="space-y-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                The Core Mission
              </p>
              <h2 className="text-3xl font-semibold text-blue-900">
                The Journey to 2060
              </h2>
              <p className="mx-auto max-w-3xl text-base text-slate-600">
                Vision 2060 is Somalia&apos;s long-term framework to transform the
                nation into a middle-income economy anchored by effective
                governance, inclusive growth, and a high quality of life. Recent
                milestones like the HIPC Debt Relief Completion and accession to
                the East African Community (EAC) provide critical foundations for
                sustained national renewal.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                NDP-9 Pillars
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-blue-900">
                The Four Pillars of Development
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-900">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                Key Milestones
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-blue-900">
                The Road to 2060
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-5">
              {MILESTONES.map((milestone) => (
                <div
                  key={milestone.year}
                  className="rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-sm"
                >
                  <p className="text-2xl font-semibold text-blue-600">
                    {milestone.year}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-blue-900">
                    {milestone.title}
                  </p>
                  <p className="mt-2 text-xs text-slate-600">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-16 text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center lg:flex-row lg:text-left">
            <div className="max-w-2xl space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Downloads
              </p>
              <h2 className="text-3xl font-semibold">
                National Development Plan (NDP-9)
              </h2>
              <p className="text-sm text-white/80">
                Access the full policy framework guiding Somalia&apos;s long-term
                transformation agenda.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-yellow-500 px-6 py-3 text-sm font-semibold text-yellow-500 transition hover:bg-yellow-500 hover:text-blue-900"
            >
              Download National Development Plan (NDP-9)
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

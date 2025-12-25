"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

export default function CulturePage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <PageHeader
          title="People & Tradition"
          description="Culture and community"
        />

        <section className="py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div className="space-y-5">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                The Nation of Poets
              </h2>
              <p className="text-base text-slate-600">
                Somali society is famously rooted in oral tradition. Poetry
                carries history, identity, and moral guidance, preserving
                communal memory across generations.
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-sm">
              <img
                src="/images/culture-dance.jpg"
                alt="Traditional Somali dance"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl">Hospitality</h2>
            <p className="mt-4 text-lg text-slate-600">
              “Soo Dhawoow is our way of life.”
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

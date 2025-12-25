"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

const DISHES = [
  { name: "Bariis", note: "Spiced rice and the national staple." },
  { name: "Sambusa", note: "Crisp savory pastry with aromatic fillings." },
  { name: "Canjeero", note: "Sourdough pancakes for breakfast and tea." },
  { name: "Halwa", note: "Sweet ceremonial treat served at celebrations." },
];

export default function FoodPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <PageHeader title="A Culinary Journey" description="Flavors of Somalia" />

        <section className="py-16">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              The Somali Kitchen
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Somali cuisine blends fragrant spices, slow-simmered dishes, and
              coastal influences, reflecting centuries of trade and hospitality.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Signature Dishes
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {DISHES.map((dish) => (
                <article
                  key={dish.name}
                  className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {dish.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{dish.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#7c3f1d] via-[#a16207] to-[#b45309] py-16 text-white">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl">Tea Culture</h2>
            <p className="mt-4 text-base text-white/90">
              Shaah is brewed with Xawaash spices like cardamom, cloves, and
              cinnamon. It is a ritual of welcome and conversation shared in
              every home and café.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

"use client";

import Image from "next/image";
import { Coffee, Flame, Utensils, Wheat } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const DISHES = [
  {
    title: "Bariis Iskukaris",
    description:
      "Fragrant rice spiced with cardamom, cumin, and cloves, served with tender goat or camel meat.",
    image: "/images/food/bariis.jpg",
  },
  {
    title: "Canjeero (Anjero)",
    description:
      "A fermented sourdough pancake, the staple of every Somali breakfast, often dipped in sesame oil and sugar.",
    image: "/images/food/canjeero.jpg",
  },
  {
    title: "Sambusa",
    description:
      "Crispy triangular pastries filled with spiced minced meat, onions, and green chilies. The ultimate snack.",
    image: "/images/food/sambusa.jpg",
  },
  {
    title: "Xalwo (Halwa)",
    description:
      "The Sultan of Sweets. A dense, gelatinous confection made from sugar, cornstarch, and spices, reserved for weddings and Eid.",
    image: "/images/food/halwa.jpg",
  },
];

export default function FoodPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <section
          className="relative h-[60vh] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/food/hero-food.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-orange-900/50" />
          <div className="relative flex h-full items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl space-y-4 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-200">
                  Somali Cuisine
                </p>
                <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
                  Flavors of the Horn
                </h1>
                <p className="text-lg text-orange-50 sm:text-xl">
                  A fusion of African, Arab, and Indian influences, centered on
                  Halal traditions and generous hospitality.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mb-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
                The Philosophy
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900">
                Soo Dhawoow (Welcome)
              </h2>
            </div>

            <div className="rounded-2xl border border-orange-500/40 bg-orange-50/40 p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <Utensils className="h-5 w-5" />
              </div>
              <p className="text-base text-slate-700">
                In Somalia, food is a love language. To host a guest is a
                blessing. It is customary to share the best cut of meat and the
                freshest milk with visitors.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-orange-50/30 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
                The National Dishes
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900">
                Signature Plates
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {DISHES.map((dish) => (
                <article
                  key={dish.title}
                  className="overflow-hidden rounded-2xl border border-orange-500/40 bg-white shadow-md"
                >
                  <div className="relative h-64">
                    <Image
                      src={dish.image}
                      alt={dish.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-3 p-6">
                    <div className="flex items-center gap-2 text-orange-600">
                      <Flame className="h-4 w-4" />
                      <h3 className="text-lg font-semibold text-slate-900">
                        {dish.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600">{dish.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-orange-50 py-16">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1.1fr_1fr]">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
                Tea Culture
              </p>
              <h2 className="text-3xl font-semibold text-slate-900">
                The Art of Shaah
              </h2>
              <p className="text-base text-slate-700">
                Shaah is the linchpin of social life. Brewed with cardamom
                (hayl) and cloves, and served with plenty of sugar. It is drunk
                in the afternoon (&apos;Asariya&apos;) as a time to connect and exchange
                news.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-orange-600">
                <span className="inline-flex items-center gap-2 text-sm font-semibold">
                  <Coffee className="h-4 w-4" />
                  Shaah Rituals
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-semibold">
                  <Wheat className="h-4 w-4" />
                  Halal Traditions
                </span>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-orange-500/40 shadow-sm">
              <Image
                src="/images/food/shaah.jpg"
                alt="Somali tea"
                width={520}
                height={420}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

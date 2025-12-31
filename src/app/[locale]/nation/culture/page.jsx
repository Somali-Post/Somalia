"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const ALINDI_STRIP =
  "h-4 w-full bg-[repeating-linear-gradient(90deg,#7f1d1d_0px,#7f1d1d_20px,#f59e0b_20px,#f59e0b_30px,#000_30px,#000_32px,#f59e0b_32px,#f59e0b_42px,#7f1d1d_42px,#7f1d1d_62px,#fff_62px,#fff_63px)]";

const POET_IMAGES = [
  "/images/culture/hadraawi.jpg",
  "/images/culture/sayid.jpg",
  "/images/culture/timacade.jpg",
];

export default function CulturePage() {
  const t = useTranslations("CulturePage");
  const poets = t.raw("poets.items").map((poet, index) => ({
    ...poet,
    image: POET_IMAGES[index],
  }));

  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <section
          className="relative h-[50vh] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/fabric-1.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-black/60" />
          <div className="relative flex h-full items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-2xl space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-500">
                  {t("hero.eyebrow")}
                </p>
                <h1 className="text-4xl font-bold text-yellow-500 sm:text-5xl">
                  {t("hero.title")}
                </h1>
                <p className="text-lg text-white">
                  {t("hero.subtitle")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-8 space-y-2 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                {t("poets.eyebrow")}
              </p>
              <h2 className="text-3xl font-semibold text-blue-900">
                {t("poets.title")}
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {poets.map((poet, index) => (
                <article
                  key={`${poet.name}-${index}`}
                  className="group overflow-hidden rounded-2xl bg-white shadow-md"
                >
                  <div className="relative h-72">
                    <Image
                      src={poet.image}
                      alt={poet.name}
                      fill
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-3 p-6">
                    <h3 className="text-lg font-semibold text-blue-900">
                      {poet.name}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600">
                      &ldquo;{poet.quote}&rdquo;
                    </p>
                    <p className="text-sm text-slate-600">{poet.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className={ALINDI_STRIP} />

        <section className="py-16">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1.1fr_1fr]">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                {t("customs.eyebrow")}
              </p>
              <h2 className="text-3xl font-semibold text-blue-900">
                {t("customs.title")}
              </h2>
              <p className="text-base text-slate-600">
                {t("customs.body")}
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-sm">
              <Image
                src="/images/culture/tea.jpg"
                alt="Somali tea"
                width={520}
                height={420}
                className="h-full w-full object-cover"
              />
              <p className="bg-white px-5 py-3 text-sm text-slate-600">
                {t("customs.caption")}
              </p>
            </div>
          </div>
        </section>

        <div className={ALINDI_STRIP} />

        <section className="py-16">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1fr_1.1fr]">
            <div className="order-2 space-y-4 lg:order-1">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                {t("tradition.eyebrow")}
              </p>
              <h2 className="text-3xl font-semibold text-blue-900">
                {t("tradition.title")}
              </h2>
              <p className="text-base text-slate-600">
                {t("tradition.body")}
              </p>
            </div>
            <div className="order-1 overflow-hidden rounded-3xl border border-slate-100 shadow-sm lg:order-2">
              <Image
                src="/images/culture/dance.jpg"
                alt="Somali dance"
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

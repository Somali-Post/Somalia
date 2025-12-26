"use client";

import Image from "next/image";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const ALINDI_STRIP =
  "h-4 w-full bg-[repeating-linear-gradient(90deg,#7f1d1d_0px,#7f1d1d_20px,#f59e0b_20px,#f59e0b_30px,#000_30px,#000_32px,#f59e0b_32px,#f59e0b_42px,#7f1d1d_42px,#7f1d1d_62px,#fff_62px,#fff_63px)]";

const POETS = [
  {
    name: 'Mohamed Ibrahim Warsame "Hadraawi"',
    quote: "Jacayl dhiig ma lagu qoray?",
    description:
      "The Shakespeare of Somalia, known for weaving social justice into romantic verse.",
    image: "/images/culture/hadraawi.jpg",
  },
  {
    name: "Sayid Mohamed Abdullah Hassan",
    quote: "Dulmiga waan diiday, dalkayga waan dafiraa.",
    description:
      "The leader of the Dervish state who used poetry as a weapon against colonialism.",
    image: "/images/culture/sayid.jpg",
  },
  {
    name: 'Abdullahi Suldaan "Timacade"',
    quote: "Kaana siib, kana saar.",
    description:
      "The poet of Independence, celebrating the birth of the Republic in 1960.",
    image: "/images/culture/timacade.jpg",
  },
];

export default function CulturePage() {
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
                  People & Culture
                </p>
                <h1 className="text-4xl font-bold text-yellow-500 sm:text-5xl">
                  The Nation of Poets
                </h1>
                <p className="text-lg text-white">
                  A heritage of oral tradition, hospitality, and resilience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-8 space-y-2 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                The Poets
              </p>
              <h2 className="text-3xl font-semibold text-blue-900">
                Masters of the Oral Tradition
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {POETS.map((poet) => (
                <article
                  key={poet.name}
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
                Social Customs
              </p>
              <h2 className="text-3xl font-semibold text-blue-900">
                Soo Dhawoow: The Art of Hospitality
              </h2>
              <p className="text-base text-slate-600">
                Hospitality is a duty in Somali culture. A guest is a blessing
                from God, and generosity is a mark of honor. Refusing offered
                food or tea is often considered impolite.
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
                Shaah (Spiced Tea) is the center of social life, spiced with
                cardamom and cloves.
              </p>
            </div>
          </div>
        </section>

        <div className={ALINDI_STRIP} />

        <section className="py-16">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1fr_1.1fr]">
            <div className="order-2 space-y-4 lg:order-1">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                Tradition
              </p>
              <h2 className="text-3xl font-semibold text-blue-900">
                Rhythm of the Land
              </h2>
              <p className="text-base text-slate-600">
                The Dhaanto dance, often compared to early reggae rhythms,
                celebrates unity and courage, while Buraanbur honors the poetic
                artistry of Somali women. Traditional dress such as the Guntiino
                and the Macawis remain proud symbols of identity.
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

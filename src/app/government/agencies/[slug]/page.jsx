import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, Globe, Mail, MapPin, Phone, Twitter, Facebook } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SmartImage from "@/components/SmartImage";
import { agencies } from "@/data/agencies";

export default async function AgencyProfilePage({ params }) {
  const { slug } = await params;
  const agency = agencies.find((item) => item.slug === slug);

  if (!agency) {
    notFound();
  }

  const logoSrc = `/logos/agencies-logos/${agency.acronym}.png`;
  const directorImage = agency.directorImage || "/images/president.jpg";
  const directorSocials = [
    { key: "twitter", href: agency.directorSocials?.twitter, icon: Twitter, label: "Twitter" },
    { key: "facebook", href: agency.directorSocials?.facebook, icon: Facebook, label: "Facebook" },
  ].filter((item) => item.href);

  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <nav className="text-xs uppercase tracking-[0.3em] text-white/70">
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
                <span className="mx-2 text-white/40">/</span>
                <Link href="/government" className="transition hover:text-white">
                  Government
                </Link>
                <span className="mx-2 text-white/40">/</span>
                <Link
                  href="/government/agencies"
                  className="transition hover:text-white"
                >
                  Agencies
                </Link>
              </nav>

              <div className="mt-6 flex items-center gap-4">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
                  <SmartImage
                    src={logoSrc}
                    alt={`${agency.acronym} logo`}
                    className="h-10 w-10 object-contain"
                    fallbackSrc="/logos/coat-of-arms.png"
                  />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                    {agency.acronym}
                  </p>
                  <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                    {agency.name}
                  </h1>
                </div>
              </div>

              <p className="mt-6 text-sm italic text-blue-100 sm:text-base">
                {agency.description}
              </p>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center">
              <div className="mx-auto max-w-md rounded-3xl border border-yellow-400/40 bg-white/5 p-6 shadow-2xl">
                <div className="relative mx-auto h-[400px] w-full max-w-[320px] overflow-hidden rounded-xl border-4 border-white/10 shadow-2xl">
                  <SmartImage
                    src={directorImage}
                    alt={agency.directorName}
                    className="h-full w-full object-cover object-top"
                    fallbackSrc="/images/minister-placeholder.jpg"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-lg font-semibold text-yellow-400">
                    {agency.directorName}
                  </p>
                  <p className="text-sm text-blue-100">{agency.name}</p>
                  {directorSocials.length > 0 && (
                    <div className="mt-4 flex items-center justify-center gap-3">
                      {directorSocials.map((social) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={social.key}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-yellow-400/40 text-yellow-300 transition hover:border-white hover:text-white"
                            aria-label={social.label}
                          >
                            <Icon className="h-4 w-4" />
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Mandate &amp; Functions
                </h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {agency.responsibilities.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
                    >
                      <CheckCircle className="mt-0.5 h-5 w-5 text-blue-600" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Contact Details
                </h3>
                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  <p className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 text-blue-600" />
                    <span>{agency.contact.address}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 text-blue-600" />
                    <span>{agency.contact.phone}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 text-blue-600" />
                    <span>{agency.contact.email}</span>
                  </p>
                </div>
                <Link
                  href={agency.contact.website}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="mr-2 h-4 w-4" />
                  Visit Website
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Mic,
  Twitter,
} from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

const CONTACT_CARDS = [
  {
    title: "General Inquiries",
    value: "info@opm.gov.so",
    description: "For general government questions.",
    icon: Mail,
  },
  {
    title: "Media & Press",
    value: "media@opm.gov.so",
    description: "For official statements and press accreditation.",
    icon: Mic,
  },
  {
    title: "Visit Us",
    value: "Villa Somalia, Mogadishu",
    description: "Office of the Prime Minister.",
    icon: MapPin,
  },
];

const DEPARTMENTS = [
  "General Inquiry",
  "Press Office",
  "Protocol",
  "Citizen Services",
];

const SOCIALS = [
  { label: "X", href: "https://x.com/somalia", icon: Twitter },
  { label: "Facebook", href: "https://www.facebook.com/Somalia/", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/somalia/", icon: Instagram },
  {
    label: "LinkedIn",
    href: "https://so.linkedin.com/company/federalgovernmentofsomalia",
    icon: Linkedin,
  },
  { label: "Reddit", href: "https://www.reddit.com/r/Somalia/", icon: MessageCircle },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <PageHeader
          title="Contact Us"
          description="How can we assist you today? Reach out to the Federal Government of Somalia."
        />

        <section className="py-12">
          <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
            {CONTACT_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold text-slate-500">
                    {card.title}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">
                    {card.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="pb-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-slate-900">
                Send a Message
              </h2>
              <form className="mt-6 space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Department
                  </label>
                  <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-600">
                    {DEPARTMENTS.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-600"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Other Ways to Connect
                </h3>
                <div className="mt-4 space-y-4 text-sm text-slate-600">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                      Working Hours
                    </p>
                    <p className="mt-2 font-semibold text-slate-700">
                      Sat - Thu: 8:00 AM - 4:00 PM (East Africa Time)
                    </p>
                    <p className="mt-1 text-slate-500">Friday: Closed</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                      Specific Ministries
                    </p>
                    <p className="mt-2 text-slate-600">
                      Looking for a specific department? Find direct contact info
                      for Education, Health, or Immigration in our directory.
                    </p>
                    <Link
                      href="/government/ministries"
                      className="mt-3 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Browse Ministry Directory -&gt;
                    </Link>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                      Social Media
                    </p>
                    <div className="mt-3 flex gap-4">
                      {SOCIALS.map((social) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-gray-100 p-3 text-blue-600 transition-colors hover:bg-blue-100"
                            aria-label={social.label}
                          >
                            <Icon className="h-5 w-5" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-16">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-slate-100 shadow-sm">
            <iframe
              title="Villa Somalia Map"
              src="https://maps.google.com/maps?q=Villa%20Somalia%2C%20Mogadishu&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="h-96 w-full grayscale"
              loading="lazy"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

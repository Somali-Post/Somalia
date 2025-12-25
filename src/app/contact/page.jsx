"use client";

import { Clock, Globe, Mail, MapPin, Phone } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

const CONTACT_ITEMS = [
  {
    title: "Main Office",
    description: "Villa Somalia, Mogadishu, Federal Republic of Somalia",
    icon: MapPin,
  },
  {
    title: "General Inquiries",
    description: "info@opm.gov.so",
    icon: Mail,
  },
  {
    title: "Media & Press",
    description: "media@opm.gov.so",
    icon: Globe,
  },
  {
    title: "Working Hours",
    description: "Sat - Thu: 8:00 AM - 4:00 PM (East Africa Time)",
    icon: Clock,
  },
];

const SUBJECTS = [
  "General Inquiry",
  "Press",
  "Visa Service",
  "Citizenship",
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <PageHeader
          title="Contact Us"
          description="Get in touch with the Federal Government of Somalia"
        />

        <section className="py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_1fr]">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                Official Contact Channels
              </h2>
              <div className="grid gap-4">
                {CONTACT_ITEMS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                    >
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-[#4189DD]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Send an Inquiry
              </h3>
              <form className="mt-6 space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#4189DD]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#4189DD]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Subject
                  </label>
                  <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-[#4189DD]">
                    {SUBJECTS.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#4189DD]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#4189DD] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2f72c2]"
                >
                  Send Message
                </button>
              </form>
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

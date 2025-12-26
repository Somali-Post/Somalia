import { ExternalLink } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

const DIGITAL_SERVICES = [
  {
    title: "Business Registration",
    description: "Register a company online via SBRS.",
    href: "https://ebusiness.gov.so",
  },
  {
    title: "E-Visa Application",
    description: "Apply for entry visa (Tourist/Business).",
    href: "https://visa.gov.so",
  },
  {
    title: "National Exam Results",
    description: "Check Grade 8 & 12 results.",
    href: "https://soneb.gov.so",
  },
  {
    title: "Passport Information",
    description: "Download forms and view requirements.",
    href: "https://immigration.gov.so",
  },
];

const GENERAL_SERVICES = [
  {
    title: "Driver's License",
    description: "Available at Traffic Police HQ and Regional Centers.",
  },
  {
    title: "Civil Registration",
    description: "Birth and Marriage Certificates at Local Municipality.",
  },
  {
    title: "Land Registration",
    description: "Benadir Regional Administration / Local Courts.",
  },
];

const EMERGENCY_CONTACTS = [
  {
    title: "Police",
    number: "888",
    description: "For reporting crimes and immediate danger.",
  },
  {
    title: "Ambulance",
    number: "999",
    description: "Medical emergencies and urgent transport.",
  },
  {
    title: "Fire",
    number: "555",
    description: "Fire outbreaks and rescue response.",
  },
  {
    title: "Red Crescent",
    number: "446",
    description: "Humanitarian relief and emergency support.",
  },
  {
    title: "NISA Tip-line",
    number: "991",
    description: "Security tips and threat reporting.",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <PageHeader
          title="Citizen Services"
          description="Access government services online and offline."
        />

      <section className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
              E-Government
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
              Digital Services
            </h2>
            <p className="text-sm text-slate-600">
              Secure portals to access core government services online.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {DIGITAL_SERVICES.map((service) => (
              <a
                key={service.title}
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {service.description}
                  </p>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                  Visit portal
                  <ExternalLink className="h-4 w-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
              Essential Services
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
              General Services
            </h2>
            <p className="text-sm text-slate-600">
              In-person services delivered through regional offices.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {GENERAL_SERVICES.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="emergency" className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
              Safety
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
              Emergency Assistance
            </h2>
            <p className="text-sm text-slate-600">
              Immediate support numbers for urgent situations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {EMERGENCY_CONTACTS.map((contact) => (
              <div
                key={contact.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {contact.title}
                  </h3>
                  <span className="text-2xl font-semibold text-blue-600">
                    {contact.number}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-600">
                  {contact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}

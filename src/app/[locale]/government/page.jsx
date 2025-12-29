import { Link } from "@/i18n/navigation";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

const GOVERNMENT_SECTIONS = [
  {
    title: "The Executive",
    description: "Leadership of the Head of State and Government.",
    href: "/government/executive",
  },
  {
    title: "The Cabinet",
    description: "Council of Ministers and federal portfolios.",
    href: "/government/cabinet",
  },
  {
    title: "The Parliament",
    description: "Bicameral legislature and representation.",
    href: "/government/parliament",
  },
  {
    title: "Ministries",
    description: "Federal ministries and mandates.",
    href: "/government/ministries",
  },
  {
    title: "National Agencies",
    description: "Independent authorities and commissions.",
    href: "/government/agencies",
  },
  {
    title: "Member States",
    description: "Federal member states and regional administration.",
    href: "/government/states",
  },
  {
    title: "The Constitution",
    description: "The supreme law of the Federal Republic.",
    href: "/government/constitution",
  },
  {
    title: "National Vision 2060",
    description: "Long-term strategy and NDP-9 pillars.",
    href: "/government/vision",
  },
];

export default function GovernmentLandingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <PageHeader
          title="Government"
          description="Explore the institutions, leadership, and strategic direction of the Federal Republic."
        />

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                Institutions
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-blue-900">
                Federal Government Directory
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Quick access to the core branches and national bodies.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {GOVERNMENT_SECTIONS.map((section) => (
                <Link
                  key={section.title}
                  href={section.href}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 transition group-hover:text-blue-700">
                      {section.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600">
                      {section.description}
                    </p>
                  </div>
                  <span className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                    Learn more
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

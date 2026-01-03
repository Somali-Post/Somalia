import { CheckCircle } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

const FEATURES = [
  "Screen reader compatibility for core service flows.",
  "Keyboard navigation across primary menus and forms.",
  "High-contrast text for improved readability.",
];

export default function AccessibilityPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-50 text-slate-900">
        <PageHeader
          title="Accessibility Statement"
          description="Ensuring equal access for all citizens."
        />

        <section className="relative z-10 mt-0 px-6 pb-20 md:-mt-20">
          <div className="mx-auto max-w-4xl">
            <div className="relative z-20 overflow-hidden rounded-xl border-t-8 border-blue-900 bg-white shadow-2xl">
              <div className="p-10 md:p-16">
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <h2 className="text-2xl font-semibold text-blue-900">
                    Accessibility Statement
                  </h2>
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Last Updated: December 2025
                  </span>
                </div>

                <hr className="my-8 border-gray-100" />

                <section>
                  <h3 className="text-xl font-semibold text-blue-900">
                    Our Accessibility Standard
                  </h3>
                  <p className="mt-3 text-slate-700 leading-relaxed">
                    We strive to meet WCAG 2.1 Level AA standards and evaluate
                    the portal regularly to improve access for all users.
                  </p>
                </section>

                <hr className="my-8 border-gray-100" />

                <section>
                  <h3 className="text-xl font-semibold text-blue-900">
                    Compliance Features
                  </h3>
                  <ul className="mt-4 space-y-3 text-slate-700">
                    {FEATURES.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 text-blue-600" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <hr className="my-8 border-gray-100" />

                <section>
                  <h3 className="text-xl font-semibold text-blue-900">
                    Commitment to Inclusion
                  </h3>
                  <p className="mt-3 text-slate-700 leading-relaxed">
                    The Federal Government is committed to digital inclusion
                    for persons with disabilities and will continue to improve
                    accessibility features in line with international
                    standards.
                  </p>
                </section>

                <hr className="my-8 border-gray-100" />

                <section>
                  <h3 className="text-xl font-semibold text-blue-900">
                    Feedback
                  </h3>
                  <p className="mt-3 text-slate-700 leading-relaxed">
                    If you encounter barriers, please contact{" "}
                    <a
                      href="mailto:e-gov@moct.gov.so"
                      className="font-semibold text-blue-700 hover:text-blue-800"
                    >
                      e-gov@moct.gov.so
                    </a>
                    .
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

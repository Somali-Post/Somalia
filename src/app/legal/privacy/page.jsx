import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-50 text-slate-900">
        <PageHeader
          title="Privacy Policy"
          description="How we protect your personal data and rights."
        />

        <section className="relative z-10 mt-0 px-6 pb-20 md:-mt-20">
          <div className="mx-auto max-w-4xl">
            <div className="relative z-20 overflow-hidden rounded-xl border-t-8 border-blue-900 bg-white shadow-2xl">
              <div className="p-10 md:p-16">
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <h2 className="text-2xl font-semibold text-blue-900">
                    Privacy Policy
                  </h2>
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Last Updated: December 2025
                  </span>
                </div>

                <div className="mt-8 rounded-lg bg-slate-50 p-6 text-sm text-slate-700">
                  <p className="font-semibold text-slate-900">Key Takeaways</p>
                  <p className="mt-2 leading-relaxed">
                    This portal processes data under the Data Protection Act of
                    2023 and Article 14 of the Provisional Constitution (Right
                    to Privacy). Data is collected only for service delivery,
                    stored within Somalia, and protected by national encryption
                    standards.
                  </p>
                </div>

                <hr className="my-8 border-gray-100" />

                <section>
                  <h3 className="text-xl font-semibold text-blue-900">
                    Legal Basis
                  </h3>
                  <p className="mt-3 text-slate-700 leading-relaxed">
                    Processing of personal data is governed by the Data
                    Protection Act of 2023 and Article 14 of the Provisional
                    Constitution, which guarantees the right to privacy. We
                    process data only when there is a lawful basis and a clear
                    public service purpose.
                  </p>
                </section>

                <hr className="my-8 border-gray-100" />

                <section>
                  <h3 className="text-xl font-semibold text-blue-900">
                    Data Collection and Use
                  </h3>
                  <p className="mt-3 text-slate-700 leading-relaxed">
                    We collect limited usage data (including cookies and
                    analytics) to ensure secure, reliable, and efficient service
                    delivery. Personal data provided through forms or service
                    applications (including passport or identification
                    services) is collected solely to provide the requested
                    service, verify identity, and fulfill legal obligations.
                  </p>
                </section>

                <hr className="my-8 border-gray-100" />

                <section>
                  <h3 className="text-xl font-semibold text-blue-900">
                    Data Sovereignty and Security
                  </h3>
                  <p className="mt-3 text-slate-700 leading-relaxed">
                    All citizen data is stored securely on servers within the
                    Federal Republic of Somalia and encrypted according to
                    national standards. We apply administrative, technical, and
                    physical safeguards to protect data from unauthorized
                    access, alteration, or disclosure.
                  </p>
                </section>

                <hr className="my-8 border-gray-100" />

                <section>
                  <h3 className="text-xl font-semibold text-blue-900">
                    Your Rights
                  </h3>
                  <p className="mt-3 text-slate-700 leading-relaxed">
                    Citizens have the right to access, rectify, or request
                    deletion of their personal data in accordance with the Data
                    Protection Act of 2023. Requests should be directed through
                    the National Identification and Registration Authority
                    (NIRA), which is the authorized body for identity and data
                    governance services.
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

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-50 text-slate-900">
        <PageHeader
          title="Terms & Conditions"
          description="Rules governing the use of the Official Government Portal."
        />

        <section className="relative z-10 mt-0 px-6 pb-20 md:-mt-20">
          <div className="mx-auto max-w-4xl">
            <div className="relative z-20 overflow-hidden rounded-xl border-t-8 border-blue-900 bg-white shadow-2xl">
              <div className="p-10 md:p-16">
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <h2 className="text-2xl font-semibold text-blue-900">
                    Terms & Conditions
                  </h2>
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Last Updated: December 2025
                  </span>
                </div>

                <hr className="my-8 border-gray-100" />

                <section>
                  <h3 className="text-xl font-semibold text-blue-900">
                    1. Introduction
                  </h3>
                  <p className="mt-3 text-slate-700 leading-relaxed">
                    These Terms & Conditions govern access to and use of the
                    Official Government Portal. By using this portal, you agree
                    to comply with these terms and all applicable laws of the
                    Federal Republic of Somalia.
                  </p>
                </section>

                <hr className="my-8 border-gray-100" />

                <section>
                  <h3 className="text-xl font-semibold text-blue-900">
                    2. Disclaimer
                  </h3>
                  <p className="mt-3 text-slate-700 leading-relaxed">
                    Information on this portal is for general guidance.
                    Official Gazettes and legal decrees take precedence in all
                    matters of law and policy.
                  </p>
                </section>

                <hr className="my-8 border-gray-100" />

                <section>
                  <h3 className="text-xl font-semibold text-blue-900">
                    3. Intellectual Property
                  </h3>
                  <p className="mt-3 text-slate-700 leading-relaxed">
                    All content, including the Coat of Arms and Ministry Logos,
                    is property of the Federal Government of Somalia.
                    Unauthorized use, reproduction, or distribution is
                    prohibited.
                  </p>
                </section>

                <hr className="my-8 border-gray-100" />

                <section>
                  <h3 className="text-xl font-semibold text-blue-900">
                    4. Misuse and Security
                  </h3>
                  <p className="mt-3 text-slate-700 leading-relaxed">
                    Any attempt to hack, scrape, disrupt, or otherwise interfere
                    with this service is a criminal offense under the National
                    Penal Code. The Government reserves the right to
                    investigate and prosecute unlawful activity.
                  </p>
                </section>

                <hr className="my-8 border-gray-100" />

                <section>
                  <h3 className="text-xl font-semibold text-blue-900">
                    5. Governing Law
                  </h3>
                  <p className="mt-3 text-slate-700 leading-relaxed">
                    These terms are governed by the laws of the Federal
                    Republic of Somalia. Disputes shall be subject to the
                    exclusive jurisdiction of the courts in Mogadishu.
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

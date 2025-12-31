import EmergencyBar from "@/components/EmergencyBar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import KeyServices from "@/components/KeyServices";
import LatestNews from "@/components/LatestNews";
import Leadership from "@/components/Leadership";
import MemberStates from "@/components/MemberStates";
import MinistryDirectory from "@/components/MinistryDirectory";
import Navbar from "@/components/Navbar";
import NationalAgencies from "@/components/NationalAgencies";
import NationalCalendar from "@/components/NationalCalendar";
import PublicNotices from "@/components/PublicNotices";
import Vision2060 from "@/components/Vision2060";
import { getTranslations } from "next-intl/server";

export default async function Home({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return (
    <>
      <Navbar />
      <Hero />
      <Leadership />
      <KeyServices />
      <NationalCalendar />
      <MinistryDirectory limit={6} />
      <NationalAgencies limit={3} />
      <Vision2060 />
      <LatestNews />
      <PublicNotices />
      <section className="bg-blue-600 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center text-white sm:flex-row sm:text-left">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/80">
              {t("newsletter.eyebrow")}
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              {t("newsletter.title")}
            </h2>
          </div>
          <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder={t("newsletter.placeholder")}
              className="w-full rounded-full border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/70 outline-none focus:border-white"
            />
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-600">
              {t("newsletter.button")}
            </button>
          </div>
        </div>
      </section>
      <div className="h-10" />
      <MemberStates />
      <EmergencyBar />
      <Footer />
    </>
  );
}


"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NationalAgencies from "@/components/NationalAgencies";
import PageHeader from "@/components/PageHeader";
import { useTranslations } from "next-intl";

export default function AgenciesPage() {
  const t = useTranslations("AgenciesPage");

  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <PageHeader
          title={t("title")}
          description={t("description")}
        />
        <NationalAgencies />
      </main>
      <Footer />
    </>
  );
}

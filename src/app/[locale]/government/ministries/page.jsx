"use client";

import Footer from "@/components/Footer";
import MinistryDirectory from "@/components/MinistryDirectory";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { useTranslations } from "next-intl";

export default function MinistriesPage() {
  const t = useTranslations("MinistriesPage");

  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <PageHeader title={t("title")} />
        <MinistryDirectory />
      </main>
      <Footer />
    </>
  );
}

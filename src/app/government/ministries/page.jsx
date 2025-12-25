"use client";

import Footer from "@/components/Footer";
import MinistryDirectory from "@/components/MinistryDirectory";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

export default function MinistriesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <PageHeader title="Ministries Directory" />
        <MinistryDirectory />
      </main>
      <Footer />
    </>
  );
}

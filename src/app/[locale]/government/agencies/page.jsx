"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NationalAgencies from "@/components/NationalAgencies";
import PageHeader from "@/components/PageHeader";

export default function AgenciesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <PageHeader
          title="National Agencies"
          description="Independent authorities serving the public interest."
        />
        <NationalAgencies />
      </main>
      <Footer />
    </>
  );
}

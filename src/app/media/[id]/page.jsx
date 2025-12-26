import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { newsArticles } from "@/data/news";

export default async function PressReleasePage({ params }) {
  const { id } = await params;
  const article = newsArticles.find((item) => item.id === id);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pb-20">
        <PageHeader
          title="Press Release"
          description="Official Communications & News"
        />

        <div className="container mx-auto relative z-10 -mt-20 px-6">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-xl bg-white shadow-xl">
            <div className="relative h-[400px] w-full">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8 md:p-12">
              <div className="mb-6 flex items-center gap-6 text-sm font-semibold text-blue-600">
                <span className="flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1">
                  <Calendar size={16} /> {article.date}
                </span>
                <span className="flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1">
                  <Tag size={16} /> {article.category}
                </span>
              </div>

              <h1 className="mb-8 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {article.title}
              </h1>

              <div className="prose prose-lg max-w-none whitespace-pre-line leading-relaxed text-slate-700">
                {article.content}
              </div>

              <div className="mt-12 border-t border-gray-100 pt-8">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 font-semibold text-blue-700 hover:underline"
                >
                  <ArrowLeft size={20} /> Return to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

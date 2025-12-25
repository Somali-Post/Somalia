"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PageHeader({ title, description, breadcrumb = [] }) {
  return (
    <section className="relative flex min-h-[40vh] items-center overflow-hidden border-b-4 border-yellow-500 bg-blue-900 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-800 via-blue-900 to-slate-900 text-white">
      <div className="pointer-events-none absolute inset-0">
        <svg
          viewBox="0 0 24 24"
          className="absolute bottom-[-50px] right-[-50px] h-[500px] w-[500px] text-white opacity-[0.05]"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>

      <div className="container mx-auto flex h-full flex-col justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-4"
        >
          {breadcrumb.length > 0 && (
            <nav className="text-xs font-semibold uppercase tracking-widest text-yellow-500">
              <div className="flex flex-wrap items-center gap-2">
                {breadcrumb.map((crumb, index) => {
                  const isLast = index === breadcrumb.length - 1;
                  return (
                    <span key={crumb.label} className="flex items-center gap-2">
                      {crumb.href && !isLast ? (
                        <Link href={crumb.href} className="hover:text-yellow-200">
                          {crumb.label}
                        </Link>
                      ) : (
                        <span className="text-yellow-200">{crumb.label}</span>
                      )}
                      {!isLast && <span className="text-yellow-600">/</span>}
                    </span>
                  );
                })}
              </div>
            </nav>
          )}

          <h1 className="text-5xl font-bold text-white">{title}</h1>

          {description && (
            <p className="max-w-2xl text-lg font-light text-blue-100">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

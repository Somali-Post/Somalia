"use client";

import Link from "next/link";

export default function PageHeader({ title, description, breadcrumbs = [] }) {
  return (
    <section className="flex h-[40vh] items-center bg-blue-600 text-white">
      <div className="container mx-auto px-6 text-center">
        {breadcrumbs.length > 0 && (
          <nav className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <span key={crumb.label} className="flex items-center gap-2">
                    {crumb.href && !isLast ? (
                      <Link href={crumb.href} className="hover:text-white">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-white">{crumb.label}</span>
                    )}
                    {!isLast && <span className="text-white/50">/</span>}
                  </span>
                );
              })}
            </div>
          </nav>
        )}
        <h1 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-sm text-white/80 sm:text-base">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}


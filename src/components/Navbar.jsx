"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Menu, Search, X } from "lucide-react";

export default function Navbar() {
  const tNav = useTranslations("Navbar");
  const t = useTranslations("Navbar.links");
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const LOCALES = ["en", "so", "ar"];

  const toggleDropdown = (key) => {
    setOpenDropdown((current) => (current === key ? null : key));
  };

  const getPathForLocale = (targetLocale) => {
    const normalized = pathname?.startsWith("/") ? pathname : `/${pathname || ""}`;
    const segments = normalized.split("/");
    const currentLocale = segments[1];

    if (!LOCALES.includes(currentLocale)) {
      return `/${targetLocale}${normalized === "/" ? "" : normalized}`;
    }

    segments[1] = targetLocale;
    return segments.join("/");
  };

  const locale = pathname?.startsWith("/ar")
    ? "ar"
    : pathname?.startsWith("/so")
    ? "so"
    : "en";

  const NAV_LINKS = [
    { id: "home", label: tNav("home"), href: "/" },
    {
      id: "nation",
      label: tNav("nation"),
      children: [
        { id: "history", label: t("nation.history"), href: "/nation/history" },
        { id: "culture", label: t("nation.culture"), href: "/nation/culture" },
        { id: "food", label: t("nation.food"), href: "/nation/food" },
        { id: "tourism", label: t("nation.tourism"), href: "/nation/tourism" },
      ],
    },
    {
      id: "gov",
      label: tNav("gov"),
      children: [
        {
          id: "constitution",
          label: t("government.constitution"),
          href: "/government/constitution",
        },
        {
          id: "vision",
          label: t("government.vision"),
          href: "/government/vision",
        },
        {
          id: "executive",
          label: t("government.executive"),
          href: "/government/executive",
        },
        {
          id: "cabinet",
          label: t("government.cabinet"),
          href: "/government/cabinet",
        },
        {
          id: "parliament",
          label: t("government.parliament"),
          href: "/government/parliament",
        },
        {
          id: "ministries",
          label: t("government.ministries"),
          href: "/government/ministries",
        },
        {
          id: "agencies",
          label: t("government.agencies"),
          href: "/government/agencies",
        },
        {
          id: "states",
          label: t("government.states"),
          href: "/government/states",
        },
      ],
    },
    {
      id: "services",
      label: tNav("services"),
      children: [
        { id: "all", label: t("services.all"), href: "/services" },
        {
          id: "emergency",
          label: t("services.emergency"),
          href: "/services#emergency",
        },
        { id: "jobs", label: t("services.jobs"), href: "/services/jobs" },
        { id: "invest", label: t("services.invest"), href: "/invest" },
      ],
    },
    { id: "contact", label: tNav("contact"), href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 h-20 bg-white shadow-sm">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}`}
          className={`flex min-w-0 items-center gap-3 ${
            locale === "ar" ? "font-arabic" : ""
          }`}
        >
          <Image
            src="/logos/coat-of-arms.png"
            width={45}
            height={45}
            alt="Coat of Arms"
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="hidden text-sm font-semibold text-blue-800 md:block md:text-lg leading-tight">
              {tNav("brand_prefix")}{" "}
              <br className="hidden lg:block" /> {tNav("brand_name")}
            </span>
            <span className="block max-w-[8.5rem] truncate text-base font-semibold text-blue-800 md:hidden">
              {tNav("brand_name_mobile")}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => {
            if (link.children) {
              return (
                <div key={link.id} className="group relative">
                  <button
                    type="button"
                    className="flex items-center gap-1 text-sm font-medium text-slate-700 transition hover:text-blue-600"
                  >
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="absolute left-0 top-full hidden w-60 rounded-xl border border-slate-200 bg-white p-3 shadow-lg group-hover:block">
                    {link.children.map((child) => {
                      const Icon = child.icon;
                      return (
                        <Link
                          key={`${link.id}-${child.id}`}
                          href={child.href}
                          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
                        >
                          {Icon && <Icon className="h-4 w-4 text-blue-600" />}
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.id}
                href={link.href}
                className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            aria-label="Search"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-blue-600 hover:text-blue-600 md:inline-flex"
          >
            <Search className="h-4 w-4" />
          </button>
          <Image
            src="/logos/flag.png"
            alt="Somalia flag"
            width={24}
            height={24}
            className="mr-2 hidden h-6 w-6 rounded-full object-cover md:inline-flex"
          />
          <div className="flex items-center bg-slate-100 rounded-full p-1 border border-slate-200">
            {LOCALES.map((lang) => (
              <button
                key={lang}
                onClick={() => router.push(getPathForLocale(lang))}
                className={`relative z-10 px-3 py-1.5 text-xs font-bold transition-colors duration-200 ${
                  locale === lang
                    ? "text-blue-900"
                    : "text-slate-500 hover:text-slate-700"
                }`}
                type="button"
                aria-label={`Switch language to ${lang}`}
              >
                {locale === lang && (
                  <motion.div
                    layoutId="active-lang-pill"
                    className="absolute inset-0 z-[-1] rounded-full bg-white shadow-sm"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-700 shadow-sm transition hover:border-blue-600 hover:text-blue-600 lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <div className="space-y-4 px-4 py-4">
            <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2">
              <Search className="h-4 w-4 text-slate-500" />
              <input
                type="text"
                placeholder={tNav("search_placeholder")}
                className="w-full text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>
            {NAV_LINKS.map((link) => {
              if (link.children) {
                const isOpen = openDropdown === link.id;
                return (
                  <div key={link.id} className="space-y-2">
                    <button
                      type="button"
                      onClick={() => toggleDropdown(link.id)}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-700 transition hover:text-blue-600"
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-4 w-4 transition ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="space-y-1 pl-3">
                        {link.children.map((child) => {
                          const Icon = child.icon;
                          return (
                            <Link
                              key={`${link.id}-${child.id}`}
                              href={child.href}
                              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
                              onClick={() => setMenuOpen(false)}
                            >
                              {Icon && (
                                <Icon className="h-4 w-4 text-blue-600" />
                              )}
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:text-blue-600"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="flex items-center bg-slate-100 rounded-full p-1 border border-slate-200">
              {LOCALES.map((lang) => (
                <button
                  key={`mobile-${lang}`}
                  onClick={() => {
                    router.push(getPathForLocale(lang));
                    setMenuOpen(false);
                  }}
                  className={`relative z-10 px-3 py-1.5 text-xs font-bold transition-colors duration-200 ${
                    locale === lang
                      ? "text-blue-900"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                  type="button"
                  aria-label={`Switch language to ${lang}`}
                >
                  {locale === lang && (
                    <motion.div
                      layoutId="active-lang-pill"
                      className="absolute inset-0 z-[-1] rounded-full bg-white shadow-sm"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}



"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, Search, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "The Nation",
    children: [
      { label: "History", href: "/nation/history" },
      { label: "Culture & People", href: "/nation/culture" },
      { label: "Food & Cuisine", href: "/nation/food" },
      { label: "Tourism", href: "/nation/tourism" },
    ],
  },
  {
    label: "Government",
    children: [
      { label: "Constitution", href: "/government/constitution" },
      { label: "National Vision 2060", href: "/government/vision" },
      { label: "The Executive", href: "/government/executive" },
      { label: "The Cabinet", href: "/government/cabinet" },
      { label: "The Parliament", href: "/government/parliament" },
      { label: "Ministries", href: "/government/ministries" },
      { label: "National Agencies", href: "/government/agencies" },
      { label: "Member States", href: "/government/states" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "All Services", href: "/services" },
      { label: "Emergency Contacts", href: "/services#emergency" },
      { label: "Jobs & Careers", href: "/services/jobs" },
      { label: "Invest", href: "/invest" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [lang, setLang] = useState("EN");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setOpenDropdown((current) => (current === label ? null : label));
  };

  return (
    <header className="sticky top-0 z-50 h-20 bg-white shadow-sm">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Image
            src="/logos/coat-of-arms.png"
            width={45}
            height={45}
            alt="Coat of Arms"
            className="rounded-full"
          />
          <span className="text-sm font-semibold text-blue-800 md:text-lg">
            <span className="hidden md:inline">Federal Republic of </span>
            Somalia
          </span>
        </div>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => {
            if (link.children) {
              return (
                <div key={link.label} className="group relative">
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
                          key={child.label}
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
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
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
          <button
            type="button"
            onClick={() => setLang((current) => (current === "EN" ? "SO" : "EN"))}
            className="hidden cursor-pointer rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-blue-600 hover:bg-gray-100 hover:text-blue-600 md:inline-flex sm:text-sm"
          >
            {lang === "EN" ? "Somali | English" : "English | Soomaali"}
          </button>
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
                placeholder="Search"
                className="w-full text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>
            {NAV_LINKS.map((link) => {
              if (link.children) {
                const isOpen = openDropdown === link.label;
                return (
                  <div key={link.label} className="space-y-2">
                    <button
                      type="button"
                      onClick={() => toggleDropdown(link.label)}
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
                              key={child.label}
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
                  key={link.label}
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:text-blue-600"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <button
              type="button"
              onClick={() => setLang((current) => (current === "EN" ? "SO" : "EN"))}
              className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-gray-100"
            >
              <span>{lang === "EN" ? "Somali | English" : "English | Soomaali"}</span>
              <Image
                src="/logos/flag.png"
                alt="Somalia flag"
                width={20}
                height={20}
                className="h-5 w-5 rounded-full object-cover"
              />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}


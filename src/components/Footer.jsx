"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Twitter,
} from "lucide-react";

const GOVERNMENT_LINKS = [
  { label: "The Executive", href: "/government/executive" },
  { label: "The Cabinet", href: "/government/cabinet" },
  { label: "Parliament", href: "/government/parliament" },
  { label: "Ministries", href: "/government/ministries" },
  { label: "Member States", href: "/government/states" },
  { label: "The Constitution", href: "/government/constitution" },
];

const SERVICE_LINKS = [
  { label: "E-Passport", href: "/services" },
  { label: "Visa Application", href: "/services" },
  { label: "Business Registration (SBRS)", href: "https://ebusiness.gov.so" },
  { label: "National ID (NIRA)", href: "/services" },
  { label: "Invest in Somalia", href: "/invest" },
  { label: "Vision 2060", href: "/government/vision" },
];

const SOCIAL_LINKS = [
  { label: "X", href: "https://x.com/somalia", icon: Twitter },
  { label: "Facebook", href: "https://www.facebook.com/Somalia/", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/somalia/", icon: Instagram },
  {
    label: "LinkedIn",
    href: "https://so.linkedin.com/company/federalgovernmentofsomalia",
    icon: Linkedin,
  },
  { label: "Reddit", href: "https://www.reddit.com/r/Somalia/", icon: MessageCircle },
];

export default function Footer() {
  return (
    <footer className="text-white">
      <div className="bg-blue-950 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Image
                src="/logos/coat-of-arms.png"
                width={48}
                height={48}
                alt="Coat of Arms"
                className="rounded-full"
              />
              <p className="text-lg font-semibold">
                Federal Republic of Somalia
              </p>
            </div>
            <p className="text-sm text-blue-100">
              Official communications and public information portal of the
              Federal Government.
            </p>
            <p className="text-sm text-blue-100">
              Villa Somalia, Mogadishu, Somalia
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-500">
              Governance
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-blue-100">
              {GOVERNMENT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link className="transition hover:text-white" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-500">
              Services & Resources
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-blue-100">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("http") ? (
                    <a
                      className="transition hover:text-white"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link className="transition hover:text-white" href={link.href}>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-500">
              Connect With Us
            </h3>
            <div className="flex items-center gap-3 text-sm text-blue-100">
              <Mail className="h-4 w-4 text-yellow-500" />
              <span>info@opm.gov.so</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-yellow-500 hover:text-yellow-500"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-900">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-xs text-blue-100 md:flex-row md:items-center md:justify-between">
          <span>© 2025 Federal Republic of Somalia. All Rights Reserved.</span>
          <span className="text-center">
            Designed for the People of Somalia
          </span>
          <span className="text-right">Privacy Policy | Terms of Use | Accessibility</span>
        </div>
      </div>
    </footer>
  );
}

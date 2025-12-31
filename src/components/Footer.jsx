"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Twitter,
} from "lucide-react";

const GOVERNMENT_LINKS = [
  { href: "/government/executive" },
  { href: "/government/cabinet" },
  { href: "/government/parliament" },
  { href: "/government/ministries" },
  { href: "/government/states" },
  { href: "/government/constitution" },
];

const SERVICE_LINKS = [
  { href: "/services" },
  { href: "https://ebusiness.gov.so" },
  { href: "/government/agencies/nira" },
  { href: "/invest" },
  { href: "/government/vision" },
];

const SOCIAL_LINKS = [
  { href: "https://x.com/somalia", icon: Twitter },
  { href: "https://www.facebook.com/Somalia/", icon: Facebook },
  { href: "https://www.instagram.com/somalia/", icon: Instagram },
  {
    href: "https://so.linkedin.com/company/federalgovernmentofsomalia",
    icon: Linkedin,
  },
  { href: "https://www.reddit.com/r/Somalia/", icon: MessageCircle },
];

export default function Footer() {
  const t = useTranslations("Footer");
  const governanceLinks = t.raw("governance.links");
  const serviceLinks = t.raw("services.links");
  const socialLabels = t.raw("connect.social");
  const legalLinks = t.raw("legal.links");

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
              <p className="text-lg font-semibold">{t("brand")}</p>
            </div>
            <p className="text-sm text-blue-100">{t("description")}</p>
            <p className="text-sm text-blue-100">{t("address")}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-500">
              {t("governance.title")}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-blue-100">
              {GOVERNMENT_LINKS.map((link, index) => {
                const label = governanceLinks[index] ?? "";
                return (
                  <li key={link.href}>
                    <Link className="transition hover:text-white" href={link.href}>
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-500">
              {t("services.title")}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-blue-100">
              {SERVICE_LINKS.map((link, index) => {
                const label = serviceLinks[index] ?? "";
                return (
                  <li key={link.href}>
                    {link.href.startsWith("http") ? (
                      <a
                        className="transition hover:text-white"
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {label}
                      </a>
                    ) : (
                      <Link className="transition hover:text-white" href={link.href}>
                        {label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-500">
              {t("connect.title")}
            </h3>
            <div className="flex items-center gap-3 text-sm text-blue-100">
              <Mail className="h-4 w-4 text-yellow-500" />
              <span>{t("connect.email")}</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((social, index) => {
                const Icon = social.icon;
                const label = socialLabels[index] ?? "";
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-yellow-500 hover:text-yellow-500"
                    aria-label={label}
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
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-center text-xs text-blue-100 md:flex-row md:text-left">
          <span>{t("legal.copyright")}</span>
          <span className="text-center">{t("legal.tagline")}</span>
          <span className="flex flex-wrap items-center justify-center gap-2 md:justify-end">
            <Link href="/legal/privacy" className="transition hover:text-white">
              {legalLinks[0] ?? ""}
            </Link>
            <span className="text-blue-100/60">|</span>
            <Link href="/legal/terms" className="transition hover:text-white">
              {legalLinks[1] ?? ""}
            </Link>
            <span className="text-blue-100/60">|</span>
            <Link
              href="/legal/accessibility"
              className="transition hover:text-white"
            >
              {legalLinks[2] ?? ""}
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

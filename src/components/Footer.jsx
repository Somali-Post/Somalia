"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Ambulance,
  Flame,
  HeartPulse,
  Phone,
  ShieldAlert,
} from "lucide-react";

const QUICK_LINKS = [
  { label: "Government", href: "/government" },
  { label: "Ministries", href: "/government/ministries" },
  { label: "Agencies", href: "/government/agencies" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="text-white">
      <div className="bg-red-700 text-white">
        <div className="mx-auto flex max-w-6xl flex-row items-center justify-center gap-8 px-6 py-3 text-sm font-semibold tracking-wide">
          <span className="text-white/80">EMERGENCY HOTLINES:</span>
          <span className="flex items-center gap-2">
            <Phone size={16} />
            Police: 888
          </span>
          <span className="text-white/30">|</span>
          <span className="flex items-center gap-2">
            <Ambulance size={16} />
            Ambulance: 999
          </span>
          <span className="text-white/30">|</span>
          <span className="flex items-center gap-2">
            <Flame size={16} />
            Fire: 555
          </span>
          <span className="text-white/30">|</span>
          <span className="flex items-center gap-2">
            <HeartPulse size={16} />
            Red Crescent: 446
          </span>
          <span className="text-white/30">|</span>
          <span className="flex items-center gap-2">
            <ShieldAlert size={16} />
            NISA Tip-line: 991
          </span>
        </div>
      </div>

      <div className="bg-[#1e3a8a]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logos/coat-of-arms.png"
                width={40}
                height={40}
                alt="Coat of Arms"
                className="rounded-full"
              />
              <p className="text-lg font-semibold">Federal Republic of Somalia</p>
            </div>
            <p className="text-sm text-white/80">
              Official communications and public information portal.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    className="text-white/80 hover:text-white"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Contact
            </h3>
            <p className="mt-4 text-sm text-white/80">info@opm.gov.so</p>
          </div>
        </div>

        <div className="border-t border-white/15">
          <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-6 py-6 text-xs text-white/70 sm:justify-between">
            <div className="flex items-center gap-2">
              <img
                src="/logos/flag.png"
                alt="Somalia flag"
                width={20}
                height={20}
                className="h-5 w-5 rounded-full object-cover"
              />
              <span>Designed for the People of Somalia.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

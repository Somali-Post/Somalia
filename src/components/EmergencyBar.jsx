"use client";

import {
  Ambulance,
  Flame,
  HeartPulse,
  Phone,
  ShieldAlert,
} from "lucide-react";

export default function EmergencyBar() {
  return (
    <div className="bg-red-700 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 px-6 py-3 text-center text-sm font-semibold tracking-wide md:flex-row md:gap-6 md:text-left">
        <span className="text-white/80">EMERGENCY HOTLINES:</span>
        <span className="flex items-center gap-2">
          <Phone size={16} />
          Police: 888
        </span>
        <span className="hidden text-white/30 md:inline">|</span>
        <span className="flex items-center gap-2">
          <Ambulance size={16} />
          Ambulance: 999
        </span>
        <span className="hidden text-white/30 md:inline">|</span>
        <span className="flex items-center gap-2">
          <Flame size={16} />
          Fire: 555
        </span>
        <span className="hidden text-white/30 md:inline">|</span>
        <span className="flex items-center gap-2">
          <HeartPulse size={16} />
          Red Crescent: 446
        </span>
        <span className="hidden text-white/30 md:inline">|</span>
        <span className="flex items-center gap-2">
          <ShieldAlert size={16} />
          NISA Tip-line: 991
        </span>
      </div>
    </div>
  );
}

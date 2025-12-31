"use client";

import { useTranslations } from "next-intl";

export default function NationalCalendar() {
  const t = useTranslations("NationalCalendar");
  const events = t.raw("events");
  const scrollingEvents = [
    ...(Array.isArray(events) ? events : []),
    ...(Array.isArray(events) ? events : []),
  ];

  return (
    <section className="w-full overflow-hidden bg-slate-50 py-12">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            {t("title")}
          </h2>
        </div>
      </div>

      <div className="flex w-max gap-8 animate-scroll">
        {scrollingEvents.map((event, index) => (
          <article
            key={`${event.day}-${event.month}-${event.title}-${index}`}
            className="flex w-80 shrink-0 items-center gap-4 rounded-lg bg-white p-4 shadow-md"
          >
            <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg bg-blue-600 text-white">
              <span className="text-2xl font-bold">{event.day}</span>
              <span className="text-xs font-semibold tracking-[0.2em] text-white/80">
                {event.month}
              </span>
            </div>
            <div>
              <h3 className="text-base font-semibold text-blue-900">
                {event.title}
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                {event.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

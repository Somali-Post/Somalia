import { NextIntlClientProvider } from "next-intl";
import { Noto_Sans_Arabic } from "next/font/google";
import { getMessages, setRequestLocale } from "next-intl/server";
import CookieConsent from "@/components/CookieConsent";
import { routing } from "@/i18n/routing";

const arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
});

export const metadata = {
  title: {
    template: "%s | Federal Republic of Somalia",
    default: "Official Portal of the Federal Government of Somalia",
  },
  description:
    "The official digital gateway to the Government of Somalia. Access services, ministries, and news from the Federal Republic.",
  icons: { icon: "/favicon.ico" },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale: rawLocale } = await params;
  const locale = routing.locales.includes(rawLocale)
    ? rawLocale
    : routing.defaultLocale;
  const dir = locale === "ar" ? "rtl" : "ltr";

  setRequestLocale(locale);
  const messages = await getMessages({ locale });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GovernmentOrganization",
    name: "Federal Republic of Somalia",
    url: "https://somaliagov.netlify.app",
    logo: "https://somaliagov.netlify.app/logos/coat-of-arms.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+252-61-000-0000",
      contactType: "customer service",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NextIntlClientProvider locale={locale} messages={messages}>
        <div
          dir={dir}
          className={`${arabic.variable} ${locale === "ar" ? arabic.className : ""}`}
        >
          {children}
          <CookieConsent />
        </div>
      </NextIntlClientProvider>
    </>
  );
}

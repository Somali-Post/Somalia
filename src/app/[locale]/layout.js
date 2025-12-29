import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import CookieConsent from "@/components/CookieConsent";
import { routing } from "@/i18n/routing";

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
  const { locale } = params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

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
      <NextIntlClientProvider messages={messages}>
        {children}
        <CookieConsent />
      </NextIntlClientProvider>
    </>
  );
}

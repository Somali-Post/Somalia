import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "./src/i18n/routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) ?? routing.defaultLocale;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});

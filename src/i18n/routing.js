import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "so", "ar"],
  defaultLocale: "en",
  localePrefix: "always",
});

import withPWA from "@ducanh2912/next-pwa";
import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  turbopack: {},
};

const withNextIntl = createNextIntlPlugin("./i18n.js");

const withPwa = withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

export default withNextIntl(withPwa(nextConfig));

import { Inter } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B4F8A",
};

export default function RootLayout({ children }) {
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
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}

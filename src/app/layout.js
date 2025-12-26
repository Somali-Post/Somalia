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
  themeColor: "#0B4F8A",
};

export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
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

export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

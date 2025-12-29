import { Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B4F8A",
};

export default function RootLayout({ children }) {
  const locale = headers().get("x-next-intl-locale") ?? "en";

  return (
    <html lang={locale}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

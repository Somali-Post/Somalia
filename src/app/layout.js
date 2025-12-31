import { Inter, Noto_Sans_Arabic } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

const arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B4F8A",
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;
  const locale = ["en", "so", "ar"].includes(cookieLocale) ? cookieLocale : "en";
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body
        className={`${arabic.variable} ${
          locale === "ar" ? arabic.className : inter.className
        } antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

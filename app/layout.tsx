import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zorro - Укладка асфальта любой сложности в Пушкино",
  description:
    "Профессиональная укладка асфальта, строительство дорог, парковок и подъездных путей в Пушкино и Московской области. Собственная техника и материалы. Работаем с частными и юридическими лицами.",
  keywords: [
    "дорожное строительство",
    "укладка асфальта",
    "строительство дорог",
    "асфальтирование Пушкино",
    "дорожная компания",
    "ямочный ремонт",
    "подъездные пути",
    "строительство парковок",
    "сыпучие материалы Пушкино",
    "щебень",
    "песок",
    "асфальтовая крошка",
  ],
  authors: [{ name: "ZORRO.SU", url: "https://zorro.su" }],
  creator: "ZORRO.SU",
  metadataBase: new URL("https://zorro.su"),
  openGraph: {
    title: "Zorro - Укладка асфальта любой сложности в Пушкино",
    description:
      "Профессиональная укладка асфальта, строительство дорог, парковок и подъездных путей в Пушкино и Московской области. Собственная техника и материалы. Работаем с частными и юридическими лицами.",
    url: "https://zorro.su",
    siteName: "ZORRO.SU",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zorro - Укладка асфальта любой сложности в Пушкино",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zorro - Укладка асфальта любой сложности в Пушкино",
    description:
      "Профессиональная укладка асфальта, строительство дорог, парковок и подъездных путей в Пушкино и Московской области. Собственная техника и материалы. Работаем с частными и юридическими лицами.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}

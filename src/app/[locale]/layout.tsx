import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import "tailwindcss/tailwind.css";
import "../global.css"
import { Metadata } from "next";
import App from "./app";

const inter = Inter({
  subsets: ["latin"], // Puedes añadir más subsets si es necesario
  variable: "--font-inter", // Puedes personalizar el nombre de la variable CSS
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: "Apolo",
    description: "New Site",
    // robots: seoData.robots,
    openGraph: {
      title: "Apolo",
      description: "New Site",
      siteName: "",
      locale: locale,
      // images: [
      //   {
      //     url: '',
      //     width: 100,
      //     height: 100,
      //   },
      // ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: 'en' | 'fr' };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <App locale={locale}>
            {children}
          </App>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

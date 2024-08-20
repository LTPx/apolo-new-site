import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.scss";
import "tailwindcss/tailwind.css";
import { Metadata } from "next";
import App from "./app";

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
    <html lang={locale}>
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

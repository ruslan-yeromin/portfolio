import React from "react";
import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { useLocale, NextIntlClientProvider } from "next-intl";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import ThemeContextProvider from "@/context/theme-context";
import FloatingButton from "@/components/SettingsButton";
import Head from 'next/head'; // <-- Добавьте эту строку

export const metadata: Metadata = {
  title: "Portfolio | Front End Developer",
  description: "Full-stack developer with 3 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale();

  let messages;
  try {
    messages = require(`@/messages/${locale}.json`);
  } catch (error) {
    console.error("Error loading messages for locale:", locale, error);
  }

  const fontClass = locale === "en" ? "font-en" : "font-ua";

  return (
    <>
      <Head>
        <html lang={locale} className="!scroll-smooth" />
        <link rel="alternate" hrefLang="en" href="https://portfolio-xcvg.vercel.app/" />
        <link rel="alternate" hrefLang="ua" href="https://portfolio-xcvg.vercel.app/ua" />
        {/* другие элементы внутри head */}
      </Head>
      <body
        className={`${fontClass} bg-gray-50  dark:text-gray-100 dark:text-opacity-90 text-gray-950 relative pt-28 sm:pt-36`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <div className="fixed top-0 left-0 h-screen w-screen z-[-1] gradient-bg dark:gradient-bg-dark"></div>
              <div className="fixed top-0 left-0 h-screen w-screen z-[-1]"></div>
              <Header />
              {children}
              <Toaster position="bottom-left" />
              <FloatingButton />
              <Footer />
            </NextIntlClientProvider>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </>
  );
}

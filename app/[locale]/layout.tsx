import React from 'react';
import Header from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { useLocale, NextIntlClientProvider } from 'next-intl';
import LanguageSelector from '@/components/LanguageSelector';
import ActiveSectionContextProvider from '@/context/active-section-context';




export const metadata: Metadata = {
  title: 'Portfolio | Front End Developer',
  description: 'Full-stack developer with 3 years of experience.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = useLocale();

  let messages;
  try {
    messages = require(`@/messages/${locale}.json`);
  } catch (error) {
    console.error("Error loading messages for locale:", locale, error);
  }

  const fontClass = locale === 'en' ? 'font-en' : 'font-ua'

  return (
    <html lang={locale} className='!scroll-smooth'>
      <body className={`${fontClass} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}>
        <ActiveSectionContextProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <div className='bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
            <div className='bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
            <Header />
            <LanguageSelector />
            {children}
          </NextIntlClientProvider>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}

import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Front End Developer',
  description: 'Full-stack developer with 3 years of experience.',
}

export default function RootLayout({ children, params }: { children: React.ReactNode, params: { locale: string }}) {
  const locale = useLocale();
 
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={`${inter.className} bg-gray-50 text-gray-950`}>
        <Header />
        {children}
      </body>
    </html>
  )
}

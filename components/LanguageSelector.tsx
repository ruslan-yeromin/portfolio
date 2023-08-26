import Link from 'next-intl/link';
import React from 'react';
import { useTranslations } from "next-intl";

const LanguageSelector = () => {
  return (
    <div className='fixed top-5 right-5 flex gap-4'>
        <button className='py-4 px-2 bg-gray-200 text-gray-500 rounded-lg border border-white shadow-lg hover:bg-gray-500 hover:text-white transition'>
            <Link href="/" locale="en">EN</Link>
        </button>
        <button className='py-4 px-2 bg-gray-200 text-gray-500 rounded-lg border border-white shadow-lg hover:bg-gray-500 hover:text-white transition'>
            <Link href="/" locale="ua">UA</Link>
        </button>
    </div>
  )
}

export default LanguageSelector
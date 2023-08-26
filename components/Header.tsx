import React from 'react'
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("Index");
  return (
    <div>
      <p>{t('subtitle')}</p>
    </div>
  )
}

export default Header
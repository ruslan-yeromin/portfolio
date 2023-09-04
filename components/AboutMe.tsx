"use client";

import React, { useEffect } from "react";
import { useTranslations } from "next-intl";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { useScrollSection } from "@/types/hooks";

const AboutMe = () => {
  const t = useTranslations("About");
  const { ref } = useScrollSection("About", 0.5);

  
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionTitle title={t("title")} />
      <p className="mb-4">
        {t("firstParagraph-01")}
        <b className="text-blue-900">{t("firstParagraph-02")}</b>
        {t("firstParagraph-03")}
        <u>{t("firstParagraph-04")}</u>
        {t("firstParagraph-05")}
        <b>{t("firstParagraph-06")}</b>
        {t("firstParagraph-07")}
        <b><i>{t("firstParagraph-08")}</i></b>
        {t("firstParagraph-09")}
      </p>

      <p className="mb-4">
        {t("secondParagraph-01")}
        <b>{t("secondParagraph-02")}</b>
        {t("secondParagraph-03")}
        <b><u>{t("secondParagraph-04")}</u></b>
        {t("secondParagraph-05")}
      </p>

      <p>
        {t("thirdParagraph-01")}
        <b>{t("thirdParagraph-02")}</b>
        {t("thirdParagraph-03")}
        <b>{t("thirdParagraph-04")}</b>
        {t("thirdParagraph-05")}
        <b>{t("thirdParagraph-06")}</b>
        {t("thirdParagraph-07")}
        <b>{t("thirdParagraph-08")}</b>
        {t("thirdParagraph-09")}
      </p>
    </motion.section>
  );
};

export default AboutMe;

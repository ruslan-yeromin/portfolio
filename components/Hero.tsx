"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import CustomButton from "./CustomButton";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";


const Hero = () => {
  const t = useTranslations("Hero");

  const handleScroll = () => {}

  return (
    <section className="mb-28 max-w-[50rem] text-ellipsis sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/profileImage.png"
              alt="Picture of the author"
              width={150}
              height={150}
              quality={100}
              priority={true}
              className="h-24 w-24 border-[0.35rem] border-white rounded-full object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 150, delay: 0.1 }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.p 
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {t('textStart')} <strong>{t('name')}</strong>. {t('textMiddle')}
        <strong> {t('specialization')}</strong> {t('textTech')}
        <u>{t('tech')}</u>. {t('textEnd')} <em>{t('experience')}</em>.
      </motion.p>

      <motion.div 
        className="flex gap-6 flex-col sm:flex-row items-center justify-center px-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        >
        <CustomButton 
            title={t('buttonContact')}
            containerStyle="bg-gray-950 text-white px-7 py-3 hover:scale-105 transition"
            url="/#contact"
            icon={<FiArrowUpRight />}            
        />
        <CustomButton 
            title={t('buttonCV')}
            containerStyle="bg-white text-grey-950 font-medium px-7 py-3 hover:scale-105 transition"
            icon={<FiDownload />}            
        />
        <CustomButton 
            containerStyle="bg-white text-grey-950 text-2xl font-medium px-3 py-3 hover:scale-110 transition"
            icon={<FaLinkedin />}
            external={true}
            url="https://www.linkedin.com/in/ruslan-yeremin-786785281/"            
        />
        <CustomButton 
            containerStyle="bg-white text-grey-950 font-medium text-2xl px-3 py-3 hover:scale-110 transition"
            icon={<FaGithubSquare />} 
            external={true}
            url="https://github.com/ruslan-yeromin"           
        />
        
      </motion.div>
    </section>
  );
};

export default Hero;

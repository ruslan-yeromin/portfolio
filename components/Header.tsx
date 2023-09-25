"use client";

import React, { memo } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";
import { LinkProps, links } from "@/utils/data";
import clsx from "clsx";
import { useActiveSection } from "@/context/active-section-context";

const NavItem: React.FC<
  LinkProps & { isActive: boolean; setActiveSectionByName: (sectionName: string) => void }
> = memo(({ id, name, hash, isActive, setActiveSectionByName }) => {
  const t = useTranslations("Header");
  const {setTimeOfLastClick} = useActiveSection();
  return (
    <motion.li
      className={clsx("h-3/4 flex items-center justify-center shrink-0", {
        "text-gray-950 relative dark:text-gray-200": isActive,
        "dark:text-gray-200": isActive,
      })}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Link
        href={hash}
        className={clsx(
          "flex w-full items-center justify-center font-semibold px-3 py-3 hover:text-gray-950 transition",
          {
            "dark:text-gray-500 dark:hover:text-gray-300": !isActive,
            "dark:text-gray-200": isActive
          }
        )}
        onClick={() => {
          setActiveSectionByName(name);
          setTimeOfLastClick(Date.now());
        }}
      >
        {`${t(id)}`}
        {isActive && (
          <motion.span 
            className="bg-gray-200 rounded-full absolute inset-0 -z-10 dark:bg-gray-800 "
            layoutId="activeSection"
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
            ></motion.span>
        )}
      </Link>
    </motion.li>
  );
});

const Header: React.FC = () => {
  
  const { activeSection, setActiveSectionByName } =  useActiveSection();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[40rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <NavItem
              key={link.id}
              {...link}
              isActive={activeSection?.name === link.name}
              setActiveSectionByName={setActiveSectionByName}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

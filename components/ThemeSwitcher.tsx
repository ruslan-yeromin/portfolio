'use client'

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { motion } from "framer-motion";

const ThemeSwitcher = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed text-xl md:text-3xl bottom-10 right-2 md:right-10 bg-white w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.1] active:scale-101 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {
        theme === "light" ? <BsSun /> : <BsMoon />
      }
    </motion.button>
  );
};

export default ThemeSwitcher;

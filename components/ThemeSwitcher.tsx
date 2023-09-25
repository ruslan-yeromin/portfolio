'use client'

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitcher = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed text-3xl bottom-10 right-10 bg-white w-[5rem] h-[5rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.1] active:scale-101 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {
        theme === "light" ? <BsSun /> : <BsMoon />
      }
    </button>
  );
};

export default ThemeSwitcher;

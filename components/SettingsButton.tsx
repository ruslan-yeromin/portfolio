"use client";

// Путь к вашему файлу с типами
import { FloatingButtonProps, MainButtonProps } from "@/types";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiSettingsKnobs } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next-intl/link";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "@/context/theme-context";

const FloatingButton: React.FC<FloatingButtonProps> = ({
  angle,
  delay,
  type,
  locale,
  icon,
  title,
  onClick,
}) => {
  const buttonVariants = {
    open: {
      x: `${-6 * Math.cos(angle)}rem`,
      y: `${-6 * Math.sin(angle)}rem`,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 50,
        stiffness: 800,
        delay: delay,
      },
    },
    closed: {
      x: 0,
      y: 0,
      opacity: 0,
      transition: {
        delay: delay,
      },
    },
  };

  const commonProps = {
    className:
      "bg-white dark:bg-gray-950 dark:text-gray-200 flex items-center justify-center text-black w-[4rem] h-[4rem] rounded-full absolute bottom-5 right-5 text-black font-semibold",
    initial: "closed",
    animate: "open",
    exit: "closed",
    variants: buttonVariants,
    zIndex: 5,
  };

  return type === "link" ? (
    <Link href="/" locale={locale!}>
      <motion.a aria-label="change language" {...commonProps}>{title}</motion.a>
    </Link>
  ) : (
    <motion.button aria-label="dark theme" {...commonProps} onClick={onClick}>
      {icon}
    </motion.button>
  );
};

const MainButton: React.FC<MainButtonProps> = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  const buttons: FloatingButtonProps[] = [
    { angle: Math.PI / 2, locale: "en", title: "EN", type: "link", delay: 0.1 },
    { angle: Math.PI / 4, locale: "ua", title: "UA", type: "link", delay: 0.2 },
    {
      angle: 0,
      icon:
        theme === "light" ? (
          <BsSun className="text-2xl font-semibold" />
        ) : (
          <BsMoon className="text-2xl font-semibold" />
        ),
      type: "button",
      onClick: toggleTheme,
      delay: 0.3,
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-20">
      <button
        className="bg-white flex justify-center items-center font-semibold text-black text-4xl w-20 h-20 rounded-full focus:outline-none focus:shadow-outline shadow-xl active:origin-bottom dark:bg-gray-950 dark:text-gray-200"
        onClick={toggleOpen}
      >
        {isOpen ? <AiOutlineClose /> : <GiSettingsKnobs />}
      </button>

      <AnimatePresence>
          {isOpen &&
            buttons.map((button, index) => (
              <FloatingButton
                key={index}
                angle={button.angle}
                delay={button.delay}
                type={button.type}
                locale={button.locale}
                icon={button.icon}
                title={button.title}
                onClick={button.onClick}
              />
            ))}
      </AnimatePresence>
    </div>
  );
};

// Usage
const App = () => {
  const { theme, toggleTheme } = useTheme();
  return <MainButton toggleTheme={toggleTheme} theme={theme} />;
};

export default App;

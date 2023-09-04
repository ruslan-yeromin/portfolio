'use client'

import { LinkProps, links } from "@/utils/data";
import React, { createContext, useState } from "react";

type ActiveSectionContextType = {
    activeSection: LinkProps | undefined;
    setActiveSection: React.Dispatch<React.SetStateAction<LinkProps | undefined>>;
    setActiveSectionByName: (sectionName: string) => void;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
  };
  
  const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);
  

const ActiveSectionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState<LinkProps | undefined>(links[0]);

  const setActiveSectionByName = (sectionName: string) => {
    const section = links.find(link => link.name === sectionName);
    setActiveSection(section);
  };

  const [timeOfLastClick, setTimeOfLastClick] = useState(0)

  return (
    <ActiveSectionContext.Provider
        value={{ activeSection, setActiveSection, setActiveSectionByName, timeOfLastClick, setTimeOfLastClick }}
    >{children}</ActiveSectionContext.Provider>
  );
};

export function useActiveSection() {
  const context = React.useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSection must be used within an ActiveSectionContextProvider"
    );
  }
  return context;
}

export default ActiveSectionContextProvider;

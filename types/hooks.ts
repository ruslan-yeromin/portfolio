import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/context/active-section-context";

export function useScrollSection(sectionName: string, customThreshold: number = 0.75) {
  const { setActiveSectionByName, timeOfLastClick } = useActiveSection();
  const { ref, inView } = useInView({ threshold: customThreshold });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSectionByName(sectionName);
    }
  }, [inView, setActiveSectionByName, timeOfLastClick]);

  return { ref };
}

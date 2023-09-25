"use client";

import React from "react";
import SectionTitle from "./SectionTitle";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/utils/data";
import { useTranslations } from "next-intl";
import { useScrollSection } from "@/types/hooks";
import { useTheme } from "@/context/theme-context";

const Experience = () => {
  const t = useTranslations("Experience");
  const { ref } = useScrollSection("Experience");
  const { theme } = useTheme();

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionTitle title="My experience" />
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid  #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.05)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "#fff" : "rgba(0, 0, 0, 1)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{t(item.title)}</h3>
              <p className="font-normal italic !mt-0">{t(item.location)}</p>
              <p className="font-normal !mt-1 text-gray-700 dark:text-white/75">
                {t(item.description)}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;

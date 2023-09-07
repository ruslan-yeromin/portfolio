'use client'

import React from "react";
import SectionTitle from "./SectionTitle";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/utils/data";
import { useTranslations } from "next-intl";

const Experience = () => {

    const t = useTranslations("Experience");

  return (
    <section id="experience">
      <SectionTitle title="My experience" />
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
                contentStyle={{
                    background: "#f3f4f6",
                    boxShadow: "none",
                    border: "1px solid rgba(0, 0, 0, 0.05",
                    textAlign: "left",
                    padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                    borderRight: "0.4rem solid  #9ca3af",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                    background: "#fff",
                    fontSize: "1.5rem",
                }}
            >
                <h3 className="font-semibold capitalize">{t(item.title)}</h3>
                <p className="font-normal italic !mt-0">{t(item.location)}</p>
                <p className="font-normal !mt-1 text-gray-700">{t(item.description)}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;

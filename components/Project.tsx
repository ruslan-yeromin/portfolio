"use client";

import React, { memo, useRef } from "react";
import { ProjectProps } from "@/utils/data";
import { useTranslations } from "next-intl";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { motion, useScroll, useTransform } from "framer-motion";

const Project: React.FC<ProjectProps> = memo(
  ({ id, dataTitle, dataDesc, tags, image }) => {
    const t = useTranslations("Projects");
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

    return (
      <motion.section
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: scrollYProgress,
        }}
        className="group max-w-[46rem] border border-black/5 rounded-xl overflow-hidden sm:pr-8 relative sm:h-[25rem] mb-3 sm:mb-8 last:mb-0 even:pl-10 hover:bg-blue-50 transition-color"
      >
        <div className="pt-4 pb-6 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{t(dataTitle)}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{t(dataDesc)}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, id) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={id}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="flex gap-4 mt-4 sm:mt-auto">
            <CustomButton
              title="Code"
              icon={<AiFillGithub />}
              url="https://www.github.com/"
              external
              containerStyle={`shrink-0 px-10 py-3 bg-gray-950 text-white inline-block  hover:bg-gray-800 transition`}
            />
            <CustomButton
              title="Live View"
              icon={<FiExternalLink />}
              url="https://www.github.com/"
              external
              containerStyle={`shrink-0 px-10 py-3 bg-gray-950 text-white inline-block  hover:bg-gray-800 transition`}
            />
          </div>
        </div>

        <Image
          src={image}
          alt={dataTitle}
          quality={95}
          className="absolute top-8 -right-40 w-[28.25rem] group-even:right-[initial] group-even:-left-40 transition group-hover:scale-105 group-hover:rotate-[-5deg] group-hover:translate-x-[-1rem] group-hover:translate-y-[1rem] group-even:group-hover:translate-x-[1rem] group-even:group-hover:translate-y-[-1rem] group-even:group-hover:rotate-[5deg]"
        />
      </motion.section>
    );
  }
);

export default Project;

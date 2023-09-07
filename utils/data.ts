import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';
import { StaticImageData } from 'next/image';
import React from 'react';
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaServer } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export type LinkProps = {
  id: string;
  name: string;
  hash: string;
};

export type ProjectProps = {
  id: number;
  dataTitle: string;
  dataDesc: string;
  tags: string[];
  image: StaticImageData;
}

export type ExperienceDataProps = {
  title: string;
  location: string;
  description: string;
  icon: React.ReactElement;
  date: string;
}


export const links: LinkProps[] = [
    {
      id: 'homeLink',
      name: 'Home',
      hash: "#home",
    },
    {
      id: 'aboutLink',
      name: 'About',
      hash: "#about",
    },
    {
      id: 'projectsLink',
      name: 'Projects',
      hash: "#projects",
    },
    {
      id: 'skillsLink',
      name: 'Skills',
      hash: "#skills",
    },
    {
      id:  'experienceLink',
      name: 'Experience',
      hash: "#experience",
    },
    {
      id: 'contactLink',
      name: 'Contact',
      hash: "#contact",
    },
];

export const projects: ProjectProps[] = [
  {
    id: 1,
    dataTitle: "projectTitleOne",
    dataDesc: "projectDescOne",
    tags: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
    image: corpcommentImg,
  },
  {
    id: 2,
    dataTitle: "projectTitleTwo",
    dataDesc: "projectDescTwo",
    tags: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
    image: rmtdevImg,
  },
  {
    id: 3,
    dataTitle: "projectTitleThree",
    dataDesc: "projectDescThree",
    tags: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
    image: wordanalyticsImg,
  }
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;

export const experiencesData: ExperienceDataProps[] = [
  {
    title: "titleEducation",
    location: "location",
    description: "descEducation",
    icon: React.createElement(LuGraduationCap),
    date: "2007 - 2012",
  },
  {
    title: "titleFrontend",
    location: "location",
    description: "descFrontend",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2020",
  },
  {
    title: "titleBackend",
    location: "location",
    description: "descBackend",
    icon: React.createElement(FaServer),
    date: "2020 - present",
  },
  {
    title: "titleReact",
    location: "location",
    description: "descReact",
    icon: React.createElement(FaReact),
    date: "2020 - present",
  },
];

import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';
import { StaticImageData } from 'next/image';

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
export type LinkProps = {
  id: string;
  name: string;
  hash: string;
};


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
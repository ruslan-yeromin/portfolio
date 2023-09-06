'use client'
import React, { useEffect } from "react";
import SectionTitle from "./SectionTitle";
import { projects } from "@/utils/data";
import Project from "@/components/Project";
import { useScrollSection } from "@/types/hooks";

const Projects: React.FC = () => {

  const { ref } = useScrollSection("Projects", 0.5);


  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionTitle title="Projects" />

      <div>
        {projects.map((item) => (
          <Project key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

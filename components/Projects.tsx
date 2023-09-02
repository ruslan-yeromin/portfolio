import React from "react";
import SectionTitle from "./SectionTitle";
import { projects } from "@/utils/data";
import Project from "@/components/Project";

const Projects: React.FC = () => {
  return (
    <section>
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

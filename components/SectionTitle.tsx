import React from "react";
import { SectionHeadingProps } from "@/types";

const SectionTitle: React.FC<SectionHeadingProps> = ({ title }) => {
  return <h2 className="text-3xl text-gray-950 mb-8 font-semibold capitalize text-center">{title}</h2>;
};

export default SectionTitle;

import React from "react";

import photographerImg from "../public/assets/photographer.jpeg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="text-3xl tracking-widest uppercase text-[#5651e5]">
          Meus projetos
        </h2>
        <p className="uppercase tracking-widest text-gray-600 pb-5 pt-5">
          Ainda vem mais projetos pela frente...
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Portfolio fotografo"
            backgroundImg={photographerImg}
            projectUrl="https://protfolio-fotografo.vercel.app/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

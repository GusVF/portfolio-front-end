import React from "react";

import photographerImg from "../public/assets/photographer.jpeg";
import PhotographerPort from "./PhotographerPort";

const Projects = () => {
  return (
    <div id="projects" className="w-full pt-[5%] mb-[10%]">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="text-3xl tracking-widest uppercase text-[#5651e5]">
          Meus projetos
        </h2>  
        <p className="uppercase tracking-widest text-gray-600 pb-5 pt-5">
          Ainda vem mais projetos pela frente...
        </p>
        <div className="grid md:grid-cols-2 gap-8 pb-10">
          {/* Copy and paste a new project here */}
          <PhotographerPort
            title="Portfolio fotógrafo"
            backgroundImg={photographerImg}
            projectUrl="/photographer"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

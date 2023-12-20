import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-full w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#2b24ea] to-[#aac3f7]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="photographerImg"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">
          Projeto Next.js/tailwindcss
        </p>
        <Link href={projectUrl} target="blank">
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            Veja o projeto
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;

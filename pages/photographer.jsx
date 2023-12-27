import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";

import photographerImg from "../public/assets/photographer.jpeg";
import Link from "next/link";

const photographer = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:w-full lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={photographerImg}
          alt="photographerImg"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Portfolio Fotógrafo</h2>
          <h3>Next.js/tailwind/Vercel</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 ">
          <p>Projeto</p>
          <h2>Panorama</h2>
          <p>
            Criei esta pagina de captação com o objetivo de ampliar a presença digital
            de fotógrafos. Utilizei Next.js, Tailwind e hospedei na Vercel para
            garantir eficiência. A página destaca o trabalho dos profissionais,
            oferecendo uma experiência visual única. Se você busca maior
            visibilidade online, esta plataforma é a chave.
          </p>
          <a
            href="https://protfolio-fotografo.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/GusVF/Protfolio-Fotografo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Tecnologias</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Next.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                javaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Vercel
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline curson-pointer">voltar aos projetos</p>
        </Link>
      </div>
    </div>
  );
};

export default photographer;

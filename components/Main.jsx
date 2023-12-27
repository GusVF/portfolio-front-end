import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import whatsApp from "../public/assets/whatsApp.png";

const Main = () => {
  const openWhatsApp = () => {
    const phoneNumber = "+5512996356852";
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    // Open the WhatsApp link in a new tab
    window.open(whatsappLink, "_blank");
  };

  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase tracking-widest text-gray-600">
            Criando visibilidade digital
          </p>
          <h1 className="text-[#5651e5] py-4">Luiz Gustavo Ferreira</h1>
          <h1 className="py-2 text-gray-700">Desenvolvedor Web Front-End</h1>
          <p className="py-4 px-15 text-gray-600 max-w-[70%] m-auto">
            &quot;Sou um desenvolvedor Front-End especializado na criação e
            design de experiências digitais. Atualmente, estou concentrado em
            desenvolver aplicações web responsivas e aprimorar minhas
            habilidades em Back-End.&quot;
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/luiz-gustavo-ferreira-gusferreira/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 easi-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/GusVF"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 easi-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a
              href="mailto:gus.116506@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 easi-in duration-300">
                <AiOutlineMail />
              </div>
            </a>
            <div
              onClick={openWhatsApp}
              className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 easi-in duration-300"
            >
              <Image
                src={whatsApp}
                target="_blank"
                width={25}
                height={25}
                alt="WhatsApp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

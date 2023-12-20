import React from "react";
import AboutImg from "../public/assets/about.jpeg";
import Image from "next/image";

const About = () => {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 leading-loose">
          <h2 className="py-3 text-[#5651e5]">Quem sou eu.</h2>
          <p>
            Bem-vindo ao meu mundo digital, onde transformo ideias em presença
            online impactante para seu negócio ou empresa! Como desenvolvedor
            front-end, minha paixão é criar páginas de captura
            (landing pages) e websites incríveis que destacam e impulsionam o
            seu negócio. Trabalho para garantir que sua presença na web não
            apenas seja visualmente atraente, mas também altamente funcional e
            adaptada para dispositivos móveis. Minha abordagem é centrada em
            fornecer soluções eficazes e acessíveis para empresas e negocios de
            quase todos os tipos. Utilizo tecnologias modernas como React,
            Next.js e Tailwind, garantindo que cada projeto seja não apenas
            bonito, mas também ágil e eficiente. Entendo que cada negócio é
            único, e estou comprometido em adotar as melhores ferramentas para
            atender às suas necessidades específicas. Seja para criar uma
            presença online inicial, otimizar uma landing page existente ou
            desenvolver uma aplicação web completa, estou aqui para ajudar a
            destacar o seu negócio no mundo digital. Vamos juntos construir uma
            presença online que deixará uma impressão duradoura! Entre em
            contato e vamos transformar suas ideias em realidade.
          </p>
          <p className="py-3 text-gray-500 underline cursor-pointer">
            De uma olhada nos meus projetos!
          </p>
        </div>
        <div className="h-full w-full m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounde-xl" src={AboutImg} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;

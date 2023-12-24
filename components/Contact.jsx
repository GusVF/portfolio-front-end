import Image from "next/image";
import React from "react";
import contactImg from "../public/assets/contactImg.jpeg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

import whatsApp from "../public/assets/whatsApp.png";

import Link from "next/link";

const Contact = () => {
  const openWhatsApp = () => {
    const phoneNumber = "+5512996356852";
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    // Open the WhatsApp link in a new tab
    window.open(whatsappLink, "_blank");
  };

  return (
    <div id="contact" className="w-full pt-[4%]">
      <div className="ml-[30%] flex flex-col justify-center items-center m-auto py-16 w-full">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-2">
            <div className="lg:p-4 h-full">
              <div>
                <h2 className="ml-[15%] pb-5 text-3xl tracking-widest uppercase text-[#5651e5]">
                  Opções de contato
                </h2>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={contactImg}
                  alt="contace image"
                />
                <p className="py-3">
                  Vamos conversar sobre sua presença digital!
                </p>
                <p className="pt-2">
                  Contato, informações e codigo de projetos
                </p>
              </div>
              <div>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/luiz-gustavo-ferreira-gusferreira/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 easi-in duration-300">
                      <FaLinkedinIn size={15} />
                    </div>
                  </a>
                  <a
                    href="https://github.com/GusVF"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 easi-in duration-300">
                      <FaGithub size={15} />
                    </div>
                  </a>
                  <a
                    href="mailto:gus.116506@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 easi-in duration-300">
                      <AiOutlineMail size={15} />
                    </div>
                  </a>
                  <div
                    onClick={openWhatsApp}
                    className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 easi-in duration-300"
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
        </div>
        <div className="mr-[60%] pt-9">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 easi-in duration-300">
              <HiOutlineChevronDoubleUp
                size={20}
                className="m-auto text-[#5651e5]"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

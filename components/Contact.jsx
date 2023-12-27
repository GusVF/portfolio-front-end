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
    window.open(whatsappLink, "_blank");
  };

  return (
    <div id="contact" className="w-full mt-[-5%]">
      <div className="flex flex-col justify-center items-center m-auto py-16 w-full">
        <div className="w-[96%] h-full shadow-xl shadow-gray-400 rounded-xl p-2 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Image on the left */}
            <div className="lg:col-span-2 w-full h-full">
              <div className="lg:p-4 h-full">
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={contactImg}
                  alt="contact image"
                />
              </div>
            </div>

            {/* Text content on the right */}
            <div className="lg:col-span-3 w-full h-full">
              <div className="lg:p-4 h-full">
                <h2 className="pb-5 text-3xl tracking-widest uppercase text-[#5651e5]">
                  Opções de contato
                </h2>
                <p className="py-1">
                  Vamos conversar sobre sua presença digital!
                </p>
                <p className="pt-1">
                  Contato, informações e código de projetos
                </p>

                {/* Social icons */}
                <div className="flex items-center justify-between pt-[10%]">
                  <a
                    href="https://www.linkedin.com/in/luiz-gustavo-ferreira-gusferreira/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 easi-in duration-300">
                      <FaLinkedinIn size={15} />
                    </div>
                  </a>
                  <a
                    href="https://github.com/GusVF"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 easi-in duration-300">
                      <FaGithub size={15} />
                    </div>
                  </a>
                  <a
                    href="mailto:gus.116506@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 easi-in duration-300">
                      <AiOutlineMail size={15} />
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
        </div>
      </div>
      
      {/* Back to top link */}
      <div className="flex justify-center mb-[5%]">
        <Link href="/">
          <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 easi-in duration-300">
            <HiOutlineChevronDoubleUp
              size={15}
              className="m-auto text-[#5651e5]"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;

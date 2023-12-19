import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div className="h-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="text-3xl tracking-widest uppercase text-[#5651e5] py-10">
          Tecnologias que uso
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React badge"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="Node.js"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Node.js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                  alt="GitHub"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>GitHub</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                  alt="HTML"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                  alt="CSS"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
                  alt="Jest"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Jest</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>javaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Tailwindcss</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <p className='logo ml-10'>Gus Ferreira</p>
        <div>
          <ul className="hidden md:flex mr-10">
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Inicio</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Sobre</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Habilidades</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Projetos</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Contato</li>
            </Link>
          </ul>
          <div className="md:hidden">
            <AiOutlineMenu size={25}/>
          </div>
        </div>
      </div>
      <div className="fixed left-0 top-0 w-full h-screen bg-black/60">
        <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0fe] p-3 ease-in duration-300">
          <div>
            <div className="flex w-full items-center justify-between">
              <p className='logo ml-5'>Gus Ferreira</p>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose />
              </div>
              </div>
              <div className="border-b border-gray-300 my-4 ml-5 ">
              <p className="w-[85%] md:w-[90%] py-4">Inovando, Criando, Colaborando</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href='/'>
                <li className="py-4 text-md ml-5">Inicio</li>
              </Link>
              <Link href='/'>
                <li className="py-4 text-md ml-5">Sobre</li>
              </Link>
              <Link href='/'>
                <li className="py-4 text-md ml-5">Habilidades</li>
              </Link>
              <Link href='/'>
                <li className="py-4 text-md ml-5">Projetos</li>
              </Link>
              <Link href='/'>
                <li className="py-4 text-md ml-5">Contato</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
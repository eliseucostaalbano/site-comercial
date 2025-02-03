import React from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const FooterLinks = [
  {
    nome: "Home",
    link: "/#",
  },
  {
    nome: "Sobre",
    link: "/#sobre",
  },
  {
    nome: "Contato",
    link: "/#contato",
  },
  {
    nome: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* detalhes da empresa */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-principal font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            <p className="text-gray-600 lg:pr-24 pt-3 dark:text-white/70">
              Lorem ipsum dolor sit, 
              amet consectetur adipisicing elit.
             Maiores alias cum
            </p>
            <p className="text-gray-500 mt-4 font-bold">
              Feito por Eliseu Costa Albano &copy; 2025
            </p>
            <a
              href="#"
              className="text-sm inline-block right-2 bg-black dark:bg-white dark:text-black text-white py-2 px-2 rounded-full"
            >
              Visite Meu GitHub
            </a>
          </div>
          {/* footer Links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl text-bold sm:text-left mb-3">Links Importantes</h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index)=>(
                  <li key={index}>
                  <a
                  href={data.link}
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white duration-300"
                  >
                    {data.nome}
                  </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* segunda coluna de links */}
            <div className="py-8 px-4">
              <h1 className="text-xl text-bold sm:text-left mb-3">Links Rápidos</h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index)=>(
                  <li key={index}>
                  <a
                  href={data.link}
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white duration-300"
                  >
                    {data.nome}
                  </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* endereço da empresa */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
             <div>
             <h1 className="text-xl text-bold sm:text-left mb-3">Endereço</h1>
              <div className="flex items-center gap-3">
              <FaLocationCrosshairs />
              <p>Fortaleza, Ceará - Brasil</p>
              </div>
              <div className="flex items-center gap-3 mt-6">
              <FaMobile />
              <p>+85 912345678</p>
              </div>
              {/* links sociais */}
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                <FaFacebookSquare className="text-3xl text-blue-500" />
                </a>
                <a href="#">
                <FaLinkedin  className="text-3xl text-blue-800" />
                </a>
                <a href="#">
                <FaGithub  className="text-3xl  dark:text-white" />
                </a>
              </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { GrSearch } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import DarkMode from "./DarkMode"

const menuLinks = [
  {
    id: 1,
    nome: "Inicio",
    link: "/#",
  },
  {
    id: 2,
    nome: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    nome: "Sobre",
    link: "/#about",
  },
  {
    id: 4,
    nome: "Blogs",
    link: "/#blog",
  },
];

const NavBar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between">
          {/* secção Logo  e links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-principal font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            {/* Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {menuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      {data.nome}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* secção NavBar direita */}
          <div className="flex justify-between items-center gap-4">
            {/* secção Barra de Navegação */}
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="Buscar"
              className=" search-bar "
              />
              <GrSearch  className="text-xl text-gray-600 group-hover:text-principal dark:text-gray-400 absolute top-1/2 -translate-y-1 right-3 duration-200 mb-[20px]"/>
            </div>
            {/* secção Botão de Ordem*/}
            <button className="relative p-3">
            <FaShoppingCart className="text-xl text-gray-600 dark:text-gray-400"/>
            <div className="w-4 h-4 bg-red-600 text-white rounded-full absolute top-1 right-1 flex items-center justify-center text-xs"
            >1</div>
            </button>
            
            {/* secção Modo Escuro */}
            <div>
            <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

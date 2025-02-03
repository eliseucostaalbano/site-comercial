import React from "react";
import { GrSearch } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
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

const dropdownLinks = [
  {
    id: 1,
    nome: "Em Alta",
    link: "/#",
  },
  {
    id: 2,
    nome: "Mais Vendidos",
    link: "/#",
  },
  {
    id: 3,
    nome: "Melhores Avaliados",
    link: "/#",
  },
];

  const NavBar = ({handleOrderPopup}) => {
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
              <ul className="flex items-center gap-6">
                {menuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className=" text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      {data.nome}
                    </a>
                  </li>
                ))}
                {/* Menu DropDown */}
                <li className="relative cursor-pointer group">
                <a href="#" className="flex items-center gap-[2px] font-semibold text-gray-500 py-2 dark:hover:text-white ">
                Links Rapidos
                <span>
                <FaCaretDown  className="group-hover:rotate-180 duration-300"/>
                </span>
                </a>
                {/*  DropDown Links */}
                <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white 
                shadow-md dark:bg-gray-900 dark:text-white p-2">
                  <ul className="space-y-2">
                  {dropdownLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block w-full font-semibold text-gray-500 dark:hover:text-white 
                      duration-200 p-2 hover:bg-principal/50 rounded-md"
                    >
                      {data.nome}
                    </a>
                  </li>
                ))}
                  </ul>
                </div>
                </li>
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
            <button className="relative p-3" onClick={handleOrderPopup}>
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

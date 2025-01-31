import React from "react";

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-col-3 pb-20 pt-5">
          {/* detalhes da empresa */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-principal font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            <p className="text-gray-600 lg:pr-24 pt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              alias cum
            </p>
            <p className="text-gray-500 mt-4 font-bold">
              Feito por Eliseu Costa Albano &copy; 2025
            </p>
            <a
              href="#"
              className="text-sm inline-block right-2 bg-black text-white py-2 px-2 rounded-full"
            >
              Visite Meu GitHub
            </a>
          </div>
          {/* footer Links */}
        </div>
      </div>
    </div>
  );
};

export default Footer;

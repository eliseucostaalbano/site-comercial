import React from "react";

const NavBar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
         <div className="container">
        {/* secção Logo  e links */}
        <div>
          <a
            href="#"
            className="text-principal font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
          >
            Eshop
          </a>
          {/* Menu Items */}
          <div></div>
        </div>
        {/* secção NavBar direita */}
      </div>
      </div>
    </div>
  );
};

export default NavBar;

import React from "react";
import Button from "../Shared/Button";
import Image1 from "../../assets/Categoria/earphone.png";
import Image2 from "../../assets/Categoria/watch.png";
import Image3 from "../../assets/Categoria/macbook.png";

const Categoria = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {/* primeira coluna */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70
           text-white rounded-3xl relative flex items-end h-[320px]">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Aproveite</p>
                <p className="text-2xl font-semibold mb-[2px]">Com</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-4">Fones de ouvidos</p>
                <Button 
                  text="Comprar"
                  bgColor={"bg-principal"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img src= {Image1} alt="" className="w-[320px] absolute bottom-0"/>
          </div>
          {/* segunda coluna */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90
           text-white rounded-3xl relative flex items-end h-[320px]">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Aproveite</p>
                <p className="text-2xl font-semibold mb-[2px]">Com</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-4">Acessórios</p>
                <Button 
                  text="Comprar"
                  bgColor={"bg-white"}
                  textColor={"text-brandYellow"}
                />
              </div>
            </div>
            <img src= {Image2} alt="" className="w-[320px] absolute -right-10 lg:top-[20px]"/>
          </div>
          {/* terceira coluna */}
          <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-principal to-principal/90
           text-white rounded-3xl relative flex items-end h-[320px]">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Aproveite</p>
                <p className="text-2xl font-semibold mb-[2px]">Com</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-4">Laptops</p>
                <Button 
                  text="Comprar"
                  bgColor={"bg-white"}
                  textColor={"text-principal"}
                />
              </div>
            </div>
            <img src= {Image3} alt="" className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categoria;
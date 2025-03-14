import React from "react";
import Button from "../Shared/Button";
import Image1 from "../../assets/Categoria/gaming.png";
import Image2 from "../../assets/Categoria/vr.png";
import Image3 from "../../assets/Categoria/speaker.png";

const Categoria2 = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {/* primeira coluna */}
          <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100
           text-white rounded-3xl relative flex items-end h-[320px]">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Aproveite</p>
                <p className="text-2xl font-semibold mb-[2px]">Com</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-4">Consoles</p>
                <Button 
                  text="Comprar"
                  bgColor={"bg-principal"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img src= {Image1} alt="" className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0"/>
          </div>
          {/* segunda coluna */}
          <div className="py-10 pl-5 bg-brandGreen
           text-white rounded-3xl relative flex items-start h-[320px]">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Aproveite</p>
                <p className="text-2xl font-semibold mb-[2px]">Com</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-4">Oculus VR</p>
                <Button 
                  text="Comprar"
                  bgColor={"bg-white"}
                  textColor={"text-brandGreen"}
                />
              </div>
            </div>
            <img src= {Image2} alt="" className="w-[320px] absolute bottom-0 right-0 "/>
          </div>
          {/* terceira coluna */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90
           text-white rounded-3xl relative flex items-start h-[320px]">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Aproveite</p>
                <p className="text-2xl font-semibold mb-[2px]">Com</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-4">Sons</p>
                <Button 
                  text="Comprar"
                  bgColor={"bg-white"}
                  textColor={"text-brandBlue"}
                />
              </div>
            </div>
            <img src= {Image3} alt="" className="w-[250px] absolute right-0 bottom-0 "/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categoria2;

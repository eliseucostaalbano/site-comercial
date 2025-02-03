import React from "react";

const Banner = ({ data }) => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12">
      <div className="container">
        <div style={{backgroundColor: data.bgColor}} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl">
            {/* primeira col */}
            <div className="p-6 sm:p-8">
            <p data-aos="slide-right" className="text-sm">{data.desconto}</p>
            <h1 data-aos="zoom-out" className="uppercase text-4xl lg:text-7xl font-bold">{data.titulo}</h1>
            <p data-aos="fade-up" className="text-sm">{data.date}</p>
            </div>
            {/* segunda col */}
            <div data-aos="zoom-in"  className="h-full flex items-center">
            <img src={data.image} alt="" 
               className="scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-lg object-cover"/>
            </div>
            {/* terceira col */}
            <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
                <p data-aos="zoom-out" className="font-bold text-xl">{data.titulo2}</p>
                <p data-aos="fade-up" className="text-3xl sm:text-5xl font-bold">{data.titulo3}</p>
                <p data-aos="fade-up" className="text-sm tracking-wide leading-5">{data.titulo4}</p>
                <div data-aos="fade-up" data-aos-offset="0">
                     <button style={{color: data.bgColor}} className="bg-white py-2 px-4 rounded-full">Compre agora</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

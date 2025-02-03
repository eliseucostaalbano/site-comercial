import React from "react";
import Slider from "react-slick";
import Button from "../Shared/Button";
import Image1 from "../../assets/Hero/headphone.png";
import Image2 from "../../assets/Categoria/vr.png";
import Image3 from "../../assets/Categoria/macbook.png";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitulo: "Beats Solo",
    titulo1: "Wireless",
    titulo2: "Headphone",
  },
  {
    id: 2,
    img: Image2,
    subtitulo: "Beats Solo",
    titulo1: "Wireless",
    titulo2: "Virtual",
  },
  {
    id: 3,
    img: Image3,
    subtitulo: "Beats Solo",
    titulo1: "Branded",
    titulo2: "Laptops",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container">
      <div
        className="overflow-hidden rounded-3xl min-h-[550px] 
      sm:min-h-[650px] hero-bg-color flex justify-center items-center"
      >
        <div className="container pb-8 sm:pb-0">
          {/* seççao slider */}
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* seção Conteudo de texto */}
                  <div
                    className="flex flex-col justify-center gap-4 text-center pt-12 
                  sm:pl-3 sm:pt-0 sm:text-left relative z-10"
                  >
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-2xl sm:text-6xl lg:text-2xl font-bold"
                    >
                      {data.subtitulo}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {data.titulo1}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl uppercase text-white dark:text-white/5
                      sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold"
                    >
                      {data.titulo2}
                    </h1>
                    <div
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="500"
                    data-aos-delay="300"
                    >
                      <Button
                        text="Comprar por Categoria"
                        bgColor="bg-principal"
                        textColor="text-white"
                        handler={handleOrderPopup}
                      />
                    </div>
                  </div>
                  {/* seção Conteudo de imagem */}
                  <div className="sm:order-2 order-1">
                  <div data-aos="zoom-out"  data-aos-once="true" className="relative z-10">
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg: scale-110 object-contain 
               mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] relative z-40"
                    />
                  </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;

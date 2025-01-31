import React from 'react'
import Heading from '../Shared/Heading'
import Image1 from "../../assets/Blogs/blog-1.jpg";
import Image2 from "../../assets/Blogs/blog-2.jpg";
import Image3 from "../../assets/Blogs/blog-3.jpg";

const BlogsData = [
  {
    img: Image1,
    titulo: "Como escolher o smartwatch perfeito",
    subtitulo: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae landantium. Porro?",
    publicado: "Jan 20, 2024 por Dilshad",
  },
  {
    img: Image2,
    titulo: "Como escolher o Gadget perfeito",
    subtitulo: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae landantium. Porro?",
    publicado: "Jan 20, 2024 por Satya",
  },
  {
    img: Image3,
    titulo: "Como escolher o VR headset perfeito",
    subtitulo: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae landantium. Porro?",
    publicado: "Jan 20, 2024 por Sabir",
  },
];

const Blogs = () => {
  return (
    <div className='my-12'>
      <div className="container">
      <Heading titulo="Noticias Recentes"
       subtitulo="Explore Nossos Blogs"/>
       {/* blog secção */}
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
         {/* card secção */}
          {BlogsData.map((data)=>(
            <div key={data.titulo} className='bg-white dark:bg-gray-900'>
              {/* secçao de imagem */}
              <div className='overflow-hidden rounded-2xl mb-2'>
                <img src={data.img} alt="" 
                 className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500'
                />
              </div>
              {/* secção de conteudo */}
              <div className='space-y-2'>
                <p className='text-xs text-gray-500'>{data.publicado}</p>
                <p className='font-bold line-clamp-1'>{data.titulo}</p>
                <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitulo}</p>
              </div>
            </div>
          ))}
       </div>
      </div>
    </div>
  )
}

export default Blogs

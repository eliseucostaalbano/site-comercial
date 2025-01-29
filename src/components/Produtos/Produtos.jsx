import React from 'react'
import Heading from '../Shared/Heading'
import ProdutoCard from './ProdutoCard'

// import de imagens
import Image1 from "../../assets/Produtos/p-1.jpg";
import Image2 from "../../assets/Produtos/p-2.jpg";
import Image3 from "../../assets/Produtos/p-3.jpg";
import Image4 from "../../assets/Produtos/p-4.jpg";

const ProdutoData = [
  {
    id: 1,
    img: Image1,
    titulo: "Headphone de Barco",
    preço: "120",
    AosDelay: "0",
  },
  {
    id: 2,
    img: Image2,
    titulo: "Montanha Rochosa",
    preço: "420",
    AosDelay: "200",
  },
  {
    id: 3,
    img: Image3,
    titulo: "Óculos",
    preço: "320",
    AosDelay: "400",
  },
  {
    id: 4,
    img: Image4,
    titulo: "Impresso",
    preço: "220",
    AosDelay: "600",
  },
];

const Produtos = () => {
  return (
    <div>
    <div className='container'>
      {/* seção Header */}
    <Heading titulo="Nossos Produtos"
       subtitulo="Explore Nossos Produtos"/>
      {/* seção Body */}
     <ProdutoCard data={ProdutoData}/>
    </div>
    </div>
  )
}

export default Produtos

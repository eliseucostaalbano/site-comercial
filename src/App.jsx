import React from 'react';
import NavBar from './components/Navbar/NavBar';
import Hero from './components/Hero/Hero';
import Categoria from './components/Categoria/Categoria';
import Categoria2 from './components/Categoria/Categoria2';
import Serviços from './components/Serviços/Serviços'
import Banner from './components/Banner/Banner'
import Produtos from "./components/Produtos/Produtos";
import Footer from "./components/Footer/Footer"

import headphone from "./assets/Hero/headphone.png";
import smartwatch2 from "./assets/Categoria/smartwatch2.png";

const BannerData = {
  desconto: "30% OFF",
  titulo: "Belo Sorriso",
  date: "10 Jan até 28 Jan",
  image: headphone,
  titulo2: "Air Solo Bass",
  titulo3: "Liquidação de inverno",
  titulo4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#f42c37",
};

const BannerData2 = {
  desconto: "30% OFF",
  titulo: "Horas felizes",
  date: "14 Jan até 28 Jan",
  image: smartwatch2,
  titulo2: "Smart Solo",
  titulo3: "Liquidação de inverno",
  titulo4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#2dcc6f",
};

const App = () => {
  return (
    <div className='bg-white dark:bg-gray-800 dark:text-white duration-200 overflow-hidden'>
      <NavBar/>
      <Hero />
      <Categoria />
      <Categoria2 />
      <Serviços />
      <Banner data={BannerData} />
      <Produtos />
      <Banner data={BannerData2} />
      <Footer />
    </div>
  )
}

export default App

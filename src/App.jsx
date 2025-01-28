import React from 'react';
import NavBar from './components/Navbar/NavBar';
import Hero from './components/Hero/Hero';
import Categoria from './components/Categoria/Categoria';
import Categoria2 from './components/Categoria/Categoria2';
import Serviços from './components/Serviços/Serviços'

const App = () => {
  return (
    <div className='bg-white dark:bg-gray-800 dark:text-white duration-200 overflow-hidden'>
      <NavBar/>
      <Hero />
      <Categoria />
      <Categoria2 />
      <Serviços />
    </div>
  )
}

export default App

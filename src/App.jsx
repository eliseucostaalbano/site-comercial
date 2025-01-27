import React from 'react';
import NavBar from './components/Navbar/NavBar';
import Hero from './components/Hero/Hero';
import Categoria from './components/Categoria/Categoria';
import Categoria2 from './components/Categoria/Categoria2';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero />
      <Categoria />
      <Categoria2 />
    </div>
  )
}

export default App

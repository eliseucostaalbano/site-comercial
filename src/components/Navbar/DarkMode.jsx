import React from 'react'
import LightButton from "../../assets/butoes/light-mode-button.png";
import DarkButton from "../../assets/butoes/dark-mode-button.png";

const DarkMode = () => {

   const [tema, setTema] = React.useState(localStorage.getItem("tema")? localStorage.getItem("tema"): "light")
   
   const elemento = document.documentElement // acesso elemento html
   
  //  adicionando tema claro ou escuro ao localStorage e ao elemento html
   React.useEffect(() =>{
    localStorage.getItem("tema" , tema)
    if (tema === "dark") {
      elemento.classList.add("dark")
    } else {
      elemento.classList.remove("dark")
    }
   })

   return (
    <div className='relative'>
      <img 
      onClick={() => setTema(tema === "dark" ? "light" : "dark")}
      src={LightButton} alt=''  
      className= {`w-12 cursor-pointer absolute right-0 z-10 ${tema === "dark" ? "opacity-0" : "opacity-100"} 
      transition-all duration-300`}
       />

      <img 
      onClick={() => setTema(tema === "dark" ? "light" : "dark")}
      src={DarkButton} alt=''  
      className= {`w-12 cursor-pointer`} />
    </div>

  )
}

export default DarkMode

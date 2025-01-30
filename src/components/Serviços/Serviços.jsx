import React from 'react'
import { FaCarSide, FaHeadphonesAlt, FaWallet, FaCheckCircle} from "react-icons/fa";

const ServiçoData = [
  {
    id: 1,
    icone: <FaCarSide className='text-4xl md:text-5xl text-principal'/>,
    titulo: "Frete grátis",
    descrição: "Frete grátis em todas as ordens",
  },
  {
    id: 2,
    icone: <FaHeadphonesAlt className='text-4xl md:text-5xl text-principal'/>,
    titulo: "Dinheiro seguro",
    descrição: "30 dias de devolução do dinheiro",
  },
  {
    id: 3,
    icone: <FaWallet className='text-4xl md:text-5xl text-principal'/>,
    titulo: "Pagamento seguro",
    descrição: "Todos pagamento são seguros",
  },
  {
    id: 4,
    icone: <FaCheckCircle className='text-4xl md:text-5xl text-principal'/>,
    titulo: "Suporte Online 24/7",
    descrição: "Suporte técnico 24/7",
  },
];

const Serviços = () => {
  return (
    <div>
      <div className="container my-14 md:my-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
         {ServiçoData.map((data)=>(
          <div className='flex flex-col items-start sm:flex-row gap-4' key={data.id}>
            {data.icone}
            <div>
              <h1 className='font-bold lg:text-xl'>{data.titulo}</h1>
              <h1 className='text-gray-400 text-sm'>{data.descrição}</h1>
            </div>
          </div>
         ))}
        </div>
      </div>
    </div>
  )
}

export default Serviços

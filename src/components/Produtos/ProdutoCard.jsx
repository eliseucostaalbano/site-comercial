import React from 'react'
import Button from "../Shared/Button";

const ProdutoCard = ({data}) => {
  return (
    <div className='mb-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'>
        {/* seção de card */}
        {data.map((data)=> (
          <div className='group' key={data.id}>
           <div className='relative'>
            <img src={data.img} alt="" 
             className='h-[180px] w-[260px] object-cover rounded-md'
            />
            {/* butao hover */}
            <div className='hidden group-hover:flex absolute top-1/2 
            -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-full text-center 
            group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md'>
              <Button
                text={"Add ao carrinho"}
                bgColor={"bg-principal"}
                textColor={"text-white"}
              /> 
            </div>
           </div>
            <div className='leading-7'>
              <h2 className='font-semibold'>{data.titulo}</h2>
              <h2 className='font-bold'>${data.preço}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProdutoCard

import React from 'react'

const Buisness = ({name, sales, stock, id}) => {
  return (
    <div className="w-11/12 h-1/4 overflow-hidden rounded-xl bg-white shadow-lg m-3 justify-center ">
    <div className='flex flex-row items-center h-full justify-center'>
        <div className="flex flex-col flex-1 justify-start items-center">
            <p className="text-center m-1 text-gray-700 text-5xl mb-4"> {name}</p>
            <button className="w-2/4 h-1/4 rounded-md bg-sky-600 text-3xl py-2 text-indigo-100 hover:bg-sky-500 hover:shadow-md duration-75">Ver Empresa</button>
        </div>
        <div className='flex flex-col flex-1 justify-start items-center'>
           <p className="text-center m-1 text-gray-700 text-5xl mb-2"> {sales > 1000 ? "+1000" : sales} compras</p>
           <p className="text-center m-1 text-gray-700 text-3xl mb-4"> Durante el ultimo año</p>
       </div>
       <div className="flex flex-col flex-1 justify-start items-center">
            <p className="text-center m-1 text-gray-700 text-5xl mb-4"> {stock > 100 ? "+100": stock} Vehiculos</p>
            <button className="w-2/4 h-1/4 rounded-md bg-sky-600 text-3xl py-2 text-indigo-100 hover:bg-sky-500 hover:shadow-md duration-75">Ver Vehiculos</button>
        </div>
    </div>
</div>
  )
}

export default Buisness
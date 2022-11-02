import React from 'react'

const ItemDetail = ({img, nombre, precio}) => {
  return (
    <div className="w-11/12 h-3/6 overflow-hidden rounded-xl bg-white shadow-lg m-3 justify-center ">
        <div className='flex flex-row items-center h-full'>
            <div className="flex flex-col flex-1 justify-center h-full">
               <img src={img} className="h-auto w-auto pl-3 rounded-3xl " ></img>
            </div>

            <div className='flex flex-col flex-1 justify-top h-full p-8'>
                <div className=" justify-center h-1/3 mb-10">
                    <p className="text-start m-1 text-gray-700 text-6xl">{nombre}</p>
                </div>
                <div className=" h-1/3">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
                </div>
                
           </div>

            <div className='flex flex-col flex-1 justify-center h-full p-8'>
                <div className=" justify-center h-1/3 mb-10">
                    <p className="text-center m-1 text-gray-700 text-4xl">Cantidad: 10</p>
                </div>
                <div className=" h-1/3">
                        <button className="w-full h-3/4 rounded-md bg-sky-600 mb-2 text-5xl py-2 text-indigo-100 hover:bg-sky-500 hover:shadow-md duration-75">Reservar</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail


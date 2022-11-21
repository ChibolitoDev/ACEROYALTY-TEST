import React from 'react'
import { useNavigate  } from "react-router-dom";

const ItemDetail = ({img, name, price, id, description}) => {
    const navigate = useNavigate();
    function handleClick() {
        navigate({
          pathname:"/payment/"+id,
        });
      }

  return (
    <div className="w-11/12 h-4/6 overflow-hidden rounded-xl bg-white shadow-lg m-4 justify-center ">
        <div className='flex flex-row items-center h-full'>
            <div className="flex flex-col flex-1 justify-center h-full">
               <img src={img} className="h-auto w-auto pl-3 rounded-3xl " ></img>
            </div>

            <div className='flex flex-col flex-1 justify-top h-full p-8'>
                <div className=" justify-center h-1/3 mb-10">
                    <p className="text-start m-1 text-gray-700 text-6xl">{name}</p>
                </div>
                <div className=" h-2/3">
                    <p>{description}</p>
                </div>
                
           </div>

            <div className='flex flex-col flex-1 justify-center h-full p-8 gap-2'>
                <div className=" justify-center h-1/3 ">
                    <p className="text-center m-1 text-gray-700 text-4xl">Cantidad: 10</p>
                    <p className="text-center m-1 text-gray-700 text-4xl">Precio: S/{price}</p>

                </div>
 
                <div className=" h-1/3">
                        <button onClick={handleClick} className="w-full h-3/4 rounded-md bg-sky-600 mb-2 text-5xl py-2 text-indigo-100 hover:bg-sky-500 hover:shadow-md duration-75">Reservar</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail


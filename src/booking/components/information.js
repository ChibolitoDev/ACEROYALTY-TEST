import React from 'react'

const Information = ({img,name,description}) => {
  return (
    <div className='flex flex-col items-top h-full w-3/5 mt-26 ml-20'>
        <div className='flex flex-row '>
            <div className="flex flex-col flex-1 justify-top">
                <img src={img} className="h-auto w-auto pl-3 rounded-3xl" alt='imagen'></img>
            </div>
            <div className='flex flex-col flex-1 justify-center h-full pl-4'>
                <div className=" justify-center h-1/3 pb-10 ">
                    <p className="text-start m-1 text-gray-700 text-6xl">{name}</p>
                </div>
                <div className=" h-1/3 mb-5">
                    <p>{description}</p>
                </div>
            </div> 
        </div>
        <div className=" justify-center h-1/3 m-10">
            <p className="text-center m-1 text-gray-700 text-4xl">Cantidad:
            <div class="inline-block ml-3">
            <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Cantidad</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
            </p>

        </div>
    </div>

 )
}

export default Information
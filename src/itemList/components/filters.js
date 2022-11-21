import React from 'react'

const Filters = () => {
  return (

    <div className=" h-full  w-3/5">
    <div className="flex flex-col h-screen p-3 bg-cyan-600 pb-4 shadow-md overflow-hidden rounded-md">
        <div className="space-y-3">
            <div className="flex items-center">
                <h2 className="text-xl font-bold">Filtros</h2>
            </div>
            <div className="flex-1">
                <ul className="pt-2 pb-4 space-y-1 text-sm">
                    <li className="rounded-sm">
                        <a
                            className="flex items-center space-x-3 rounded-md"
                        >
                            <span className="text-xl">Tipo de Vehiculo</span>
                        </a>
                    </li>
                </ul>

                <div class="form-check flex items-center space-x-3 rounded-md text-lg p-3">
                    <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label inline-block text-gray-800 " for="flexCheckDefault">
                        Bicicleta
                    </label>
                </div>
                <div class="form-check flex items-center space-x-3 rounded-md text-lg p-3">
                    <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label inline-block text-gray-800 " for="flexCheckDefault">
                        Patineta
                    </label>
                </div>   
                <div class="form-check flex items-center space-x-3 rounded-md text-lg p-3">
                    <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label inline-block text-gray-800 " for="flexCheckDefault">
                        Skate
                    </label>
                </div>            
                <div class="form-check flex items-center space-x-3 rounded-md text-lg p-3">
                    <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label inline-block text-gray-800 " for="flexCheckDefault">
                        Penny
                    </label>
                </div>     
                <div class="form-check flex items-center space-x-3 rounded-md text-lg p-3">
                    <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label inline-block text-gray-800 " for="flexCheckDefault">
                        LongBoard
                    </label>
                </div>   
                <div class="form-check flex items-center space-x-3 rounded-md text-lg p-3">
                    <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label inline-block text-gray-800 " for="flexCheckDefault">
                        Patin
                    </label>
                </div>   
            </div>
        </div>
    </div>

</div>

  )
}

export default Filters
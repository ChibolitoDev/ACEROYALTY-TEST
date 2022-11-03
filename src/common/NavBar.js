import React from 'react'
import Searcher from './Searcher'

const NavBar = () => {
  return (
    <div className="w-full flex flex-row justify-between items-center bg-cyan-600 pb-4 shadow-md overflow-hidden h-auto mb-1">
      <div className='flex flex-row flex-1 justify-top pl-10'>
        <div className=" justify-center h-1/3">
          <p className="text-start text-4xl">Tech On Wheels</p>
        </div>      
      </div>
       <Searcher/>
      <div className="flex flex-row flex-1 justify-center h-full">
        <img className="mr-4 text-3xl h-16 w-auto mt-3 rounded-3xl" src="https://i.imgur.com/5dmBrx6.jpg" ></img>
      </div>

    </div>
  )
}

export default NavBar
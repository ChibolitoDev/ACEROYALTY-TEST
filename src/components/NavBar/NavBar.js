import React from 'react'
import Searcher from '../Searcher/Searcher'

const NavBar = () => {
  return (
    <div className="w-full flex flex-wrap justify-between items-center bg-cyan-600 p-4 pb-5 shadow-md overflow-hidden h-auto  ">
        <p className="ml-4 text-3xl">TechOnWheels</p>

    <Searcher/>
  <p className="ml-4 text-3xl">TechOnWheels</p>

    </div>
  )
}

export default NavBar
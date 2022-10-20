import React from 'react'
import Searcher from '../Searcher/Searcher'

const NavBar = () => {
  return (
    <div className="w-full flex flex-wrap justify-between items-center bg-cyan-600 p-4 pb-5 shadow-md overflow-hidden h-auto  ">
        <p className="ml-4 text-3xl">TechOnWheels</p>

    <Searcher/>
  <img className="ml-4 text-3xl h-16 w-auto" src="https://i.imgur.com/5dmBrx6.jpg" ></img>

    </div>
  )
}

export default NavBar
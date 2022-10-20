import React from 'react'
import Searcher from '../Searcher/Searcher'

const NavBar = () => {
  return (
    <div className="w-full flex flex-wrap justify-between items-center bg-cyan-600 pb-4 shadow-md overflow-hidden h-auto mb-4 ">
        <p className="ml-4 text-3xl">TechOnWheels</p>

    <Searcher/>
  <img className="ml-4 text-3xl h-16 w-auto mt-3 rounded-3xl" src="https://i.imgur.com/5dmBrx6.jpg" ></img>

    </div>
  )
}

export default NavBar
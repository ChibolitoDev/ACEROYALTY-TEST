import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import ItemDetail from './../../components/ItemDetail/ItemDetail';
import Buisness from './../../components/Buisness/Buisness';

const Details = ({img, nombre, precio}) => {
  return (
    <div className="flex flex-col h-screen w-full bg-indigo-50 justify-start items-center">
        <NavBar/>
        <ItemDetail img={img} nombre={nombre}precio={precio}/>
        <Buisness/>
    </div>  
)
}

export default Details
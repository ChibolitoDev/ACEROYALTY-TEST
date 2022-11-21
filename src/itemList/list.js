import React from 'react'
import NavBar from '../common/navBar';
import ItemList from './Components/ItemList';




 const List = ({data}) => {
    return (
        <div>
          <div className="flex flex-col h-full w-full bg-indigo-50 justify-end items-start">
          <NavBar/>
          </div>
          <div className="flex flex-col h-full w-full bg-indigo-50 justify-end items-start">
           <ItemList data= {data }/>
           </div>
        </div>
      );
}

export default List
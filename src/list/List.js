import React from 'react'
import NavBar from '../common/NavBar';
import ItemList from './Components/ItemList';


 const List = ({arr}) => {
    return (
        <div>
          <div className="flex flex-col h-full w-full bg-indigo-50 justify-end items-start">
          <NavBar/>
          </div>
            <div className="flex flex-col h-full w-full bg-indigo-50 justify-end items-start">
           <ItemList Items= {arr }/>
            </div>
        </div>
      );
}

export default List
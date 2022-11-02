import React from 'react'
import NavBar from '../common/NavBar';
import ItemList from './Components/ItemList';


 const Search = ({arr}) => {
    return (
        <div className="flex flex-col h-full w-full bg-indigo-50 justify-center items-top">
            <NavBar/>
             <ItemList Items= {arr }/>
        </div>
      );
}

export default Search
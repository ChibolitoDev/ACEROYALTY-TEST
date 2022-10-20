import React from 'react'
import ItemList from '../../components/ItemList/ItemList';
import NavBar from '../../components/NavBar/NavBar';

 const Search = ({arr}) => {
    return (
        <div className="flex flex-col h-full w-full bg-indigo-50 justify-center items-top">
            <NavBar/>
             <ItemList Items= {arr }/>
        </div>
      );
}

export default Search
import React from 'react'
import Filters from './filters';
import Item from './item';



const ItemList = ({data}) => {
  return (
    <div className=' h-full w-full flex p-4'>
      <div className="h-full flex w-3/12 ml-6 items-start  ">  
        <Filters/>
      </div>
      <div className="h-full flex w-9/12 flex-wrap items-end justify-end mr-5">  
        {data.map(item => (
          <Item key={item.id+item.name+item.price} id={item.id} img={item.img} name={item.name} price={item.price}  />
        ))}
      </div>
    </div>

  )
}

export default ItemList


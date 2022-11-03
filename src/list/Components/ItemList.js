import React from 'react'
import Filters from './Filters';

const ItemList = ({Items}) => {
  return (
    <div className=' h-full w-full flex p-4'>
      <div className="h-full flex w-3/12 ml-6 items-start  ">  
        <Filters/>
      </div>
      <div className="h-full flex w-9/12 flex-wrap items-end justify-end mr-5">  
        {Items}
      </div>
    </div>

  )
}

export default ItemList


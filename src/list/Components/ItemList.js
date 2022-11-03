import React from 'react'
import Filters from './Filters';

const ItemList = ({Items}) => {
  return (
    <div className=' h-full w-full flex p-4'>
      <div className="h-full flex w-2/6 ml-6 items-start  ">  
        <Filters/>
      </div>
      <div className="h-full flex w-5/6 flex-wrap items-end  justify-end mr-32">  
        {Items}
      </div>
    </div>

  )
}

export default ItemList


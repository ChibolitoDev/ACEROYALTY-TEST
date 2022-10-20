import React from 'react'

const ItemList = ({Items}) => {
  return (
    <div className=" h-full w-full grid grid-cols-4 items-top justify-center p-3  ">  
    {Items}
    </div>

  )
}

export default ItemList
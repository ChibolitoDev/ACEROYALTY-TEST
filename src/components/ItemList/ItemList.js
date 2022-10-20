import React from 'react'

const ItemList = ({Items}) => {
  return (
    <div className=" h-full w-4/5 grid grid-cols-4 items-top justify-center p-5 m-auto">  
    {Items}
    </div>

  )
}

export default ItemList
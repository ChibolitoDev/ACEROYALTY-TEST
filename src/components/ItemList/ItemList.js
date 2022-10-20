import React from 'react'

const ItemList = ({Items}) => {
  return (
    <div className="grid grid-cols-5 items-top justify-center bg-indigo-50 p-3 h-screen w-screen">  
    {Items}
    </div>

  )
}

export default ItemList
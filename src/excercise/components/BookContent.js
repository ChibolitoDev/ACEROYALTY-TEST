import React from 'react'

function BookContent({name, description}) {
  return (
    <div>
      <div className='max-w-max max-h-max overflow-hidden justify pb-1 mb-2'>
        <h1 className='font-bold text-lg'>{name}</h1>  
      </div>
      <div>  
        <h1>{description}</h1>
      </div>
    </div>  )
}

export default BookContent
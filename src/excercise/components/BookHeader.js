import React from 'react'

function BookHeader({title,authorId}) {
  return (
    <div className='flex justify-between items-start'>
      <div className='flex items-start max-w-max max-h-max overflow-hidden justify p-1 '>
        <h1 className='uppercase font-bold text-lg'>{title}</h1>  
      </div>
      <div className='flex items-end  max-w-max max-h-max overflow-hidden rounded-xl bg-green-200  justify p-2'>  
        <p className='text-green-500 '>AUTHORID: {authorId}</p>
      </div>
    </div>
  )
}

export default BookHeader
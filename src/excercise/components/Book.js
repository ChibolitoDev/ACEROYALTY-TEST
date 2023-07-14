import React from 'react'
import BookHeader from './BookHeader';
import BookContent from './BookContent';
import BookFooter from './BookFooter';

const Book = ({item}) => {
  return (
    <div className='h-full w-full flex flex-col justify-center items-center' >
      <div className="max-w-max max-h-max w-10/12 overflow-hidden rounded-xl bg-white shadow-md m-3 justify">
        <div className='m-3'>
              <BookHeader title ={item.title} authorId={item.authorId}/>
          </div>
          <div className='m-3'>
              <BookContent name ={item.name} description={item.description} />
          </div>
          <div className='m-3'>
              <BookFooter />
          </div>
      </div>
    </div>
  )
}

export default Book

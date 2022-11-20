import React from 'react'
import Booking from '../booking/Booking';

const item = {
    name: "aa",
    img:"https://i.pinimg.com/564x/96/ca/a9/96caa961966c7c41329e31ab5fc58b9a.jpg"
}

const BookingPage = () => {
  return (
    <Booking item={item}/>
  )
}

export default BookingPage
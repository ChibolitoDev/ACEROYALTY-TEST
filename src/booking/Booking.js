import React from 'react'
import NavBar from '../common/NavBar'
import Calendar from './components/Calendar'
import Information from './components/Information'

const Booking = ({item}) => {
  return (
    <div className="flex flex-col h-screen w-full bg-indigo-50 justify-start items-center">
      <NavBar/>
      <div className="w-full h-full overflow-hidden rounded-xl bg-white shadow-lg m-2 justify-center ">
        <div className='flex flex-row items-center h-full w-full'>
          <Information name= {item.name} img = {item.img}/>
          <Calendar/>
        </div>
    </div>
    </div>
    )
}

export default Booking
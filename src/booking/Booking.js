import React, { useState,useEffect } from 'react'
import NavBar from '../common/navBar'
import Calendar from './components/calendar'
import Information from './components/information'
import { GetItem } from './api/bookingApi';

const Booking = () => {

  const [data, setData] = useState([]);

  useEffect( ()=>{
    async function fetchMyAPI() {
      const id = window.location.pathname;
      await GetItem(id.charAt(id.length-1)).then(response => setData(response))
    }
    fetchMyAPI();
  },[])


  return (
    <div className="flex flex-col h-screen w-full bg-indigo-50 justify-start items-center">
      <NavBar/>
      <div className="w-full h-full overflow-hidden rounded-xl bg-white shadow-lg m-2 justify-center ">
        <div className='flex flex-row items-center h-full w-full'>
          <Information name= {data.vehicleName} img = {data.imageUrl} description={data.description}/>
          <Calendar/>
        </div>
    </div>
    </div>
    )
}

export default Booking
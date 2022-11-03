import React, {useState} from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className='flex flex-col flex-1 items-center  h-full'>
        <div className=' h-full items-start mt-20 flex gap-3'>
          <div className=''>
          <p> FECHA INICIO </p>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            inline
          />
          </div>
          <div>
          <p>FECHA FIN</p>
           <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            inline
          />
          </div>

        </div>
        <div className=' h-full w-full justify-end'>
          <div className=" h-1/3 w-11/12">
              <button className="w-full h-3/4 rounded-md bg-sky-600 mb-2 text-5xl py-2 text-indigo-100 hover:bg-sky-500 hover:shadow-md duration-75">Reservar</button>
          </div>
        </div>

    </div>
  )
}

export default Calendar
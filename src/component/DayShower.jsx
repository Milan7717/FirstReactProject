import React, { useState } from 'react'

const DayShower = () => {
  const [dayShower, setDayShower] = useState('Click on bottom to see the day.');
  const handleClick = (day) => {
    setDayShower(`Today is ${day}`);
  };

  return (
    <div className=' w-full flex flex-col items-center'>
      <div className='mt-20 mb-10 text-xl'>{dayShower}</div>
      <div>
        <button className='border border-black p-2 m-4 rounded text-white bg-red-300 text-xl' onClick={() => handleClick("Sunday")}>Sunday</button>
        <button className='border border-black p-2 m-4 rounded text-white bg-red-300 text-xl' onClick={() => handleClick("Monday")}>Monday</button>
        <button className='border border-black p-2 m-4 rounded text-white bg-red-300 text-xl' onClick={() => handleClick("Tuesday")}>Tuesday</button>
        <button className='border border-black p-2 m-4 rounded text-white bg-red-300 text-xl' onClick={() => handleClick("Wednesday")}>Wednesday</button>
        <button className='border border-black p-2 m-4 rounded text-white bg-red-300 text-xl' onClick={() => handleClick("Thursday")}>Thursday</button>
        <button className='border border-black p-2 m-4 rounded text-white bg-red-300 text-xl' onClick={() => handleClick("Friday")}>Friday</button>
        <button className='border border-black p-2 m-4 rounded text-white bg-red-300 text-xl' onClick={() => handleClick("Saturday")}>Saturday</button>
      </div>
    </div>

  )
}

export default DayShower
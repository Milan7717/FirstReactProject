import React, { useState } from 'react'

const Card = () => {
  const [increment, setIncrement] = useState(0);

  return (
    <div className='m-24 text-2xl'>
      <button className='bg-red-500 w-16 h-16 text-xl m-8' onClick={() => setIncrement(increment - 1)}>-</button>
      {increment}
      <button className='bg-red-500 w-16 h-16 text-xl m-8' onClick={() => setIncrement(increment + 1)}>+</button>
    </div>
  )
}

export default Card
import React, { useState } from 'react'

const ColorChange = () => {
    const [backgroundColor,setBackground]=useState('white');
    return (
        
        <div className='w-full flex flex-col items-center mt-10'>
            <div className='box1 w-[40%] border-2 border-black h-[20vh]' style={{background:backgroundColor}}>
            </div>
            <div>
                <button className='m-2 p-1 border border-black bg-red-500' onClick={() => setBackground("red")}>red</button>
                <button className='m-2 p-1 border border-black bg-blue-500' onClick={() => setBackground("blue")}>blue</button>
                <button className='m-2 p-1 border border-black bg-green-500' onClick={() => setBackground("green")}>green</button>
                <button className='m-2 p-1 border border-black bg-yellow-500' onClick={() => setBackground("yellow")}>yellow</button>
            </div>
        </div>
    )
}

export default ColorChange

// write a react program to show 7 different buttons for seven different days when click on the button pass the day when user click on the buttonpass the day into child component and print you click{day}
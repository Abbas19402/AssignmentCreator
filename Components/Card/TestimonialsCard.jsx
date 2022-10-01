import React from 'react'
import Rating from '@mui/material/Rating';

const TestimonialsCard = () => {
  return (
    <div className='w-full h-full p-4 rounded-md shadow-xl bg-white'>
        <div className="flex flex-col justify-around items-center h-full w-full">
            <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-col items-start justify-center w-full">
                    <span className="text-lg font-medium tracking-wide">Abbas Dalal</span>
                    <span className="text-lg">Udaipur , India</span>
                </div>
                <div className="h-full flex justify-end items-end">
                    
                </div>
            </div>
            <div className="flex justify-center items-center text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ab alias officiis reprehenderit, maiores optio atque animi nemo ad, voluptatum nostrum doloremque! Explicabo fugiat asperiores voluptatibus maiores dolorum doloremque rerum.
            </div>
        </div>
    </div>
  )
}

export default TestimonialsCard
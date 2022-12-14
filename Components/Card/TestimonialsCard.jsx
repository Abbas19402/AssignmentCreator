import React from 'react'
import parse from 'html-react-parser'
import Image from 'next/image'

const TestimonialsCard = ({testimonials}) => {
  return (
    <div className='w-full h-full p-4 rounded-md shadow-xl bg-white'>
        <div className="flex flex-col justify-around items-center h-full w-full">
            <div className="h-fit flex justify-end items-end w-fit">
                <Image loader={()=>testimonials.logoSrc} src={testimonials.logoSrc} width={60} height={60} className="rounded-full" />
            </div>
            <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-col items-center justify-center w-full">
                    <span className="text-lg font-medium tracking-wide">{testimonials.title}</span>
                    <span className="text-lg">{testimonials.short_description}</span>
                </div>
            </div>
            <div className="flex justify-center items-center text-sm text-gray-600">
                {parse(testimonials.description)}
            </div>
        </div>
    </div>
  )
}

export default TestimonialsCard
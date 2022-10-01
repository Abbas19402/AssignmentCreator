import React from 'react'
import Card from '../../Components/Card'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Testimonials = () => {
  return (
    <div className='relative bg-gray-50 flex flex-col justify-center items-center'>
        <div className="p-5 flex flex-row justify-center items-center gap-5 md:pl-16 my-4 lg:my-0 lg:pl-10">
            <span className='text-2xl lg:text-4xl tracking-tight leading-relaxed font-thin whitespace-nowrap'>Our Testimonials</span>
        </div>
        <div className='w-[80%] py-3'>
            <Slide 
            slidesToScroll={1} 
            canSwipe={false} 
            slidesToShow={3} 
            indicators={true} 
            transitionDuration={600} 
            prevArrow={<div><span className='relative -left-10 bg-white rounded-full p-2'><KeyboardArrowLeftIcon/></span></div>} 
            nextArrow={<div><span className='relative -right-10 bg-white rounded-full p-2'><KeyboardArrowRightIcon /></span></div>}
            >
              { [...Array(10)].map((_,key) => (
                <div key={key} className='h-64 rounded-md px-5 flex justify-center items-center'>
                  <div className="w-[100%] h-full">
                    <Card.TestimonialsCard />
                  </div>
                </div>
              ))}
            </Slide>
        </div>
    </div>
  )
}

export default Testimonials
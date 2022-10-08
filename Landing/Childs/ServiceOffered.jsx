import Image from 'next/image'
import React from 'react'
import parse from 'html-react-parser'

const ServiceOffered = ({data}) => {
  return (
    <div className='relative p-5 bg-inherit'>
      <div className="p-5 flex flex-row justify-center items-center gap-5 md:pl-16 my-4 lg:my-0 lg:pl-10">
          <span className='text-2xl lg:text-4xl tracking-tight leading-relaxed font-thin md:whitespace-nowrap'>What services do Assignment Creator offer?</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-3 py-10 justify-center items-center">
        {data?.map((item , key) => (
          <div className="bg-white shadow-xl rounded-lg overflow-hidden border">
            <div className='p-3'>
              <Image loader={()=>item.ImageSrc} src={item.ImageSrc} width={480} height={250} layout='responsive'/>
            </div>
            <div className="p-3">
              <div className="w-full flex flex-row justify-start p-2 py-0 pt-1">
                <span className='text-xl font-medium'>{item.name}</span>
              </div>
              <div className="w-full text-justify p-2">
                {parse(item.long_desc)}
              </div>
            </div>
            <div className="w-full flex justify-end pt-0 pr-5 pb-5">
              <span className="text-primary hover:underline hover:cursor-pointer text-lg">Learn More</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}   

export default ServiceOffered
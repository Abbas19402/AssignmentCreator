import Image from 'next/image'
import React from 'react'
import parse from 'html-react-parser'
import { useSelector } from 'react-redux'

const ServiceOffered = ({data}) => {
  const SSR = useSelector(state => state.ssr.ssrData)

  const { cat } = SSR
  return (
    <div className='relative p-5 bg-inherit'>
      <div className="p-5 flex flex-row justify-center items-center gap-5 md:pl-16 my-4 lg:my-0 lg:pl-10">
          <span className='text-2xl lg:text-4xl tracking-tight leading-relaxed font-thin md:whitespace-nowrap'>What services do Assignment Creator offer?</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-3 py-10 justify-center items-center">
        {cat.data.map((item , key) => (
          key < 8 && <div className="bg-white shadow-xl rounded-lg overflow-hidden border min-h-[50vh] h-full max-h-[50vh]">
            <div className='p-3'>
              <Image loader={()=>item.ImageSrc} src={item.ImageSrc} width={480} height={250} layout='responsive'/>
            </div>
            <div className="relative w-full h-full">
              <div className="p-3">
                <div className="w-full flex flex-row justify-start mb-1">
                  <span className='text-xl font-medium tracking-tight'>{item.name}</span>
                </div >
                <div className="w-full h-24  text-justify text-sm overflow-hidden text-gray-600">
                  {parse(item.long_desc)}
                </div>
              </div>
              {/* <div className="absolute bottom-0 h-[80%] w-full bg-gradient-to-b from-white/10 via-primary/30 to-transparent transition-all duration-300  bg-bottom p-3 ">
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}   

export default ServiceOffered
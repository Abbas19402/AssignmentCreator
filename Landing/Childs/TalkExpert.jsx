import Image from 'next/image'
import React from 'react'
import parse from 'html-react-parser'

const TalkExpert = ({data}) => {
  return (
    data && <div className='relative p-5 my-7 bg-white'>
      <div id="Head" className='mt-7'>
        <div className="flex flex-row justify-center items-center gap-5 md:pl-16 my-4 lg:my-0 lg:pl-10">
          <span className='text-2xl lg:text-4xl tracking-tight leading-relaxed font-thin md:whitespace-nowrap'>Why you need Assignment Creator?</span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center md:px-16 lg:p-5 gap-4">
        <div className="w-full lg:w-[50%] px-5">
          <div id="text" className="text-md text-justify tracking-tight leading-relaxed">
            {parse(data[0].description)}
          </div>
            <button
              className="bg-black hover:bg-neutral-700 w-fit rounded transition-all duration-300 p-2 px-3 my-2">
              <span className="text-white tracking-wider text-base ">
                Talk to Expert
              </span>
            </button>
        </div>
        <div className="w-full lg:w-[45%] px-5 " >
          <div className="flex justify-center items-center h-full w-full">
            <Image loader={()=>data[0].bannerImageSrc} src={data[0].bannerImageSrc} className='rounded-md' draggable={'false'} width={500} height={350} layout="fixed"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TalkExpert

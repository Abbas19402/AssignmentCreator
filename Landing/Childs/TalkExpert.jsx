import Image from 'next/image'
import React from 'react'

const TalkExpert = () => {
  return (
    <div className='relative p-5 my-7 bg-white'>
      <div id="Head" className='mt-7'>
        <div className="flex flex-row justify-center items-center gap-5 md:pl-16 my-4 lg:my-0 lg:pl-10">
          <span className='text-2xl lg:text-4xl tracking-tight leading-relaxed font-thin whitespace-nowrap'>Why you need Assignment Creator?</span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center md:px-16 lg:p-5 gap-4">
        <div className="w-full lg:w-[50%] px-5">
          <div id="text" className="text-sm text-justify tracking-tight leading-relaxed">
            <span>Every student of any academic level dreams of scoring high grades in class and making an impression in front of their professor, but hardly any get that chance. This is when Assignment Creator comes into the picture and aids students in scoring their dream grades through the best assignment writing service. The experienced writers with renowned degrees and relevant experience are always ready to deliver top-notch quality services and impeccable documents. When any student seeks help with an assignment, they turn to us first. Our immense subject knowledge and proven strategies ensure they get the best quality assistance and score high. Wondering when to reach out to us, don't worry; we are available round-the-clock to assist you. You can drop a mail, text or call, and our customer service team will be there in no time to update your document status or note down your order.</span>
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
            <Image loader={()=>"https://ichef.bbci.co.uk/news/976/cpsprodpb/2F62/production/_124403121_gettyimages-1278100888.jpg"} src="https://ichef.bbci.co.uk/news/976/cpsprodpb/2F62/production/_124403121_gettyimages-1278100888.jpg" className='rounded-md' draggable={'false'} width={500} height={350} layout="fixed"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TalkExpert

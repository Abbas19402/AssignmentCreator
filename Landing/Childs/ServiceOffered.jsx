import Image from 'next/image'
import React , { useState } from 'react'
import parse from 'html-react-parser'
import { useSelector } from 'react-redux'
import styles from "../../styles/Home.module.css";

const ServiceOffered = ({data}) => {
  const SSR = useSelector(state => state.ssr.ssrData)

  const [ activeClass , setActiveClass ] = useState(0 )

  const { cat } = SSR
  return (
    <div className='relative p-5 bg-inherit'>
    <div className="overflow-hidden w-full h-fit px-8 py-22 md:px-12 lg:px-56 border-cyan-600 flex flex-col justify-center items-center my-10 ">
      <div className="p-5 flex flex-row justify-center items-center gap-5 md:pl-16 my-4 lg:my-0 lg:pl-10">
          <span className='text-2xl lg:text-4xl tracking-tight leading-relaxed font-thin md:whitespace-nowrap'>What services do Assignment Creator offer?</span>
      </div>
      <div className="p-4 w-full h-fit my-3 flex flex-col md:flex-row justify-center bg-white rounded-md ">
        <div className='w-full md:w-[40%] h-full overflow-hidden my-auto '>
          <ul className={`flex flex-row md:flex-col md:justify-start overflow-x-auto md:overflow-x-hidden ${styles.customScroll} overflow-y-hidden scroll-smooth lg:pb-0 pt-2  h-full gap-3 w-full`}>
            {cat.data.map( (item , index) => (
              activeClass == index ? <li>
              <div key={index} id={`${index + `${item.name}`}`} className="flex flex-nowrap py-3 px-3 border bg-primary-dark hover:cursor-pointer border-primary-dark h-full w-full transition-all ease-linear rounded shadow-xl -translate-y-1" onClick={()=>setActiveClass(index)}>
                <span className="text-white focus:text-cyan-600 transition-all duration-500 font-medium whitespace-nowrap">{item.name}</span>
              </div>
            </li> :
              index < 5 && <li>
                <div key={index} id={`${index + `${item.name}`}`}  className=" flex flex-nowrap  py-3 px-3 hover:cursor-pointer h-full w-full transition-all ease-linear rounded border border-primary" onClick={()=>setActiveClass(index)}>
                  <span className="text-blueGray hover:text-cyan-600 focus:text-cyan-600 transition-all duration-500 font-medium whitespace-nowrap">{item.name}</span>
                </div>
              </li>
            ) )}
          </ul>
        </div>
        <div className='w-full mx-1 '> 
          <div id="testimonials">
            {cat.data.map( (item, key) => (
              activeClass == key ? <div className="p-3">
              <div className="w-full flex flex-row justify-start mb-5">
                <span className='text-xl font-medium tracking-tight'>{item.name}</span>
              </div >
              <div className="w-full h-24  text-justify text-sm overflow-hidden text-gray-600">
                {parse(item.long_desc)}
              </div>
            </div> : ""
            ) )}
          </div>
        </div>
      </div>
    </div>


      {/* <div className="p-5 flex flex-row justify-center items-center gap-5 md:pl-16 my-4 lg:my-0 lg:pl-10">
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
              
            </div>
          </div>
        ))}
      </div> */}
    </div>
  )
}   

export default ServiceOffered
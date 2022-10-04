import React from 'react'
import { useSelector } from 'react-redux'

const WorkProcess = () => {
    const mode = useSelector(state => state.mode.value)
    return (
        <div className={`relative bg-inherit p-5`}>
            <div className="p-5 flex flex-row justify-center items-center gap-5 md:pl-16 my-4 lg:my-0 lg:pl-10">
                <span className='text-2xl lg:text-4xl tracking-tight leading-relaxed font-thin whitespace-nowrap'>How we work?</span>
            </div>

            <div className="grid grid-cols-3 justify-center items-center gap-8 mt-10 px-14 pb-10">
                <div className='h-72 group rounded-md flex flex-col justify-start items-center'>
                    <div className='w-full h-[5rem] flex flex-row justify-evenly items-center bg-white rounded-xl group-hover:rounded-t-xl group-hover:rounded-b-none'>
                        <span className="text-medium text-4xl text-primary">1.</span>
                        <span className="text-3xl text-primary-dark font-light">Submit your order</span>
                    </div>
                    <div className='bg-white group-hover:h-[13rem] shadow-xl rounded-b-xl w-full h-0 transition-all ease-linear'>

                    </div>
                </div>
                <div className='h-72 group rounded-md flex flex-col justify-start items-center'>
                    <div className='w-full h-[5rem] flex flex-row justify-evenly items-center bg-white rounded-xl group-hover:rounded-t-xl group-hover:rounded-b-none'>
                        <span className="text-medium text-4xl text-primary">2.</span>
                        <span className="text-3xl text-primary-dark font-light">Discuss with Experts</span>
                    </div>
                    <div className='bg-white group-hover:h-[13rem] shadow-xl rounded-b-xl w-full h-0 transition-all ease-linear'>

                    </div>
                </div>
                <div className='h-72 group rounded-md flex flex-col justify-start items-center'>
                    <div className='w-full h-[5rem] flex flex-row justify-evenly items-center bg-white rounded-xl group-hover:rounded-t-xl group-hover:rounded-b-none'>
                        <span className="text-medium text-4xl text-primary">3.</span>
                        <span className="text-3xl text-primary-dark font-light">Get your Order</span>
                    </div>
                    <div className='bg-white group-hover:h-[13rem] shadow-xl rounded-b-xl w-full h-0 transition-all ease-linear'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkProcess
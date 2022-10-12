import React from "react";
import { useSelector } from "react-redux";


const WorkProcess = () => {
    const mode = useSelector(state => state.mode.value)
    return (
        <div className={`relative bg-inherit p-5`}>
            <div className="p-5 flex flex-row justify-center items-center gap-5 md:pl-16 my-4 lg:my-0 lg:pl-10">
                <span className='text-2xl lg:text-4xl tracking-tight leading-relaxed font-thin whitespace-nowrap'>How we work?</span>
            </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-start gap-8 mt-10 px-14 pb-10">
            <div className='h-fit group rounded-md flex flex-col justify-start items-center'>
                <div className='w-full h-[5rem] flex flex-row justify-evenly items-center bg-white rounded-xl group-hover:rounded-t-xl group-hover:rounded-b-none'>
                    <span className="text-medium text-4xl text-primary">1.</span>
                    <span className="text-xl md:text-2xl lg:text-3xl text-primary-dark font-light">Submit your order</span>
                </div>
                <div className='bg-white group-hover:h-[12rem] shadow-xl rounded-b-xl w-full h-0 transition-all ease-linear overflow-hidden flex justify-center items-center'>
                    <p className="p-10 text-gray-500 font-semibold text-lg tracking-wide text-justify">
                        List out the specifications for availing assignment writing service and details in our online order form and submit it. We assure the confidentiality of your personal information.
                    </p>
                </div>
            </div>
            <div className='h-fit group rounded-md flex flex-col justify-start items-center'>
                <div className='w-full h-[5rem] flex flex-row justify-evenly items-center bg-white rounded-xl group-hover:rounded-t-xl group-hover:rounded-b-none'>
                    <span className="text-medium text-4xl text-primary">2.</span>
                    <span className="text-xl md:text-2xl lg:text-3xl text-primary-dark font-light">Discuss with Experts</span>
                </div>
                <div className='bg-white group-hover:h-[12rem] shadow-xl rounded-b-xl w-full h-0 transition-all ease-linear overflow-hidden flex justify-center items-start'>
                    <p className="p-10 text-gray-500 font-semibold text-lg tracking-wide text-justify">
                        Once we receive the form, our assignment writers will contact you at the earliest to discuss all details related to your assignment help. They are happy to help you.
                    </p>
                </div>
            </div>
            <div className='h-fit group rounded-md flex flex-col justify-start items-center'>
                <div className='w-full h-[5rem] flex flex-row justify-evenly items-center bg-white rounded-xl group-hover:rounded-t-xl group-hover:rounded-b-none'>
                    <span className="text-medium text-4xl text-primary">3.</span>
                    <span className="text-xl md:text-2xl lg:text-3xl  text-primary-dark font-light">Get your Order</span>
                </div>
                <div className='bg-white transition-all ease-linear h-0 group-hover:h-[15rem] shadow-xl rounded-b-xl w-full overflow-hidden flex justify-center items-center'>
                    <p className="p-5 text-gray-500 font-semibold text-lg tracking-wide text-justify">
                        After the writing process, the document goes through a proofreading process. After a quality check, the final paper is dropped into your email by the assignment writing service along with Free Plagiarism Report.
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default WorkProcess
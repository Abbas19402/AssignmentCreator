import React from 'react'
import { useSelector } from 'react-redux'
import Form from '../../Components/Form'


const Order = () => {
    const mode = useSelector( state => state.mode.value )

  return (
    <div className={`${mode == 'dark' && 'dark'}`}>
        <div id='container' className="bg-slate-50 dark:bg-dark/80 h-fit px-2 md:px-8 lg:px-32">
            <div className='md:p-16 lg:p-20'>
                {/* <div id="topBar" className='w-full h-32 border-2 border-blue-600 mb-16'>
                </div> */}
                <div className='flex flex-col lg:flex-row h-full gap-16'>
                    <div id="Form" className="w-full lg:w-[60%] h-full">
                        <Form.OrderForm />
                    </div>
                    {/* <div id="OrderButton" className="w-full lg:w-[40%] h-full bg-white">
                        <div id="Headings" className='flex flex-row justify-start items-center border-b border-b-black'>
                            <div id="Head" className='p-3'>
                                <span className="text-xl font-medium text-red-700">Order Summary</span>
                            </div>
                        </div>
                        <div id="Body" className='border border-black p-4'>
                            <div id="bill">
                            
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Order
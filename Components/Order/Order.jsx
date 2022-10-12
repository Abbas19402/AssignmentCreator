import React from 'react'
import { useSelector } from 'react-redux'

import Form from '../Form';


const OrderComponent = () => {
  const mode = useSelector((state) => state.mode.value);

  return (
    <div className={`${mode == 'dark' && 'dark'}`}>
        <div id='container' className="bg-slate-50 dark:bg-dark/80 h-fit px-2 md:px-8 lg:px-32">
            <div className='md:p-16 lg:p-20'>
                <div className='flex flex-col lg:flex-row h-full gap-16 w-full justify-center items-center'>
                    <div id="Form" className="w-full lg:w-[50%] h-full">
                        <Form.OrderForm />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderComponent

import React from 'react'
import Table from '../../Components/Table'

const MyOrders = ({ orders }) => {
    
  return (
    <div className='w-full h-full relative md:p-8'>
        <div className="w-full h-32 ">
            <div className="text-serif text-4xl md:text-5xl lg:text-6xl flex justify-center items-center h-full">
                <span>My Orders</span>
            </div>
        </div>
        <div className="px-3 md:px-6 lg:px-20">
            <Table.Orders />
        </div>
    </div>
  )
}

export default MyOrders
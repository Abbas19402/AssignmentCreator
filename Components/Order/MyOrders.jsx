import React from 'react'
import { useSelector } from 'react-redux'

import Link from 'next/link'

import Table from '../Table'
import Animation from '../../public/Animations/NoLogin.json'
import Lottie from "lottie-react";

const MyOrdersComponent = () => {
  const loginStatus = useSelector(state => state.auth.loginStatus)
  console.log(loginStatus);
    
  return (
    <div className='w-full h-full relative md:p-8'>
        {loginStatus ? <><div className="w-full h-32 ">
            <div className="text-serif text-4xl md:text-5xl lg:text-6xl flex justify-center items-center h-full">
                <span>My Orders</span>
            </div>
        </div>
        <div className="px-3 md:px-6 lg:px-20">
            <Table.Orders />
        </div></> : <div className="w-full h-screen flex justify-center items-start">
          <div className="flex flex-col items-start justify-start w-fit">
            <div className="w-fit h-fit">
              <Lottie className='h-[65vh] w-[65vh]' animationData={Animation} loop={true}/>
            </div>
            <div className="flex flex-row gap-3 justify-center items-center w-full">
              <Link href={'/auth/login'} className="hover:cursor-pointer">
                <div className="p-2 bg-gray-300 text-gray-700">
                   <span className="text-xl tracking-wider uppercase">Login</span> 
                </div>
              </Link>
              <span className="text-xl tracking-wider text-gray-600">to view your orders</span>
            </div>
          </div>
        </div>}
    </div>
  )
}

export default MyOrdersComponent
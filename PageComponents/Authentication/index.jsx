import React from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/future/image'
import Logo from '../../public/Assets/Logos/Login.png'
import Form from '../../Components/Form'

const Authentication = ({ query }) => {
  const mode = useSelector( state => state.mode.value )
  return (
    <div className={`${mode == 'dark' && 'dark'}`}>
        <div className={`bg-slate-50 dark:bg-dark/80 w-screen ${query.page == 'login' && 'h-screen'} md:px-16 md:py-16 lg:px-36 lg:py-16`}>
          <div className={`w-full h-full rounded-xl overflow-hidden bg-white drop-shadow-xl`}>
            <div className="flex flex-col lg:flex-row h-full">
              <div className="w-full lg:w-[40%] bg-black flex justify-center items-center">
                <Image src={Logo} alt="Assignment Help" width='300' height='460' />
              </div>
              <div className="w-full h-full lg:w-[60%] dark:bg-dark/80 bg-white">
                {query.page == 'login' ? <Form.LoginForm /> : query.page == 'signup' && <Form.SignupForm/>}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Authentication
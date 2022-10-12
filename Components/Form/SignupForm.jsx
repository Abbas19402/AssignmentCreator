import React , { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

import Link from "next/link"; 
import axios from "axios";

import useValid from "../../hooks/useValid";

const SignupForm = () => {
  const router = useRouter()
  const mode = useSelector((state) => state.mode.value);

  const userData = useSelector(state => state.auth.user)

  const { access_token } = userData

  const [ user,setUser ] = useState(null)
  const [ loading , setLoading ] = useState(false)
  const [ otpStatus , setOtpStatus ] = useState(false)
  const [ otp , setOtp ] = useState(null)

  useEffect(()=>{
  },[otpStatus , loading , user])

  const CheckValidation = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const values = {}
    for(var entry of form.entries()) {
        values[entry[0]] = entry[1]
    }
    setLoading(true)
    const { emptyKeys , validationStatus } = useValid(values)
    if(validationStatus) {
        HandleSignup(values)
    } else {
        toast.error(`${emptyKeys} required!!`)
        setLoading(false)
    }
}

  const HandleSignup = async values => {
    try{
      const res = await axios({
        method: 'post',
        url: 'https://assignment.servepratham.com/api/customer/signup',
        data: values
      })
      CreateOtp(values)
    } catch(error) {
      toast.error("Signup Failed!!")
      setLoading(false)
    }
  }

  const CreateOtp = async( val ) => {
    const form = new FormData();
    form.append('dialing_code',val.dialing_code)
    form.append('phone',val.phone)
    try{
      const res = await axios({
        method: 'post',
        url: 'https://assignment.servepratham.com/api/auth/create/otp',
        data: form
      })
      setUser(res.data.data.user_id)
      setOtpStatus(true)
      setLoading(false)
    } catch(error) {
      alert('Request Failed!!')
      setLoading(false)
    }
  }

  const OtpVerification = async(e) => {
    e.preventDefault()
    setLoading(true)
    const form = new FormData();
    form.append('user_id',user)
    form.append('otp',otp)
    try{
      const res = await axios({
        method: 'post',
        url: 'https://assignment.servepratham.com/api/auth/otp/login',
        data: form
      })
      toast.success('Signup Successfull!!')
      router.push('/auth/login')
      setLoading(false)
    } catch(error) {
      toast.error('Incorrect Otp!!')
      setLoading(false)
    }
  }
  return (
    <div className={`${mode == "dark" && "dark"} h-full`}>
      <div className="flex justify-center items-center h-full">
        <form onSubmit={otpStatus ? OtpVerification : CheckValidation} className="w-[100%] h-[80%] flex flex-col justify-center items-center p-5 ">
          <div className="flex flex-col w-[80%] px-4">
            <div id="heading" className='text-center py-3'>
              <span className="text-start text-4xl tracking-tighter">Sign Up</span>
            </div>
            <div className="flex flex-col gap-1 m-1">
                <label
                htmlFor="name"
                className="text-sm font-medium text-gray-600 my-1"
                >
                Name
                </label>
                <input
                type="text"
                className="bg-gray-100 w-full h-9 transition-all duration-500 rounded-3xl focus:outline-4 focus:outline-teal-200 focus:bg-white px-4 font-light text-sm text-gray-400 placeholder:text-gray-400"
                placeholder="Name"
                id="name"
                name="name"
                autoComplete="off"
                />
            </div>
            <div className="flex flex-col gap-1 m-1">
                <label
                htmlFor="email"
                className="text-sm font-medium text-gray-600 my-1"
                >
                Email
                </label>
                <input
                type="text"
                className="bg-gray-100 w-full h-9 transition-all duration-500 rounded-3xl focus:outline-4 focus:outline-teal-200 focus:bg-white px-4 font-light text-sm text-gray-400 placeholder:text-gray-400"
                placeholder="E-Mail"
                id="email"
                name="email"
                autoComplete="off"
                />
            </div>
          </div>
          <div className="flex flex-col md:grid grid-cols-2 md:gap-4 justify-center items-center w-[80%] px-4">
            <div className="flex flex-col gap-1 w-full m-1">
                <label
                htmlFor="dialing_code"
                className="text-sm font-medium text-gray-600 my-1"
                >
                  Dialing Code
                </label>
                <input
                className="bg-gray-100 w-full h-9 rounded-3xl focus:outline-4 transition-all duration-500 focus:outline-teal-200 focus:bg-white px-4 font-light text-sm text-gray-400 placeholder:text-gray-400"
                placeholder="Enter password"
                name="dialing_code"
                type="text"
                id="dialing_code"
                />
            </div>
            <div className="flex flex-col w-full gap-1 m-1">
                <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-600 my-1"
                >
                Mobile Number
                </label>
                <input
                  className="bg-gray-100 w-full h-9 rounded-3xl focus:outline-4 transition-all duration-500 focus:outline-teal-200 focus:bg-white px-4 font-light text-sm text-gray-400 placeholder:text-gray-400"
                  placeholder="Enter your phone number"
                  name="phone"
                  type="text"
                  id="phone"
                />
            </div>
            <div className="flex flex-col gap-1 w-full m-1">
                <label
                htmlFor="password"
                className="text-sm font-medium text-gray-600 my-1"
                >
                Password
                </label>
                <input
                  className="bg-gray-100 w-full h-9 rounded-3xl focus:outline-4 transition-all duration-500 focus:outline-teal-200 focus:bg-white px-4 font-light text-sm text-gray-400 placeholder:text-gray-400"
                  placeholder="Enter password"
                  name="password"
                  type="password"
                  id="password"
                />
            </div>
            <div className="flex flex-col w-full gap-1 m-1">
                <label
                htmlFor="password_confirmation"
                className="text-sm font-medium text-gray-600 my-1"
                >
                Confirm Password
                </label>
                <input
                className="bg-gray-100 w-full h-9 rounded-3xl focus:outline-4 transition-all duration-500 focus:outline-teal-200 focus:bg-white px-4 font-light text-sm text-gray-400 placeholder:text-gray-400"
                placeholder="Re-enter your password"
                name="password_confirmation"
                type="password"
                id="confirmPassword"
                />
            </div>
          </div>
          { otpStatus && <div className="w-full flex justify-center items-center">
          <div className="flex flex-col w-[50%] gap-1 m-1">
                <label
                htmlFor="otp"
                className="text-sm font-medium text-gray-600 my-1"
                >
                Enter Otp
                </label>
                <input
                className="bg-gray-100 w-full h-9 rounded-3xl focus:outline-4 transition-all duration-500 focus:outline-teal-200 focus:bg-white px-4 font-light text-sm text-gray-400 placeholder:text-gray-400"
                placeholder="Re-enter your password"
                onChange={(e)=>setOtp(e.target.value)}
                value={otp}
                name="otp"
                type="number"
                id="otp"
                />
            </div>
          </div>}
          <div className="w-full flex flex-col justify-center items-center my-4">
            <div id="switchAuth">
                <Link href={`/auth/${"login"}`}>
                <span className="hover:cursor-pointer text-sm font-medium text-gray-600">
                    Already have on Account? Login{" "}
                    <span className="underline">here</span>
                </span>
                </Link>
            </div>
            { !otpStatus ? <button
                type="submit"
                className="h-9 px-3.5 my-8 rounded bg-black text-white text-center transition-all duration-500 lg:hover:bg-neutral-700"
            >
                {loading ? 'Loading...' : 'Sign Up'}
            </button> : <button
                type="submit"
                className="h-9 px-3.5 my-8 rounded bg-black text-white text-center transition-all duration-500 lg:hover:bg-neutral-700"
            >
                {loading ? 'Loading...' : 'Verify'}
            </button>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;

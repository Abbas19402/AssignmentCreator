import React , { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link"; 
import useFetch from "../../hooks/useFetch";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const SignupForm = () => {
  const router = useRouter()
  const mode = useSelector((state) => state.mode.value);

  const [ user,setUser ] = useState(null)
  const [ loading , setLoading ] = useState(false)
  const [ otpStatus , setOtpStatus ] = useState(false)
  const [ otp , setOtp ] = useState(null)

  useEffect(()=>{},[otpStatus])

  const HandleSignup = async e => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    let values = {}
    for(var entry of form.entries()) {
        values[entry[0]] = entry[1]
    }
    console.log(values);
    let options ={
      data: values
    }
    const { response , isLoading } = await useFetch('post',`${process.env.NEXT_PUBLIC_API_URL}/customer/signup`,options)
    setUser(response.data)
    setLoading(isLoading)
    setUser(response.data.data.user)
    CreateOtp(values , response.data.data.access_token)
  }
  const CreateOtp = async( val , at) => {
    const form = new FormData();
    form.append('dialing_code',val.dialing_code)
    form.append('phone',val.phone)
    let options = {
      headers: {
        'Authorization' : `Bearer ${at}` 
      },
      data: form
    }
    console.log(options);
    const { response , isLoading } = await useFetch('post',`${process.env.NEXT_PUBLIC_API_URL}/auth/create/otp`,options)
    if(response.data.success) {
      setOtpStatus(true)
    } else {
      alert('Request Failed!!')
    }
  }
  const OtpVerification = async() => {
    const form = new FormData();
    form.append('user_id',user.id)
    form.append('otp',otp)
    let options = {
      data: form
    }
    console.log(options);
    const { response , isLoading } = await useFetch('post',`${process.env.NEXT_PUBLIC_API_URL}/auth/otp/login`,options)
    if(response.data.code == 200 ) {
      toast.success('Signup Successfull!!')
      router.push('/auth/login')
    } else {
      toast.error('Incorrect Otp!!')
    }
  }
  return (
    <div className={`${mode == "dark" && "dark"} h-full`}>
      <div className="flex justify-center items-center h-full">
        <form onSubmit={HandleSignup} className="w-[100%] h-[80%] flex flex-col justify-center items-center p-5 ">
          <div className="flex flex-col w-[80%] px-4">
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
                Sign Up
            </button> : <button
                onClick={()=>OtpVerification()}
                className="h-9 px-3.5 my-8 rounded bg-black text-white text-center transition-all duration-500 lg:hover:bg-neutral-700"
            >
                Verify
            </button>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;

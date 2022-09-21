import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link"; 
import axios from "axios";

const SignupForm = () => {
  const mode = useSelector((state) => state.mode.value);
  const handleSignup = async e => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    let values = {}
    for(var entry of form.entries()) {
        values[entry[0]] = entry[1]
    }
    let { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/customer/signup`,values)
    console.log(data);
  }
  return (
    <div className={`${mode == "dark" && "dark"} h-full`}>
      <div className="flex justify-center items-center h-full">
        <form onSubmit={handleSignup} className="w-[100%] h-[80%] flex flex-col justify-center items-center p-5 ">
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
                htmlFor="confirmPassword"
                className="text-sm font-medium text-gray-600 my-1"
                >
                Confirm Password
                </label>
                <input
                className="bg-gray-100 w-full h-9 rounded-3xl focus:outline-4 transition-all duration-500 focus:outline-teal-200 focus:bg-white px-4 font-light text-sm text-gray-400 placeholder:text-gray-400"
                placeholder="Re-enter your password"
                name="confirmPassword"
                type="password"
                id="confirmPassword"
                />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center my-4">
            <div id="switchAuth">
                <Link href={`/auth/${"login"}`}>
                <span className="hover:cursor-pointer text-sm font-medium text-gray-600">
                    Already have on Account? Login{" "}
                    <span className="underline">here</span>
                </span>
                </Link>
            </div>
            <button
                type="submit"
                className="h-9 px-3.5 my-8 rounded bg-black text-white text-center transition-all duration-500 lg:hover:bg-neutral-700"
            >
                Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;

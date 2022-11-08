import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Writers = ({ mode, data }) => {
  const loginStatus = useSelector((state)=> state.auth.loginStatus)
  return (
    <div className={`${mode == "dark" && "dark"} h-full`}>
      <div className="w-full h-80 overflow-y-visible hover:cursor-pointer flex flex-col justify-between items-center transition-all duration-300 hover:scale-105">
        <div className="h-full w-full bg-white rounded-lg shadow-xl flex flex-col justify-start items-center overflow-y-visible">
          <div className="relative w-full flex justify-center -top-7 rounded-full drop-shadow-xl">
            <Image
              src={data.logoSrc}
              alt="writer"
              layout="fixed"
              width={80}
              height={80}
              className={'relative rounded-full'}
            />
          </div>
          <div className="w-full flex flex-col gap-1 justify-center items-center relative -top-7 py-2">
            <div className="font-medium tracking-wide text-lg text-gray-600">
              {data.title}
            </div>
            <div className="text-gray-400 tracking-wide text-sm">
              {data.meta_tag}
            </div>
          </div>
          <div className="relative first-letter:w-full px-5 py-3 text-center leading-tight -top-7">
            <span className="dark:text-white text-sm text-gray-500">
              {data.short_description}
            </span>
          </div>
          
        </div>
        <Link href={loginStatus ? '/order/create-order' : '/auth/login'}>
          <button className="relative bottom-12 border p-1.5 w-24 text-center bg-primary-dark transition-all duration-300 hover:scale-x-110 rounded">
            <span className="text-white text-sm font-medium tracking-wide">Order Now</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Writers;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Image from "next/future/image";

import Form from "../../Components/Form";
import Styles from "../../styles/Home.module.css";

const Banner = ({data , universities}) => {
  const mode = useSelector((state) => state.mode.value);

  useEffect(() => { }, [mode]);
  return (
    <div
      id="banner"
      className={`${mode === "dark" && "dark"} overflow-hidden`}>
      <div className="h-fit lg:h-fit w-full  transition-all duration-500 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center lg:justify-between lg:px-16 xl:px-16 items-center lg:items-start h-full ">
          <div id="Animation" className="w-full h-full p-16 ">
            <div id="Head" className="text-center lg:text-start w-full">
              <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary tracking-wider">{"Assignment Creator".toUpperCase()}</span>
            </div>
          </div>
          <div className="w-full h-full flex 2xl:justify-end justify-center items-center scale-90 md:scale-100 mb-10">
            <Form.BannerForm />
          </div>
        </div>
      </div>
      {/* University Logos */}
      <div className="px-5 py-4">
        <ul className={`flex flex-row w-screen items-center justify-start shrink-0 gap-8 overflow-y-hidden overflow-x-auto ${Styles.customScroll}`} >
          {universities.map((item,key)=> (
            <li className="w-fit h-28 flex justify-center items-center shrink-0 overflow-hidden">
              <Image loader={()=>item.logoSrc} src={item.logoSrc} width={300} height={150}/>
            </li>
          ))}
          {universities.map((item,key)=> (
            <li className="w-fit h-28 flex justify-center items-center shrink-0 overflow-hidden">
              <Image loader={()=>item.logoSrc} src={item.logoSrc} width={300} height={150}/>
            </li>
          ))}
          {universities.map((item,key)=> (
            <li className="w-fit h-28 flex justify-center items-center shrink-0 overflow-hidden">
              <Image loader={()=>item.logoSrc} src={item.logoSrc} width={300} height={150}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Banner;
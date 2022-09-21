import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Animation from "../../public/Animations/lottieAssignment.json";
import { useSelector } from "react-redux";
import Form from "../Form";

const Banner = () => {
  const mode = useSelector((state) => state.mode.value);

  useEffect(() => { }, [mode]);
  return (
    <div
      id="banner"
      className={`${mode === "dark" && "dark"} overflow-hidden`}>
      <div className="h-[100vh] lg:h-[60vh]  w-full bg-slate-50 dark:bg-dark/80  transition-all duration-500">
        <div className="flex flex-col lg:flex-row justify-around items-center h-full ">
          <div id="Animation" className="w-auto lg:w-[30%] p-16">
            <Lottie animationData={Animation} loop={true} autoPlay />
          </div>
          <Form.BannerForm />
        </div>
      </div>
    </div>
  );
};

export default Banner;
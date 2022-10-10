import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Fade , Slide } from "react-slideshow-image";

import Image from "next/image";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import Form from "../../Components/Form";
import Styles from "../../styles/Home.module.css";
import "react-slideshow-image/dist/styles.css";

const Banner = ({ data, universities }) => {
  const mode = useSelector((state) => state.mode.value);

  useEffect(() => {}, [mode]);
  return (
    <div id="banner" className={`${mode === "dark" && "dark"} overflow-hidden`}>
      <div className="h-fit lg:h-fit w-full  transition-all duration-500 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center lg:justify-between lg:px-16 xl:px-16 items-center lg:items-start h-full ">
          <div id="Animation" className="w-full h-full p-16 ">
            <div id="Head" className="text-center lg:text-start w-full">
              <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary tracking-wider">
                {"Assignment Creator".toUpperCase()}
              </span>
            </div>
          </div>
          <div className="w-full h-full flex 2xl:justify-end justify-center items-center scale-90 md:scale-100 mb-10">
            <Form.BannerForm />
          </div>
        </div>
      </div>
      {/* University Logos */}
      <div className="w-full flex justify-center items-center my-5">
      <div className="w-[80%] py-3 hidden lg:block">
        <Slide
          slidesToScroll={1}
          canSwipe={false}
          slidesToShow={3}
          indicators={true}
          transitionDuration={600}
          prevArrow={
            <div>
              <span className="relative -left-10 bg-white rounded-full p-2 -z-10">
                <KeyboardArrowLeftIcon />
              </span>
            </div>
          }
          nextArrow={
            <div>
              <span className="relative -right-10 bg-white rounded-full p-2 -z-10">
                <KeyboardArrowRightIcon />
              </span>
            </div>
          }
        >
          {universities.map((item, key) => (
            <div
              key={key}
              className="h-64 rounded-md px-5 flex justify-center items-center"
            >
              <div className="w-[100%] h-full flex justify-center items-center">
                <Image loader={()=>item.logoSrc} src={item.logoSrc} width={300} height={150} layout="fixed"/>
              </div>
            </div>
          ))}
        </Slide>
      </div>
      <div className="w-[80%] py-3 hidden md:block lg:hidden">
        <Slide
          slidesToScroll={1}
          canSwipe={false}
          slidesToShow={2}
          indicators={true}
          transitionDuration={600}
          prevArrow={
            <div>
              <span className="relative -left-10 bg-white rounded-full p-2 -z-10">
                <KeyboardArrowLeftIcon />
              </span>
            </div>
          }
          nextArrow={
            <div>
              <span className="relative -right-10 bg-white rounded-full p-2 -z-10">
                <KeyboardArrowRightIcon />
              </span>
            </div>
          }
        >
          {universities.map((item, key) => (
            <div
              key={key}
              className="h-64 rounded-md px-5 flex justify-center items-center"
            >
              <div className="w-[100%] h-full flex justify-center items-center">
                <Image loader={()=>item.logoSrc} src={item.logoSrc} width={300} height={150} layout="fixed"/>
              </div>
            </div>
          ))}
        </Slide>
      </div>
      <div className="w-[80%] py-3 block md:hidden">
        <Fade
          slidesToScroll={1}
          canSwipe={false}
          slidesToShow={1}
          indicators={true}
          transitionDuration={600}
          prevArrow={
            <div>
              <span className="relative -left-10 bg-white rounded-full p-2 -z-10">
                <KeyboardArrowLeftIcon />
              </span>
            </div>
          }
          nextArrow={
            <div>
              <span className="relative -right-10 bg-white rounded-full p-2 -z-10">
                <KeyboardArrowRightIcon />
              </span>
            </div>
          }
        >
          {universities.map((item, key) => (
            <div
              key={key}
              className="h-64 rounded-md px-5 flex justify-center items-center"
            >
              <div className="w-[100%] h-full flex justify-center items-center">
                <Image loader={()=>item.logoSrc} src={item.logoSrc} width={300} height={150} layout="fixed"/>
              </div>
            </div>
          ))}
        </Fade>
      </div>
      </div>
    </div>
  );
};

export default Banner;

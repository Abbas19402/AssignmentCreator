import React from "react";
import Card from "../../Components/Card";
import { Slide , Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Testimonials = ({data}) => {
  return (
    <div className="relative bg-gray-50 flex flex-col justify-center items-center py-10">
      <div className="p-5 flex flex-row justify-center relative items-center gap-5 md:pl-16 my-4 lg:my-0 lg:pl-10 w-full"> 
        <span className="text-2xl lg:text-4xl tracking-tight leading-relaxed font-thin whitespace-nowrap">
          Our Testimonials
        </span>
        <div className="absolute right-0 my-auto px-2 hover:cursor-pointer">
          <span className="text-primary font-medium tracking-wide hover:underline">View All</span>
        </div>
      </div>
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
          {data.map((item, key) => (
            <div
              key={key}
              className="h-64 rounded-md px-5 flex justify-center items-center transition-all duration-300 ease-linear hover:scale-110"
            >
              <div className="w-[100%] h-full">
                <Card.TestimonialsCard testimonials={item}/>
              </div>
            </div>
          ))}{data.map((item, key) => (
            <div
              key={key}
              className="h-64 rounded-md px-5 flex justify-center items-center transition-all duration-300 ease-linear hover:scale-110"
            >
              <div className="w-[100%] h-full">
                <Card.TestimonialsCard testimonials={item}/>
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
          {data.map((item, key) => (
            <div
              key={key}
              className="h-64 rounded-md px-5 flex justify-center items-center"
            >
              <div className="w-[100%] h-full">
                <Card.TestimonialsCard testimonials={item}/>
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
          {data.map((item, key) => (
            <div
              key={key}
              className="h-64 rounded-md px-5 flex justify-center items-center"
            >
              <div className="w-[100%] h-full">
                <Card.TestimonialsCard testimonials={item}/>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default Testimonials;

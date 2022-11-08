import React from "react";
import { useSelector } from "react-redux";

import Image from "next/image"
import parse from "html-react-parser";

const Company = ({ content , query }) => {
  const mode = useSelector((state) => state.mode.value);
  
  return (
    <div className={`${mode == "dark" && "dark"}`}>
      <div className="relative h-fit border">
        <div className="w-full h-full">
            {content.data.map(item => ( item.slug == query.slug && <div className="flex flex-col justify-center items-center">
                <div className="relative flex justify-center w-screen h-[50vh]">
                    <Image src={`${item.bannerImageSrc}`} alt={item.name} className="w-full h-full" layout="fill"/>
                </div>
                <div className="flex flex-col justify-center items-center p-8 lg:p-16">
                  <div id="Heading" className="w-full my-3 px-4">
                      <span className="text-2xl md:text-3xl lg:text-4xl text-start">{item.title}</span>
                  </div>
                  <p className="text-justify p-4 text-xl">{parse(item.description)}</p>
                </div>
            </div>))}
        </div>
      </div>
    </div>
  );
};

export default Company;

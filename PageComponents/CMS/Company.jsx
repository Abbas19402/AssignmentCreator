import React from "react";
import { useSelector } from "react-redux";

import Image from "next/image"
import parse from "html-react-parser";

const Company = ({ content , query }) => {
  const mode = useSelector((state) => state.mode.value);
  
  return (
    <div className={`${mode == "dark" && "dark"}`}>
      <div className="relative lg:p-5 h-fit">
        <div className="w-full h-full">
            {content.data.map(item => ( item.slug == query.slug && <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center my-5  w-full h-full">
                    <img src={`${item.bannerImageSrc}`} alt={name} className="w-screen h-[50vh]"/>
                </div>
                <div id="Heading" className="w-full my-3 px-4">
                    <span className="text-2xl md:text-3xl lg:text-4xl text-start">{item.title}</span>
                </div>
                <p className="text-justify p-4 text-xl">{parse(item.description)}</p>
            </div>))}
        </div>
      </div>
    </div>
  );
};

export default Company;

import React from "react";
import { Rating } from "@mui/material";
import parse from 'html-react-parser'

const Writers = ({ mode , data }) => {
  return (
    <div className={`${mode == "dark" && "dark"} `}>
      <div className="w-[100%] border border-gray-300 dark:border-gray-300 rounded-md hover:scale-105 transition-all duration-300 bg-white dark:bg-dark/80 min-h-[35vh]">
        <div className="flex flex-col justify-between items-center h-full">
          <div id="Avatar" className="w-full h-full p-2 flex flex-row justify-around">
            <div className="w-[50%] h-20 rounded-md border-gray-500 dark:border-white">
              <img
                src={data.logoSrc}
                alt="writer"
                className="h-20 w-[100%] bg-cover border rounded-md"
              />
            </div>

            <div
              id="NameRating"
              className="flex flex-col w-[70%] justify-center ml-3"
            >
              <div
                id="name"
                className="text-sm text-gray-700 dark:text-white font-medium"
              >
                {data.title}
              </div>
              <div
                id="name"
                className="mt-2 text-sm text-gray-700 dark:text-white font-medium"
              >
                Details
              </div>
            </div>
          </div>
          <div id="DescriptionAndOthers" className="w-full p-2">
            <div className="text-justify">
              <span className="dark:text-white text-sm text-gray-800 text-justify">
                {data.short_description}
              </span>
            </div>
          </div>
          <div id="Buttons" className="w-full h-fit p-2">
            <div className="flex flex-row justify-start gap-3">
              <button
                type="submit"
                className="bg-primary dark:bg-white hover:bg-primary-dark rounded transition-all duration-300 p-2 px-4 w-fit"
              >
                <span className="text-white font-bold tracking-wider text-sm dark:text-black">
                  Download PDF
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Writers;

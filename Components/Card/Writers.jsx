import React from "react";
import { Rating } from "@mui/material";

const Writers = ({ mode }) => {
  return (
    <div className={`${mode == "dark" && "dark"} `}>
      <div className="w-[100%] border border-gray-300 dark:border-gray-300 rounded-md hover:scale-105 transition-all duration-300 bg-white dark:bg-dark/80">
        <div className="flex flex-col">
          <div id="Avatar" className="w-full  p-2 flex flex-row justify-around">
            <div className="w-[50%] h-20 rounded-md border-gray-500 dark:border-white">
              <img
                src="https://images.pexels.com/photos/851213/pexels-photo-851213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                Writer Name
              </div>
              <div
                id="name"
                className="mt-2 text-sm text-gray-700 dark:text-white font-medium"
              >
                Details
              </div>
              <div
                id="rating"
                className="mt-2 text-sm text-gray-700 font-medium"
              >
                <Rating name="read-only" value={3} readOnly size="small" />
              </div>
            </div>
          </div>
          <div id="DescriptionAndOthers" className="w-full p-2">
            <div className="text-justify">
              <span className="dark:text-white text-sm text-gray-800 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates sit nesciunt minus inventore ab? Odit expedita modi
                animi fuga! Voluptas nisi vitae omnis sunt impedit quibusdam
                temporibus placeat quo consequatur.
              </span>
            </div>
          </div>
          <div id="Buttons" className="w-full p-2">
            <div className="flex flex-row justify-around gap-3">
              <button
                type="submit"
                className="bg-primary dark:bg-white hover:bg-primary-dark rounded transition-all duration-300 p-2 px-4 w-[50%]"
              >
                <span className="text-white font-bold tracking-wider text-sm dark:text-black">
                  Hire
                </span>
              </button>
              <div className="w-[50%] h-10 border-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Writers;

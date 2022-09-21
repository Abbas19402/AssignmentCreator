import React from "react";

const Writers = ({mode}) => {
  return (
    <div className={`${mode == 'dark' && 'dark'} `}>
      <div className="w-[100%] border-2 border-black dark:border-white rounded-md hover:scale-105 transition-all duration-300 bg-white dark:bg-dark/80">
        <div className="flex flex-col">
          <div
            id="Avatar"
            className="w-full  p-2 flex flex-row justify-around    "
          >
            <div className="w-[20%] h-20 border border-black dark:border-white"></div>
            <div id="NameRating" className="flex flex-col w-[70%]">
              <div id="name"></div>
              <div id="rating"></div>
            </div>
          </div>
          <div id="DescriptionAndOthers" className="w-full p-2">
            <div className="text-justify">
              <span className="dark:text-white">
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
                className="bg-black dark:bg-white hover:bg-neutral-700 rounded transition-all duration-300 p-2 px-4 w-[50%]"
              >
                <span className="text-white tracking-wider text-base dark:text-black">
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

import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";

const Footer = () => {
  const SSR = useSelector((state) => state.ssr.ssrData);
  const { cat, subWithCat, cms } = SSR;
  return (
    <div className="relative bg-dark/90 w-full h-[70vh] flex justify-center items-center">
      <div className="flex flex-col justify-start items-center w-[80%] h-full">
        {/* Links */}
        <div className="w-full h-full border border-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10 text-gray-300 py-5">
            <div className="flex flex-col justify-start gap-4">
              <div className="w-full text-start px-2">
                <span className="text-xl font-medium tracking-wide text-white">
                  Top Assignment Searches
                </span>
              </div>
              <ul className="w-full text-start px-2">
                {cat.data.map((item, key) => (
                  <li key={key}>
                    <span className="text-sm hover:text-primary hover:cursor-pointer tracking-wider leading-6">
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-start gap-4">
              <div className="w-full text-start px-2">
                <span className="text-xl font-medium tracking-wide text-white">
                  Assignment by countries
                </span>
              </div>
              <ul className="w-full text-start px-2">
                <li>
                  <span className="text-sm text-center hover:text-primary hover:cursor-pointer tracking-wider leading-6">
                    India
                  </span>
                </li>
                <li>
                  <span className="text-sm text-center hover:text-primary hover:cursor-pointer tracking-wider leading-6">
                    United States of America
                  </span>
                </li>
                <li>
                  <span className="text-sm text-center hover:text-primary hover:cursor-pointer tracking-wider leading-6">
                    Canada
                  </span>
                </li>
                <li>
                  <span className="text-sm text-center hover:text-primary hover:cursor-pointer tracking-wider leading-6">
                    United Kingdom
                  </span>
                </li>
                <li>
                  <span className="text-sm text-center hover:text-primary hover:cursor-pointer tracking-wider leading-6">
                    New Zealand
                  </span>
                </li>
                <li>
                  <span className="text-sm text-center hover:text-primary hover:cursor-pointer tracking-wider leading-6">
                    Malaysia
                  </span>
                </li>
                <li>
                  <span className="text-sm text-center hover:text-primary hover:cursor-pointer tracking-wider leading-6">
                    United States of America
                  </span>
                </li>
                <li>
                  <span className="text-sm text-center hover:text-primary hover:cursor-pointer tracking-wider leading-6">
                    United Arab Emirates
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-start gap-4">
              <div className="w-full text-start px-2">
                <span className="text-xl font-medium tracking-wide text-white">
                  Our Company
                </span>
              </div>
              <ul className="w-full text-start px-2">
                {cms.data.map(
                  (value, key) =>
                    value.title == "Company" &&
                    value.children.map((item) => (
                      <li
                        key={key}
                        onClick={() =>
                          router.push(`/${`company`}/${item.title}`)
                        }
                      >
                        <span className="text-sm text-center hover:text-primary hover:cursor-pointer tracking-wider leading-6">
                          {item.title}
                        </span>
                      </li>
                    ))
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Policies */}
        <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center w-full h-full"></div>

        {/* Copyright */}
        <div className="flex justify-start items-end w-full h-full"></div>
      </div>
    </div>
  );
};

export default Footer;

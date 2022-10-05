import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import Icon from "../Icons";

const Footer = () => {
  const SSR = useSelector((state) => state.ssr.ssrData);
  const { cat, subWithCat, company } = SSR;
  return (
    <div className="relative bg-gray-800 w-full flex justify-center items-center py-3">
      <div className="flex flex-col justify-start items-center w-[90%] h-fit divide-y divide-gray-400">
        {/* Links */}
        <div className="w-full h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-around w-full  text-gray-300 py-5">
            <div className="flex flex-col justify-start gap-4">
              <div className="w-full text-start">
                <span className="text-xl font-medium tracking-wide text-white">
                  Top Assignment Searches
                </span>
              </div>
              <ul className="w-full text-start">
                {cat.data.map(
                  (item, index) =>
                    index < 8 && (
                      <li>
                        <span className="text-sm hover:text-primary hover:cursor-pointer tracking-wider leading-6">
                          {item.name}
                        </span>
                      </li>
                    )
                )}
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
                {company?.data.children.map((item, key) => (
                  <li
                    key={key}
                    onClick={() => router.push(`/${`company`}/${item.title}`)}
                  >
                    <span className="text-sm text-center hover:text-primary hover:cursor-pointer tracking-wider leading-6 capitalize">
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-start gap-4">
              <div className="w-full text-start px-2">
                <span className="text-xl font-medium tracking-wide text-white">
                  Social Media
                </span>
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <IconButton sx={{ color: "gray" }}>
                  <Icon.Instagram />
                </IconButton>
                <IconButton sx={{ color: "gray" }}>
                  <Icon.Facebook />
                </IconButton>
                <IconButton sx={{ color: "gray" }}>
                  <Icon.LinkedIn />
                </IconButton>
                <IconButton sx={{ color: "gray" }}>
                  <Icon.Pinterest />
                </IconButton>
              </div>
            </div>
          </div>
        </div>

        {/* Policies */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full h-full py-3">
          <div className="flex flex-row justify-start items-center divide-x">
            {[...Array(6)].map((_, key) => (
              <div
                key={key}
                className={`flex justify-center ${
                  key == 0 ? "pr-2" : key == 5 ? "pl-2" : "px-2"
                } w-full`}
              >
                <span className="tracking-wider text-sm  text-gray-400">
                  Hello
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-row justify-start items-center divide-x">
            {[...Array(6)].map((_, key) => (
              <div
                key={key}
                className={`flex justify-center ${
                  key == 0 ? "pr-2" : key == 5 ? "pl-2" : "px-2"
                } w-full`}
              >
                <span className="tracking-wider text-sm  text-gray-400">
                  Hello
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-start items-end w-full h-full py-2">
          <div className="w-full text-gray-300 text-sm">
            <span>
              Disclaimer : Assignment Creator offers custom assignment writing
              help to the students along with proofreading and editing services.
              We provide references of reliable resources which are for
              knowledge purpose only and cannot be used for direct submission in
              university.
            </span>
          </div>
          <div className="flex flex-row justify-start items-center w-full my-2">
            <span className="text-white text-sm">
              © Copyright 2022 @ Assignment Creator. All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

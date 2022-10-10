import React from "react";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import parse from "html-react-parser";
import Link from "next/link";

import Icon from '../Icons'

const Writers = ({ mode, data }) => {
  console.log(data);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <div className={`${mode == "dark" && "dark"} h-full`}>
      <div className="w-[100%] border-2 border-gray-300 dark:border-gray-300 rounded-md hover:border-primary transition-all duration-300 bg-white dark:bg-dark/80 min-h-[30vh]  h-full">
        <div className="h-full w-full flex flex-col justify-between items-center">
          <div className="h-full flex flex-col justify-start items-center">
            <div
              id="Avatar"
              className="w-full  p-2 flex flex-row justify-around"
            >
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
                  {data.meta_tag}
                </div>
                {/* <div
                  id="rating"
                  className="mt-2 text-sm text-gray-700 font-medium"
                >
                  <Rating name="read-only" value={3} readOnly size="small" />
                </div> */}
              </div>
            </div>
            <div id="DescriptionAndOthers" className="w-full p-2">
              <div className="text-justify">
                <span className="dark:text-white text-sm text-gray-800 text-justify">
                  {data.short_description}
                </span>
              </div>
            </div>
          </div>
          <div id="Buttons" className="w-full p-2 flex flex-row justify-between items-center gap-4">
            <div className="flex flex-row justify-start gap-3">
              <Link download={`${data.pdfSrc}`} href={`${data.pdfSrc}`}>
                <button
                  type="submit"
                  className="bg-primary dark:bg-white hover:bg-primary-dark rounded transition-all duration-300 p-1.5 px-4 w-fit flex justify-around items-center gap-2"
                >
                  <Icon.Download className="fill-white scale-90"/>
                  <span className="text-white font-bold tracking-wider text-sm dark:text-black">
                    PDF 
                  </span>
                </button>
              </Link>
            </div>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                  Subjects
                  <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {data.subject.map((subjectDetail,key) => (
                      <Menu.Item key={key}>
                        {({ active }) => (
                          <div
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            {subjectDetail.name}
                          </div>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Writers;

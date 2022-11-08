import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import Link from "next/link";
import axios from "axios";

import { GET_ALL_ORDERS } from "../../Redux/Order";
import Table from "../Table";
import Animation from "../../public/Animations/NoLogin.json";
import Lottie from "lottie-react";
import BottomPagination from "../Pagination/BottomPagination";


const MyOrdersComponent = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const loginStatus = useSelector((state) => state.auth.loginStatus);
  const page = useSelector((state)=> state.myOrders.page)
  const data = useSelector((state) => state.order.myOrders)

  return (
    data !== null && <div className="w-full h-full relative md:p-8">
      {loginStatus ? (
        <>
          <div className="w-full h-32 relative">
            <div className="text-serif text-4xl md:text-5xl lg:text-6xl flex justify-center items-center h-full">
              <span>My Orders</span>
            </div>
            <div className="absolute right-0 top-0 h-full w-44">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                    Select Page
                    <ChevronDownIcon
                      className="-mr-1 ml-2 h-5 w-5"
                      aria-hidden="true"
                    />
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
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-fit h-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1 h-full overflow-y-auto">
                      {data !== null && [...Array(data.total)].map((_, index)=> (
                        index < 10 && <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={()=>setPage(index+1)}
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {index+1}
                            </button>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
          <div className="px-3 md:px-6 lg:px-20">
            <Table.Orders />
          </div>
        </>
      ) : (
        <div className="w-full h-screen flex justify-center items-start">
          <div className="flex flex-col items-start justify-start w-fit">
            <div className="w-fit h-fit">
              <Lottie
                className="h-[65vh] w-[65vh]"
                animationData={Animation}
                loop={true}
              />
            </div>
            <div className="flex flex-row gap-3 justify-center items-center w-full">
              <Link href={"/auth/login"} className="hover:cursor-pointer">
                <div className="p-2 bg-gray-300 text-gray-700">
                  <span className="text-xl tracking-wider uppercase">
                    Login
                  </span>
                </div>
              </Link>
              <span className="text-xl tracking-wider text-gray-600">
                to view your orders
              </span>
            </div>
          </div>
        </div>
      )}
      {console.log(data)}
      <BottomPagination data={data}/>
    </div>
  );
};

export default MyOrdersComponent;

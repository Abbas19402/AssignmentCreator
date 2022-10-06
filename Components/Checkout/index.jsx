import React, { useState } from "react";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import Icon from "../Icons/index";
import Divider from "@mui/material/Divider";
import { useSelector } from "react-redux";

const CheckoutComponent = () => {
    const createOrderDetails = useSelector(
        (state) => state.order.createOrderData
      );
      const SSR = useSelector((state) => state.ssr.ssrData);
    
      const { cat, subWithCat } = SSR;
      const { category_id, subject_id, deadline, number_of_pages, total } =
        createOrderDetails.data;
    
      const [couponShow, setCounShow] = useState(false);
    
      console.log(createOrderDetails);
  return (
    <div className="flex justify-center my-8 items-center">
        <Card className="w-[100%] lg:w-[50%] md:w-[80%] h-auto border-2 rounded-lg p-8">
          <CardContent>
            <div>
              <div className="flex flex-col justify-around gap-6 items-center text-2xl text-center font-medium">
                <span className="tracking-wider text-3xl">Order Summary</span>
                <ul className="flex flex-col justify-start items-center w-full gap-3">
                  <li className="flex flex-row w-full justify-between items-center">
                    <span className="tracking-wide text-base font-bold">
                      Service:
                    </span>
                    {cat.data.map(
                      (item, key) =>
                        item.id == category_id && (
                          <span key={key} className="text-base ">{item.name}</span>
                        )
                    )}
                  </li>
                  <li className="flex flex-row w-full justify-between items-center">
                    <span className="tracking-wide text-base font-bold">
                      Subject:
                    </span>
                    {subWithCat.data.map(
                      (item) =>
                        item.id == subject_id && (
                          <span className="text-base ">{item.name}</span>
                        )
                    )}
                  </li>
                  <li className="flex flex-row w-full justify-between items-center">
                    <span className="tracking-wide text-base font-bold">
                      Pages:
                    </span>
                    <span className="text-base">{number_of_pages}</span>
                  </li>
                  <li className="flex flex-row w-full justify-between items-center">
                    <span className="tracking-wide text-base font-bold">
                      Deadline:
                    </span>
                    <span className="text-base">{deadline}</span>
                  </li>
                 
                  <li className="flex flex-row w-full justify-between items-center">
                    <span className="tracking-wide text-base font-bold">
                      Subtotal:
                    </span>
                    <span className="text-base">${total}</span>
                  </li>
                </ul>
              </div>

              <div className="mb-4 mt-6">
                <Divider />
              </div>

              <div className="flex justify-between mt-6">
                <div className="flex justify-between items-center gap-2 font-medium text-lg">
                  <Icon.Coupon /> Apply Coupn
                </div>
                <div>
                  <button className=" font-medium border-2 border-slate-700 text-primary-dark rounded-md p-2">
                    Get Coupons
                  </button>
                </div>
              </div>

              <div className="mt-3">
                {couponShow ? (
                  <p className="text-gray-400 font-bold text-lg">
                    Empty Coupons
                  </p>
                ) : (
                  <div className="flex flex-col">
                    <ul>
                      {[...Array(5)].map((_, index) => (
                        <li
                          key={index}
                          className="mt-2 flex justify-between items-center font-medium"
                        >
                          Coupon List
                          <button className="border-2 text-slate-800 font-medium border-dark p-1 text-sm rounded-md">
                            Select
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="mt-6 font-medium">Payment mothods</div>

              <div className="mt-6">
                <button className="text-white bg-black border-2 p-4 w-full font-medium text-lg border-slate-700 rounded-md ">
                  Check out
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
  )
}

export default CheckoutComponent 
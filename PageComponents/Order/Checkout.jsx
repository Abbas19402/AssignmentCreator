import React, { useState } from "react";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import Icon from "../../Components/Icons";
import Divider from "@mui/material/Divider";

const Checkout = () => {
  const [couponShow, setCounShow] = useState(false);

  return (
    <div className="bg-white w-full h-full">
      <div className="flex justify-center my-8 items-center">
        <Card className="w-[100%] lg:w-[50%] md:w-[80%] h-auto border-2 rounded-lg p-8">
          <CardContent>
            <div>
              <div className="text-2xl text-center font-medium">
                Order Summary
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
    </div>
  );
};

export default Checkout;

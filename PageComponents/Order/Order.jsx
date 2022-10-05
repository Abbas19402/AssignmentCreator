import React from "react";
import { useSelector } from "react-redux";

import Form from "../../Components/Form";

const Order = () => {
  const mode = useSelector((state) => state.mode.value);

  return (
    <div className={`${mode == "dark" && "dark"}`}>
      <div
        id="container"
        className="bg-slate-50 dark:bg-dark/80 h-fit px-2 md:px-8 lg:px-32 flex flex-col justify-start items-center"
      >
        <div className="text-center text-5xl  w-full h-[10vh] ">
          <div className="flex justify-center items-center bg-inherit h-full w-full ">
            <div className="dark:text-white text-gray-700 text-4xl md:text-5xl lg:text-5xl">
              Order
            </div>
          </div>
        </div>
        <div className="md:p-16 flex flex-col justify-around items-center w-[80%] h-full gap-8">
          <div id="Form" className="w-full lg:w-[100%] h-full">
            <Form.OrderForm />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Order;

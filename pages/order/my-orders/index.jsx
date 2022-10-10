import React, { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import MyOrders from "../../../PageComponents/Order/MyOrders";
import { useSelector } from "react-redux";

const OrderList = () => {

  return (
    <div className="relative p-5">
      <MyOrders />
    </div>
  );
};

export default OrderList;

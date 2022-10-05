import React from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
const Checkout = () => {
  const createOrderDetails = useSelector( state => state.order.createOrderData )
  console.log(createOrderDetails);

  return (
    <div>OrderCheckout</div>
  )
}

export default Checkout
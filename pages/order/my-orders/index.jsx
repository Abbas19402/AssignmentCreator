import React from 'react'
import useFetch from '../../../hooks/useFetch'

const OrderList = () => {
  const getMyOrders = async() => {
    const header = {
      "Accept" : "application/json",
      "Authorization" : `Bearer ${access_token}`
    }
    await useFetch('get','My-Orders','',header).then( res => {
      console.log(response)
    } )
  }
  return (
    <div> OrderList </div>
  )
}

export default OrderList
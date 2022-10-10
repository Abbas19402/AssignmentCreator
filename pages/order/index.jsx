import React , { useState , useEffect } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../../hooks/useFetch'

import Order from '../../PageComponents/Order/Order'

const OrderPage = (props) => {
  const mode = useSelector( state => state.mode.value )

  const getMyOrders = async() => {
    const header = {
      "Accept" : "application/json",
      "Authorization" : `Bearer ${access_token}`
    }
    await useFetch('get','My-Orders','',header).then( res => {
      console.log(response)
    } )
  }

  useEffect(()=> {},[mode])
  return (
    <div className={`${mode == 'dark' && 'dark'}`}>
      <div className="w-full h-full">
        <Order />
      </div>
    </div>
  )
}

export default OrderPage
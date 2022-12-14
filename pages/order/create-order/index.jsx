import React , { useState , useEffect } from 'react'
import { useSelector } from 'react-redux'

import Order from '../../../PageComponents/Order/Order'

const OrderPage = (props) => {
  const mode = useSelector( state => state.mode.value )

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
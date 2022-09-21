import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import Banner from '../Components/Banner/Banner'

const Landing = () => {
  const dispatch = useDispatch()
  const [ isOpen , setOpen ] = useState(false)
  return (
    <div className='overflow-x-hidden scroll-smooth'>
      <Banner />
    </div>
  )
}

export default Landing
import React, { useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'

import axios from 'axios'

import { GET_ALL_ORDERS } from '../Redux/Order'
import TalkExpert from './Childs/TalkExpert'
import Banner from './Childs/Banner'
import ServiceOffered from './Childs/ServiceOffered'
import WorkProcess from './Childs/WorkProcess'
import Testimonials from './Childs/Testimonials'

const Landing = ({ home }) => {
  const dispatch = useDispatch()
  
  const mode = useSelector((state) => state.mode.value);
  const page = useSelector((state) => state.myOrders.page)
  const userData = useSelector((state) => state.auth.user)

  const { access_token } = userData

  const getOrders = async() => {
    await axios.get(`https://assignment.servepratham.com/api/My-Orders?page=${page}`,{
      headers: {
        'Authorization': `Bearer ${access_token}`
      }
    })
      .then((res) => {
        dispatch(GET_ALL_ORDERS(res));
      });
  }

  useEffect(()=> {
    getOrders()
  },[])
  return (
    <div className='overflow-x-hidden scroll-smooth'>
      <div className={`${mode == 'dark' && 'dark'}`}>
        {home && <div className='bg-slate-50 dark:bg-dark/80'>
          <Banner data={home.banners} universities={home.universities}/>  
          <TalkExpert data={home.whyAssignment}/>
          <ServiceOffered />
          <WorkProcess />
          <Testimonials data={home.testimonial} />
        </div>}
      </div>
    </div>
  )
}

export default Landing
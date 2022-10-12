import React, { useEffect, useState } from 'react'
import TalkExpert from './Childs/TalkExpert'
import { useDispatch } from 'react-redux'
import Banner from './Childs/Banner'
import {useSelector} from 'react-redux'
import ServiceOffered from './Childs/ServiceOffered'
import WorkProcess from './Childs/WorkProcess'
import Testimonials from './Childs/Testimonials'
import useFetch from '../hooks/useFetch'

const Landing = ({home}) => {
  const mode = useSelector((state) => state.mode.value);
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
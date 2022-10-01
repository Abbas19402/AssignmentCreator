import React, { useEffect, useState } from 'react'
import TalkExpert from './Childs/TalkExpert'
import { useDispatch } from 'react-redux'
import Banner from './Childs/Banner'
import {useSelector} from 'react-redux'
import ServiceOffered from './Childs/ServiceOffered'
import WorkProcess from './Childs/WorkProcess'

const Landing = () => {
  const mode = useSelector((state) => state.mode.value);
  const dispatch = useDispatch()
  const [ isOpen , setOpen ] = useState(false)
  return (
    <div className='overflow-x-hidden scroll-smooth'>
      <div className={`${mode == 'dark' && 'dark'}`}>
        <div className='bg-slate-50 dark:bg-dark/80'>
          <Banner />
          <TalkExpert />
          <ServiceOffered />
          <WorkProcess />
        </div>
      </div>
    </div>
  )
}

export default Landing
import React from 'react'
import Writers from '../../PageComponents/Writers/Writers'
import { useDispatch , useSelector } from 'react-redux'
import { useEffect } from 'react'

const WritersContent = () => {
  const dispatch = useDispatch()
  const mode = useSelector(state => state.mode.value)
  useEffect(()=> {}, [mode])
  return (
    <div className={`relative ${mode == 'dark' ? 'dark' : 'light'}`}>
      <div className="font-thin text-6xl underline dark:bg-dark/80 bg-white p-5">
        <span className='dark:text-white text-sky-800'>Our Writers</span>
      </div>
      <Writers/>
    </div>
  )
}

export default WritersContent


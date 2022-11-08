import React from 'react'
import Card from '../../Components/Card'
import { useDispatch , useSelector } from 'react-redux'

const Writers = ({ writers }) => {
  const dispatch = useDispatch()

  const mode = useSelector(state => state.mode.value)

  return (
    <div className={`w-screen h-auto ${mode == 'dark' ? 'dark' : 'light'}`}>
      <div className="text-center text-5xl bg-gray-50 py-3">
        <span className="dark:text-white text-gray-700">Our Writers</span>
      </div>
        <div id="wrapper" className='w-full p-8 dark:bg-dark bg-gray-50'>
            <ul className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full md:p-4 lg:p-10 '>
                {writers.data.map((item,index) => (
                    <li key={index}>
                        <Card.Writers mode={mode} data={item}/>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Writers
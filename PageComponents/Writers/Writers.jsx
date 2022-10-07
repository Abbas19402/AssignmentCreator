import React from 'react'
import Card from '../../Components/Card'
import { useDispatch , useSelector } from 'react-redux'

const Writers = ({writers}) => {
  const dispatch = useDispatch()

  const mode = useSelector(state => state.mode.value)
  console.log(writers);

  return (
    <div className={`w-screen h-auto ${mode == 'dark' ? 'dark' : 'light'}`}>
        <div id="wrapper" className='w-full p-8 dark:bg-dark bg-white'>
            <ul className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full md:p-4 lg:p-10'>
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
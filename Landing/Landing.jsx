import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { setHamState } from '../Redux'
import { useDispatch } from 'react-redux'
import Banner from '../Components/Banner/Banner'

const Landing = () => {
  const dispatch = useDispatch()
  const hamStatus  = useSelector( state =>  state.root.hamStatus )
  const [ isOpen , setOpen ] = useState(false)
  useEffect(()=> {
    console.log(hamStatus)
    if(hamStatus) {
      setOpen(true)
    } else { 
      setOpen(false)
    }
  },[hamStatus])
  return (
    <div className='overflow-x-hidden scroll-smooth'>
      <div id="topSheetComponent" className={`absolute top-0 transition-all duration-300 left-0 ${hamStatus? 'w-[100vw]' : 'w-[0vw]'} h-[100vh] bg-black/10 z-[10] overflow-hidden`}>
        <div id="actualSheet" className='w-[70%] h-full bg-primary-dark'>
          <div id="close" className='w-full h-[6vh] border-b-white border-b'>
            <div id="Heading" className="float-left h-full flex justify-center items-center px-2">
              <span className="text-2xl text-white font-light">Assignment Help</span>
            </div>
            <div className="float-right">
              {/* <Hamburger color='#ffffff' toggled={hamStatus == true} toggle={hamStatus == false}  onToggle={toggled => {
                if (toggled) {
                  // open a menu
                  dispatch(setHamState(true))
                } else {
                  // close a menu
                  dispatch(setHamState(false))
                }
              }} /> */}
            </div>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  )
}

export default Landing
import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { useDispatch, useSelector } from 'react-redux'
import { setDarkMode } from "../../Redux/DarkMode";
import { setHamState } from "../../Redux/DarkMode";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/future/image";
import Logo from '../../public/Assets/Logos/Header2.png'
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Header = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const mode = useSelector(state => state.mode.value)
  const [isOpen, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    console.log(mode)
    if (dark) {
      dispatch(setDarkMode(true))
    } else {
      dispatch(setDarkMode(false))
    }
  }, [dark]);

  // Static Dropdowns
  const Services = ['Thesis', "Essay", "CV", 'Assignments']
  const Company = ['About', 'Samples']

  // <---- Lignt / Dark mode Switch ---->
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));

  return (
    <div id="Navbar" className={`overflow-hidden h-20 ${dark ? 'dark' : 'light'}`}>
      <div
        id="wrapper"
        className="transition-all duration-500 w-full h-full dark:bg-primary-dark bg-primary flex flex-row justify-between md:justify-evenly items-center px-8 border-b-2 dark:border-b-0"
      >
        <div id="logo" className="rounded-md overflow-hidden">
          <Image src={Logo} alt="Assignment Help" className="scale-y-125 scale-x-125" width='300' height='460' onClick={() => router.push('/')} />
        </div>
        <div className="flex flex-row items-center justify-end">
          <div id="switch" className="md:hidden">
            <MaterialUISwitch
              sx={{ m: 1 }}
              defaultChecked
              checked={dark}
              onChange={() => setDark(!dark)}
            />
          </div>

          <div id="ham" className="md:hidden">
          </div>
          
        </div>
        <nav className="w-full hidden md:block">
          <ul className="flex flex-row justify-end items-center">
            <li>
              <MaterialUISwitch
                sx={{ m: 1 }}
                defaultChecked
                checked={dark}
                onChange={() => setDark(!dark)}
              />
            </li>
            <li className="group w-[8vw] md:w-[12vw] lg:w-[10vw] mx-2 hover:cursor-pointer">
              <div className="sticky mx-1 my-1 py-2 px-2 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg rounded dark:group-hover:bg-sky-400/40 group-hover:bg-sky-900/40">
                <div id="dropdown" className="flex flex-row justify-center items-center">
                  <span className="text-white font-medium  dark:text-white transition-all duration-300">
                    {/* <Trans i18nKey='Services'></Trans> */}
                    Services
                  </span>
                  <div id="dropdownIndicator" className="mx-2 rotate-90 justify-center items-end group-hover:-rotate-90 transition-all duration-300 text-white dark:text-white ">
                    <span>&#10095;</span>
                  </div>
                </div>
              </div>
              <div id="dropdownComponent" className="absolute transition-all h-0 group-hover:h-fit w-[8vw] md:w-[12vw] lg:w-[10vw] dark:bg-slate-200 bg-slate-50 shadow-xl shadow-gray-300 overflow-hidden z-10 rounded-b">
                <ul className="flex flex-col justify-evenly items-center">
                  {Services.map(item => <li className="py-2 px-4 hover:bg-sky-200 w-full" onClick={() => router.push(`/${`services`}/${item}`)}><span className="text-gray-600 text-sm text-center">{item}</span></li>)}
                </ul>
              </div>
            </li>
            <li className="group md:w-[15.5vw] lg:w-[10vw] md:mx-2 lg:mx-0 hover:cursor-pointer">
              <div className="mx-1 my-1 py-2 px-2 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg rounded dark:group-hover:bg-sky-400/40 group-hover:bg-sky-900/40">
                <div id="dropdown" className="flex flex-row justify-center items-center">
                  <span className="text-white font-medium dark:text-white  transition-all duration-300">
                    {/* <Trans i18nKey='Company'></Trans> */}
                    Company
                  </span>
                  <div id="dropdownIndicator" className="mx-2 rotate-90 justify-center items-end group-hover:-rotate-90 transition-all duration-300 text-white dark:text-white">
                    <span>&#10095;</span>
                  </div>
                </div>
              </div>
              <div id="dropdownComponent" className="absolute transition-all h-0 group-hover:h-fit w-[8vw] md:w-[12vw] lg:w-[10vw] dark:bg-slate-200 bg-slate-50 shadow-xl shadow-gray-300  overflow-hidden z-10 rounded-b">
                <ul className="flex flex-col justify-evenly items-center">
                  {Company.map(item => <li className="py-2 px-4 hover:bg-sky-200 w-full" onClick={() => router.push(`/${`company`}/${item}`)}><span className="text-gray-600 text-sm text-center">{item}</span></li>)}
                </ul>
              </div>
            </li>
            <Link href={'/writers'}>
              <li className="group w-[8vw] md:w-[15vw] lg:w-[10vw]">
                <div className="mx-2 my-1 py-2 px-2 transition-all duration-500 hover:scale-110 hover:shadow-lg rounded  dark:group-hover:bg-sky-400/40 group-hover:bg-sky-900/40  hover:cursor-pointer text-center">
                  <span className="text-white font-medium dark:text-white transition-all duration-300">
                    {/* <Trans i18nKey='OurWriters'></Trans> */}
                    Our Writers
                  </span>
                </div>
              </li>
            </Link>
            <Link href={'/order'}>
              <li className="w-[8vw] md:w-[10vw] group hover:cursor-pointer">
                <div className="mx-2 my-1 py-2 px-2 bg-white group-hover:bg-cyan-200 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg rounded-md text-center scale-105  group-hover:shadow-white dark:group-hover:shadow-lg dark:group-hover:shadow-sky-500">
                  <span className="text-black  group-hover:text-black/60 font-medium w-full h-full transition-all duration-300 ">
                    {/* <Trans i18nKey='Orders'></Trans> */}
                    Orders
                  </span>
                </div>
              </li>
            </Link>
            <Link href={'/auth/login'}>
              {/* <li className="group hover:cursor-pointer">
                <div className="mx-2 my-1 p-1.5 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg rounded-md text-center scale-105">
                  <span className="text-white group-hover:text-gray-200 font-medium w-full h-full transition-all duration-300 ">
                    
                    
                  </span>
                  <div id="dropdownComponent" className="absolute transition-all h-0 group-hover:h-56 w-[8vw] md:w-[12vw] lg:w-[10vw] dark:bg-slate-200 bg-black shadow-xl shadow-gray-300  overflow-hidden z-10 rounded-b">

                  </div>
                </div>
              </li> */}
              <li className="group md:mx-2 lg:mx-0 hover:cursor-pointer">
              <div className="mx-1 my-1 py-2 px-2 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg rounded dark:group-hover:bg-sky-400/40 group-hover:bg-sky-900/40">
                <div id="dropdown" className="flex flex-row justify-center items-center">
                  <span className="text-white font-medium dark:text-white  transition-all duration-300">
                    {/* <Trans i18nKey='Company'></Trans> */}
                    <AccountBoxIcon />
                  </span>
                </div>
              </div>
              <div id="dropdownComponent" className="absolute right-5 transition-all h-0 group-hover:h-fit w-[8vw] md:w-[12vw] lg:w-[10vw] dark:bg-slate-200 bg-slate-50 shadow-xl shadow-gray-300  overflow-hidden z-10 rounded">
                <ul className="flex flex-col justify-evenly items-center">
                  
                </ul>
              </div>
            </li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

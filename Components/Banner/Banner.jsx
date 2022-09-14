import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Animation from "../../public/Animations/lottieAssignment.json";
import { useSelector } from "react-redux";
import form from '../../Apis/BannerForm';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

const Banner = () => {
  const mode = useSelector((state) => state.root.value);
  const [toggleDropdown, setToggleDrowdown] = useState(false)
  const [dropdownKey, setDropdownKey] = useState('')  
  const [order, setOrder] = useState({})

  const handleCalculate = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    let values = {};
    for (var pair of form.entries()) {
      values[pair[0]] = pair[1];
    }
    e.target.reset();
    console.log(values)
    setOrder(values)
    setToggleDrowdown(!toggleDropdown)
    setDropdownKey('')
  }

  useEffect(() => { }, [mode]);
  return (
    <div
      id="banner"
      className={`${mode === "dark" && "dark"} overflow-hidden`}
    >
      <div className="h-[100vh] lg:h-[60vh]  w-full dark:bg-black/80 transition-all duration-500">
        <div className="flex flex-col lg:flex-row justify-around items-center h-full">
          <div id="Animation" className="w-auto lg:w-[50%] p-16">
            <Lottie animationData={Animation} loop={true} autoPlay />
          </div>
          <div id="CostCalculator" className="w-full lg:w-[50%] h-fit">
            <div className="transition-all duration-500 w-full lg:w-[80%] h-fit flex flex-col items-center justify-evenly py-5 border-2 shadow-xl scale-100">
              <div id="heading">
                <span className="text-2xl tracking-wide text-gray-600 dark:text-white">
                  {/* <Trans i18nKey='CalculateOrder'></Trans> */}
                  Calculate your Order
                </span>
              </div>
              <form onSubmit={handleCalculate} className='h-[90%] md:h-[50%] p-5 w-full'>
                <div id="form" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
                  {form.map((item, key) => (
                    <FormControl fullWidth  sx={{ minWidth: 120 }} size="small">
                      <InputLabel id="demo-select-small">{item.placeholder}</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        name={key === 0 ? 'assignment' : key === 1 ? 'subject' : key === 2 ? 'pages' : key === 3 && 'urgency'}
                        style = {{backgroundColor: 'white'}}
                        size="small"
                        label={item.placeholder}
                      >
                        <MenuItem value={10}>Lorem ipsum dolor sit amet.</MenuItem>
                        <MenuItem value={20}>Lorem ipsum dolor sit amet consectetur.</MenuItem>
                        <MenuItem value={30}>Lorem ipsum dolor sit.</MenuItem>
                      </Select>
                    </FormControl>
                  ))}
                </div>
                <div id="Button/Cost" className="w-full py-5">
                  <div id="wrapper" className="flex flex-row justify-around items-center h-full w-full">
                    <div>
                      <button type="submit" className="bg-black hover:bg-neutral-700 rounded transition-all duration-300 p-2">
                        <span className="text-white tracking-wider text-base ">Calculate</span>
                      </button>
                    </div>
                    <div id="Cost">
                      <span className="text-4xl font-light dark:text-white">$2000</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

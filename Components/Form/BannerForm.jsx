import React, { useState, useEffect } from "react";
import Select from "react-select";
import Creatable, { useCreatable } from 'react-select/creatable';
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";

import { Options } from "../../Constants/FormOptions";

const BannerForm = () => {
  let optionsServices = [];
  let optionsSubjects = [];

  const SSR = useSelector((state) => state.ssr.ssrData);
  const userData = useSelector((state) => state.auth.user)

  const { optionsDeadline , optionsPages , optionsSlides } = Options
  const { cat, subWithCat } = SSR;
  const { access_token } = userData


  const [ selectedService , setSeletedService ] = useState({})
  const [ subjects , setSubjects ] = useState([{
    value: 'Select any service',
    label: 'Select any service'
  }])
  const [ services , setServices ] = useState(null)
  const [ price , setprice ] = useState(0)
  const [ loading , setloading ] = useState(false)

  const HandleCalculate = async (e) => {
    setloading(true);
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    let values = {};
    for (var pair of form.entries()) {
      values[pair[0]] = pair[1];
    }
    console.log(values);  
    e.target.reset();
    const header = {
      Accept: "application/json",
      Authorization: `Bearer ${access_token}`,
    };
    await axios.post(`https://assignment.servepratham.com/api/Check-Price`).then(res => {
      setprice(res.data.data.total);
      setloading(false);
    }).catch(err => {
      console.log(err);
      toast.error('Please check you network!!')
    })
  };

useEffect( () => {
  cat.data.map(item => {
    optionsServices.push({value: item.slug , label: item.name , id: item.id})
  }) 
  setServices(optionsServices)
},[selectedService , cat])

  return (
    <div className="">
      <div
        id="CostCalculator"
        className="w-[100vw] lg:w-full flex justify-center h-full"
      >
        <div className="transition-all duration-500 w-[90%] md:w-[60%] lg:w-[100%] h-fit flex flex-col items-center justify-evenly p-8 shadow-xl rounded-lg bg-white dark:bg-white/20">
          <div id="heading" className="w-full text-center">
            <span className="text-2xl tracking-wide text-gray-600 dark:text-white">
              Calculate your Order
            </span>
          </div>
          <form
            onSubmit={HandleCalculate}
            className="h-[90%] md:h-[50%] w-full p-2"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3 mb-7">
              <div id="Type" className="flex flex-col gap-1 lg:w-[15vw]">
                <label
                  htmlFor="services"
                  className="text-gray-600 dark:font-gray-200 text-sm font-medium"
                >
                  Select Service
                </label>
                <Select
                  options={services}
                  name="services"
                  onChange={(e, action) => {
                    setSeletedService(e);
                    subWithCat.data.map((item) => {
                      if (e.id == item.category.id) {
                        optionsSubjects.push({
                          value: item.slug,
                          label: item.name,
                          id: item.id,
                        });
                      }
                      setSubjects(optionsSubjects);
                    });
                  }}
                  placeholder="Services"
                />
              </div>
              <div id="Subject" className="flex flex-col gap-1 lg:w-[15vw]">
                <label
                  htmlFor="subject"
                  className="text-gray-600 dark:font-gray-200 text-sm font-medium"
                >
                  Choose Subject
                </label>
                <Select
                  options={subjects}
                  name="subject"
                  placeholder="Subject"
                />
              </div>
              <div
                id="Pages/Slides"
                className="flex flex-col gap-1 lg:w-[15vw]"
              >
                <label
                  htmlFor="pages"
                  className="text-gray-600 dark:font-gray-200 text-sm font-medium"
                >
                  {selectedService.value == "powerpoint"
                    ? "Select No. of Slides"
                    : "Choose No. of Pages"}
                </label>
                <Creatable
                  options={
                    selectedService.value == "powerpoint"
                      ? optionsSlides
                      : optionsPages
                  }
                  name="pages"
                  placeholder={
                    selectedService.value == "powerpoint"
                      ? "Select Slides"
                      : "Select Pages"
                  }
                />
              </div>
              <div id="Deadline" className="flex flex-col gap-1 lg:w-[15vw]">
                <label
                  htmlFor="urgency"
                  className="text-gray-600 dark:font-gray-200 text-sm font-medium"
                >
                  Choose your Deadline
                </label>
                <Select
                  options={optionsDeadline}
                  name="urgency"
                  placeholder="Deadline"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-between gap-2">
              <div className="w-[50%] ">
                <button
                  type="submit"
                  className="bg-black hover:bg-neutral-700 w-full h-12 flex justify-center items-center rounded transition-all duration-300 p-2"
                >
                  <span className="text-white tracking-wider text-base">
                    {loading ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : (
                      "Calculate"
                    )}
                  </span>
                </button>
              </div>
              <div className="w-[50%] text-center">
                <span className="text-black text-2xl">${price}</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BannerForm;

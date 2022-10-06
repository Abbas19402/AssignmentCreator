import React, { useState } from "react";
import { useEffect } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import { useRouter } from "next/router";
import { useSelector , useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import Select from "react-select";
import toast from 'react-toastify'

import { SAVE_ORDER } from "../../Redux/Order";
import useFetch from "../../hooks/useFetch";
import useValid from "../../hooks/useValid";

import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

const OrderForm = () => {
  registerPlugin(
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview
  );

  const { push } = useRouter()
  const dispatch = useDispatch()
   
  let optionsServices = [];
  let optionsSubjects = [];

  const SSR = useSelector((state) => state.ssr.ssrData);
  
  const { cat, subWithCat } = SSR;

  const [files, setFiles] = useState(null);
  const [deadline, setDeadline] = useState(new Date());
  const [ formData , setFormData ] = useState({})
  const [selectedService, setSeletedService] = useState({});
  const [services, setServices] = useState(null);
  const [price, setprice] = useState(0);
  const [loading, setloading] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [subjects, setSubjects] = useState([
    {
      value: "Select any service",
      name: "Select any service",
    },
  ]);
  
  const optionsPages = [
    { value: 10, label: 10 },
    { value: 20, label: 20 },
    { value: 30, label: 30 },
    { value: 40, label: 40 },
    { value: 50, label: 50 },
    { value: 60, label: 60 },
  ];

  const optionsDeadline = [
    { value: "3", label: "3 Days" },
    { value: "5", label: "5 Days" },
    { value: "10", label: "10 Days" },
    { value: "15", label: "15 Days" },
    { value: "20", label: "20 Days" },
  ];

  const optionsSlides = [
    { value: "10", label: "10" },
    { value: "20", label: "20" },
    { value: "30", label: "30" },
    { value: "40", label: "40" },
  ];

  const dateFormatter = (date) => {
    var month = date.getMonth();
    if (month < 10) month = "0" + month;
    var dateOfMonth = date.getDate();
    if (dateOfMonth < 10) dateOfMonth = "0" + dateOfMonth;
    var year = date.getFullYear();
    var formattedDate = dateOfMonth + "-" + month + "-" + year;
    setDeadline(formattedDate);
  };

  const CheckValidation = (e) => {
    setloading(true)
    e.preventDefault()
    let uploads = [];
    files.map((fileItem) => {
      uploads.push(fileItem.file);
    });
    const form = new FormData(e.currentTarget);
    let values = {};
    for (var pair of form.entries()) {
      if (pair[0] == "file") {
        values[pair[0]] = uploads;
      } else if (pair[0] == "deadline") {
        values[pair[0]] = deadline;
      } else {
        values[pair[0]] = pair[1];
      }
    }
    setloading(true)
    const { emptyKeys , validationStatus } = useValid(values)
    if(validationStatus) {
        HandleSubmit(values)
    } else {
        toast.error(`${emptyKeys} required!!`)
        setloading(false)
    }
}

  const HandleSubmit = async (values) => {
    const header = {
      Accept: "application/json",
      Authorization: `${process.env.NEXT_PUBLIC_ASSIGNMENT_TOKEN}`,
    };
    const { response } = await useFetch(
      "post",
      `${process.env.NEXT_PUBLIC_API_URL}/Check-Price`,
      "",
      header
    );
    if (response.data.success) {
      setloading(false)
      setprice(response.data.data.total);
      setShowOrder(true)
      setloading(false);
    }
  };

  const CreateOrder = async(e) => {
    setloading(true)
    e.preventDefault()
    let uploads = [];
    files.map((fileItem) => {
      uploads.push(fileItem.file);
    });
    const form = new FormData(e.currentTarget);
    let values = {};
    form.append('total', price)
    form.append('payment_method' , 'Online')
    for (var pair of form.entries()) {
      if (pair[0] == "file") {
        values[pair[0]] = uploads;
      } else if (pair[0] == "deadline") {
        values[pair[0]] = deadline;
      } else {
        values[pair[0]] = pair[1];
      }
    }
    const header = {
      Accept: "application/json",
      Authorization: `${process.env.NEXT_PUBLIC_ASSIGNMENT_TOKEN}`,
    };
    const { response } = await useFetch('post',`${process.env.NEXT_PUBLIC_API_URL}/Order-Create`,values,header)
    console.log(response);
    if(response.data.success) {
      setloading(false)
      dispatch(SAVE_ORDER(response.data))
      push('/order/checkout')
    } else {
      toast.error('Error')
    }
  };

  useEffect(() => {
    cat.data.map((item) => {
      optionsServices.push({ value: item.id, label: item.name, id: item.id });
    });
    setServices(optionsServices);
  }, [selectedService, cat]);

  return (
    <div className="">
      <div id="form" className="p-5 py-8 shadow-xl rounded bg-white">
        <form onSubmit={showOrder ? CreateOrder : CheckValidation}>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-y-6 lg:gap-x-3 gap-3">
            <div id="Type" className="flex flex-col gap-1">
              <label
                htmlFor="category_id"
                className="text-gray-600 text-sm font-medium"
              >
                Select Service
              </label>
              <Select
                options={services}
                name="category_id"
                onChange={(e, action) => {
                  setSeletedService(e);
                  subWithCat.data.map((item) => {
                    if (e.id == item.category.id) {
                      optionsSubjects.push({
                        value: item.id,
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
            <div id="Subject" className="flex flex-col gap-1">
              <label
                htmlFor="subject_id"
                className="text-gray-600 text-sm font-medium"
              >
                Choose Subject
              </label>
              <Select
                options={subjects}
                name="subject_id"
                placeholder="Subject"
              />
            </div>
            <div id="Pages/Slides" className="flex flex-col gap-1">
              <label
                htmlFor="pages"
                className="text-gray-600 text-sm font-medium"
              >
                {selectedService.value == "powerpoint"
                  ? "Select No. of Slides"
                  : "Choose No. of Pages"}
              </label>
              <Select
                options={
                  selectedService.value == "powerpoint"
                    ? optionsSlides
                    : optionsPages
                }
                name="number_of_pages"
                placeholder={
                  selectedService.value == "powerpoint" ? "Slides" : "Pages"
                }
              />
            </div>
            <div id="Deadline" className="flex flex-col gap-1">
              <label
                htmlFor="deadline"
                className="text-gray-600 text-sm font-medium"
              >
                Choose your Deadline
              </label>
              <Select
                options={optionsDeadline}
                name="deadline"
                onChange={(e) => {
                  let d = new Date(
                    new Date().getTime() + e.value * 24 * 60 * 60 * 1000
                  );
                  dateFormatter(d);
                }}
                placeholder="Deadline"
              />
            </div>
          </div>
          <div id="description" className="w-full my-4 flex flex-col gap-1">
            <label
              htmlFor="description"
              className="text-gray-600 text-sm font-medium"
            >
              Specific Requirements
            </label>
            <textarea
              name="description"
              id="specificRequirement"
              rows={5}
              placeholder="Enter your specific requirement for your service"
              className="focus:outline-0 text-sm text-gray-500 placeholder:text-sm border border-gray-300 p-1 rounded w-full"
            ></textarea>
          </div>
          <div id="file" className="w-full my-2 flex flex-col gap-1">
            <label htmlFor="files" className="text-gray-600 text-sm font-medium">
              Upload Additional Files
            </label>
            <FilePond
              id="upload"
              type="file"
              files={files}
              onupdatefiles={setFiles}
              allowMultiple={true}
              maxFiles={3}
              acceptedFileTypes={[
                "png",
                "jpg",
                "jpeg",
                "pdf",
                "docx",
                "xlsx",
                "ppt",
                "jfif",
              ]}
              name="files"
              storeAsFile={true}
              labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            />
          </div>
          <div className="flex flex-row justify-around items-center h-full gap-8">
            {showOrder ? (
              <button
                type="submit"
                className="bg-black hover:bg-neutral-700 w-[60%] rounded transition-all duration-300 p-2"
              >
                <span className="text-white tracking-wider text-base ">
                  {loading ? <CircularProgress size={20} color="inherit" /> : "Create Order"}
                </span>
              </button>
            ) : (
              <button
                type="submit"
                className="bg-black hover:bg-neutral-700 w-[60%] rounded transition-all duration-300 p-2"
              >
                <span className="text-white tracking-wider text-base ">
                  {loading ? <CircularProgress size={20} color="inherit" /> : "Submit"}
                </span>
              </button>
            )}
            <div className="bg-primary w-[30%] h-full p-2 flex justify-center items-center rounded ">
              <p className="text-lg text-white tracking-wider">${price}</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
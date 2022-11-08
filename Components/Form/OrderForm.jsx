import React, { useState } from "react";
import { useEffect } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import { useRouter } from "next/router";
import { useSelector , useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import { toast } from 'react-toastify'

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import Select from "react-select";
import axios from 'axios'

import { Options } from '../../Constants/FormOptions'
import { SAVE_FILES , SAVE_ORDER } from "../../Redux/Order";
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
  const userData = useSelector(state => state.auth.user)

  const { access_token } = userData

  const { cat, subWithCat } = SSR;
  const { optionsDeadline , optionsPages , optionsSlides } = Options

  const [files, setFiles] = useState(null);
  const [deadline, setDeadline] = useState(new Date())
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
    await axios.post('https://assignment.servepratham.com/api/Check-Price',null,{
      headers: {
        'Authorization': `Bearer ${access_token}`
      }
    }).then((res) => {
      setloading(false)
      setprice(res.data.data.total);
      setShowOrder(true)
      setloading(false);
    }).catch(err => {
      toast.error(err.message)
      setloading(false)
    })
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
    form.append('total', Number(price)*100)
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
    try {
      const response = await axios({
        method: 'post',
        url: 'https://assignment.servepratham.com/api/Order-Create',
        data: values,
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      })
      setloading(false)
      dispatch(SAVE_ORDER(response.data))
      dispatch(SAVE_FILES(uploads))
      push('/order/checkout')
    } catch (error) {
      toast.error(error.message)
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
      <div id="form" className="p-5 pb-8 pt-4 shadow-xl rounded bg-white">
        <div className="w-full h-20 flex justify-center items-center mb-4">
          <span className="text-3xl tracking-wider font-medium">Create Order</span>
        </div>
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
                  {loading ? <CircularProgress size={20} color="inherit" /> : "Calculate Price"}
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
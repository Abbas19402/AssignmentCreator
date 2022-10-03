import React , { useState } from 'react'
import { useEffect } from 'react'
import Select from 'react-select'
import { useSelector } from 'react-redux'
import { FilePond, File, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

const OrderForm = () => {
  registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
  let optionsServices = []
  let optionsSubjects = []

  const SSR = useSelector((state) => state.ssr.ssrData);
  const { cat , subWithCat } = SSR
  const [ files , setFiles ] = useState(null)
  const [ subjects , setSubjects ] = useState([{
    value: 'Select any service',
    name: 'Select any service'
  }])

  const [ selectedService , setSeletedService ] = useState({})
  const [ services , setServices ] = useState(null)
  const [ price , setprice ] = useState(0)
  const [ loading , setloading ] = useState(false)

  const optionsPages = [
    { value: 10, label:10 },
    { value: 20, label:20 },
    { value: 30, label:30 },
    { value: 40, label:40 },
    { value: 50, label:50 },
    { value: 60, label:60 }
  ]

  const optionsDeadline = [
    { value: '3', label: '3 Days' },
    { value: '5', label: '5 Days' },
    { value: '10', label: '10 Days' },
    { value: '15', label: '15 Days' },
    { value: '20', label: '20 Days' }
  ]

  const optionsSlides = [
    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '30', label: '30' },
    { value: '40', label: '40' }
  ]
    
    const setUploads = (files) => {
      setFiles(files)
    }
    const handleSubmit = async(e) => {
      e.preventDefault()
      const form = new FormData(e.currentTarget);
      let values = {};
      for (var pair of form.entries()) {
        if(pair[0] == 'upload') {
          pair[0] = files
        } else {
          values[pair[0]] = pair[1];
        }
      }
      const header = {
        "Accept" : "application/json",
        "Authorization" : `${process.env.NEXT_PUBLIC_ASSIGNMENT_TOKEN}`
      }
      const { response } = await useFetch('post' , `${process.env.NEXT_PUBLIC_API_URL}/Check-Price`, "" , header)
      console.log("Price = ",response);
      if(response.data.success) {
        setprice(response.data.data.total)
        setloading(false)
      }
      console.log(values)
      e.target.reset();
      console.log(values);
    }

    useEffect( () => {
      cat.data.map(item => {
        optionsServices.push({value: item.slug , label: item.name , id: item.id})
      }) 
      setServices(optionsServices)
    },[selectedService])
  return (
    <div className=''>
        <div id="form" className='p-5 py-8 shadow-xl rounded bg-white'>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-y-6 lg:gap-x-3 gap-3">
                <div id="Type" className='flex flex-col gap-1'>
                  <label htmlFor="services" className='text-gray-600 text-sm font-medium'>Select Service</label>
                  <Select options={services} name='services'  onChange={(e,action)=>{
                    setSeletedService(e)
                    subWithCat.data.map((item) => {
                      if(e.id == item.category.id) {
                        optionsSubjects.push({value: item.slug , label: item.name , id: item.id})
                      }
                      setSubjects(optionsSubjects)
                    })
                  }} placeholder="Services"/>
                </div>
                <div id="Subject" className='flex flex-col gap-1'>
                  <label htmlFor="subject" className='text-gray-600 text-sm font-medium'>Choose Subject</label>
                  <Select options={subjects} name='subject' placeholder="Subject"/>
                </div>
                <div id="Pages/Slides" className='flex flex-col gap-1'>
               <label htmlFor="pages" className='text-gray-600 text-sm font-medium'>{selectedService.value == 'powerpoint' ? 'Select No. of Slides' : 'Choose No. of Pages'}</label>
                  <Select options={selectedService.value == 'powerpoint' ? optionsSlides : optionsPages} name='pages' placeholder={selectedService.value == 'powerpoint' ? 'Slides' : 'Pages'}/>
                </div>
                <div id="Deadline" className='flex flex-col gap-1'>
                  <label htmlFor="urgency" className='text-gray-600 text-sm font-medium'>Choose your Deadline</label>
                  <Select options={optionsDeadline} name='urgency' placeholder="Deadline" />
                </div>
            </div>
            <div id="specificReq" className='w-full my-4 flex flex-col gap-1'>
                <label htmlFor="specificRequirement" className='text-gray-600 text-sm font-medium'>Specific Requirements</label>
                <textarea name="specificRequirement" id="specificRequirement" rows={5} placeholder='Enter your specific requirement for your service' className='focus:outline-0 text-sm text-gray-500 placeholder:text-sm border border-gray-300 p-1 rounded w-full'></textarea>
            </div>
            <div id="upload" className='w-full my-2 flex flex-col gap-1'>
              <label htmlFor="upload" className='text-gray-600 text-sm font-medium'>Upload Additional Files</label>
              <FilePond
                id='upload'
                type='file'
                files={files}
                onupdatefiles={setFiles}
                allowMultiple={true}
                maxFiles={3}
                acceptedFileTypes={['png', 'jpg', 'jpeg', 'pdf', 'docx', 'xlsx', 'ppt', 'jfif']}
                name="upload" 
                storeAsFile={true}
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
              />
            </div>
            <button
              type="submit"
              className="bg-black hover:bg-neutral-700 w-full rounded transition-all duration-300 p-2">
              <span className="text-white tracking-wider text-base ">
                Submit
              </span>
            </button>
          </form>
        </div>
    </div>
  )
}

export default OrderForm
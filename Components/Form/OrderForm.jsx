import React , { useState } from 'react'
import { useEffect } from 'react'
import Select from 'react-select'
import { FilePond, File, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'

const OrderForm = () => {
  const [ files , setFiles ] = useState([])
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    const optionsServices = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
      { value: 'powerpoint', label: 'Powerpoint' }
    ]
    const optionsSlides = [
      { value: '10', label: '10' },
      { value: '20', label: '20' },
      { value: '30', label: '30' },
      { value: '40', label: '40' }
    ]

    const handleSubmit = (e) => {
      e.preventDefault()
      const form = new FormData(e.currentTarget);
      let values = {};
      for (var pair of form.entries()) {
        values[pair[0]] = pair[1];
      }
      console.log(values)
      e.target.reset();
      console.log(form);
    }

    const [ selectedService , setSeletedService ] = useState({})
    useEffect( () => {},[selectedService])
  return (
    <div className=''>
        <div id="form" className='p-5 py-8 shadow-xl rounded bg-white'>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-y-6 lg:gap-x-3 gap-3">
                <div id="Type" className='flex flex-col gap-1'>
                  <label htmlFor="services" className='text-gray-600 text-sm font-medium'>Select Service</label>
                  <Select options={optionsServices} name='services' onChange={(e,action)=>setSeletedService(e)} placeholder="Services"/>
                </div>
                <div id="Subject" className='flex flex-col gap-1'>
                  <label htmlFor="subject" className='text-gray-600 text-sm font-medium'>Choose Subject</label>
                  <Select options={options} name='subject' placeholder="Subject"/>
                </div>
                <div id="Pages/Slides" className='flex flex-col gap-1'>
               <label htmlFor="pages" className='text-gray-600 text-sm font-medium'>{selectedService.value == 'powerpoint' ? 'Select No. of Slides' : 'Choose No. of Pages'}</label>
                  <Select options={selectedService.value == 'powerpoint' ? optionsSlides : options} name='pages' placeholder={selectedService.value == 'powerpoint' ? 'Select Slides' : 'Select Pages'}/>
                </div>
                <div id="Deadline" className='flex flex-col gap-1'>
                  <label htmlFor="urgency" className='text-gray-600 text-sm font-medium'>Choose your Deadline</label>
                  <Select options={options} name='urgency' placeholder="Deadline" />
                </div>
            </div>
            <div id="specificReq" className='w-full my-4 flex flex-col gap-1'>
                <label htmlFor="specificRequirement" className='text-gray-600 text-sm font-medium'>Specific Requirements</label>
                <textarea name="specificRequirement" id="specificRequirement" rows={5} placeholder='Enter your specific requirement for your service' className='focus:outline-0 text-sm text-gray-500 placeholder:text-sm border border-gray-300 p-1 rounded w-full'></textarea>
            </div>
            <div id="upload" className='w-full my-2 flex flex-col gap-1'>
              <label htmlFor="upload" className='text-gray-600 text-sm font-medium'>Upload Additional Files</label>
              <FilePond
                type='file'
                files={files}
                onupdatefiles={setFiles}
                allowMultiple={true}
                maxFiles={3}
                acceptedFileTypes={['png', 'jpg', 'jpeg', 'pdf', 'docx', 'xlsx', 'ppt', 'jfif']}
                name="files" 
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
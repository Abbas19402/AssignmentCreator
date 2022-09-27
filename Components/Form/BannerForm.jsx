import React , {useState , useEffect} from "react";
import Select from "react-select";
import { useSelector } from "react-redux";

const handleCalculate = (e) => {
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  let values = {};
  for (var pair of form.entries()) {
    values[pair[0]] = pair[1];
  }
  console.log(values)
  e.target.reset();
};

const BannerForm = () => {

  // const mode = useSelector( state => state.darkMode.value )
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

const [ selectedService , setSeletedService ] = useState({})
useEffect( () => {},[selectedService])

  return (
    <div className="">
      <div id="CostCalculator" className="w-[100vw] lg:w-fit flex justify-center h-fit">
        <div className="transition-all duration-500 w-[90%] md:w-[60%] lg:w-[100%] h-fit flex flex-col items-center justify-evenly p-8 shadow-xl rounded-lg bg-white dark:bg-white/20">
          <div id="heading" className="w-full text-center">
            <span className="text-2xl tracking-wide text-gray-600 dark:text-white">
              {/* <Trans i18nKey='CalculateOrder'></Trans> */}
              Calculate your Order
            </span>
          </div>
          <form onSubmit={handleCalculate} className="h-[90%] md:h-[50%] w-full p-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3 mb-7">
                <div id="Type" className='flex flex-col gap-1 '>
                  <label htmlFor="services" className='text-gray-600 dark:font-gray-200 text-sm font-medium'>Select Service</label>
                  <Select options={optionsServices} name='services' onChange={(e,action)=>setSeletedService(e)} placeholder="Services"/>
                </div>
                <div id="Subject" className='flex flex-col gap-1'>
                  <label htmlFor="subject" className='text-gray-600 dark:font-gray-200 text-sm font-medium'>Choose Subject</label>
                  <Select options={options} name='subject' placeholder="Subject"/>
                </div>
                <div id="Pages/Slides" className='flex flex-col gap-1'>
               <label htmlFor="pages" className='text-gray-600 dark:font-gray-200 text-sm font-medium'>{selectedService.value == 'powerpoint' ? 'Select No. of Slides' : 'Choose No. of Pages'}</label>
                  <Select options={selectedService.value == 'powerpoint' ? optionsSlides : options} name='pages' placeholder={selectedService.value == 'powerpoint' ? 'Select Slides' : 'Select Pages'}/>
                </div>
                <div id="Deadline" className='flex flex-col gap-1'>
                  <label htmlFor="urgency" className='text-gray-600 dark:font-gray-200 text-sm font-medium'>Choose your Deadline</label>
                  <Select options={options} name='urgency' placeholder="Deadline" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="w-[50%]">
                <button
                  type="submit"
                  className="bg-black hover:bg-neutral-700 w-full rounded transition-all duration-300 p-2">
                  <span className="text-white tracking-wider text-base ">
                    Calculate
                  </span>
                </button>
              </div>
              <div className="w-[50%] text-center">
                <span className="text-black text-2xl">
                  $2000
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BannerForm;

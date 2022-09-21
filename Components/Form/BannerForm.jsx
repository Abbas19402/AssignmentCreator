import React , {useState} from "react";
import form from "../../Apis/BannerForm";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

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
  return (
    <div>
      <div id="CostCalculator" className="w-fit h-fit ">
        <div className="transition-all duration-500 w-full lg:w-[80%] h-fit flex flex-col items-center justify-evenly p-8 scale-100 shadow-xl rounded-lg bg-white dark:bg-white/20">
          <div id="heading" className="w-full text-center">
            <span className="text-2xl tracking-wide text-gray-600 dark:text-white">
              {/* <Trans i18nKey='CalculateOrder'></Trans> */}
              Calculate your Order
            </span>
          </div>
          <form
            onSubmit={handleCalculate}
            className="h-[90%] md:h-[50%] w-full">
            <ul
              id="form"
              className="grid grid-cols-2 gap-8 justify-between items-center w-full p-4">
              {form.map((item, key) => (
                <li key={key} className="flex justify-center items-center">
                  <FormControl sx={{ width: 240 }} size="small">
                    <InputLabel id="demo-select-small">
                      {item.placeholder}
                    </InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      name={key === 0? "assignment": key === 1? "subject": key === 2? "pages": key === 3 && "urgency"}
                      style={{ backgroundColor: "white" }}
                      size="small"
                      label={item.placeholder}>
                      <MenuItem value={"Lorem ipsum dolor sit amet."}>
                        Lorem ipsum dolor sit amet.
                      </MenuItem>
                      <MenuItem value={"Lorem ipsum dolor sit amet consectetur."}>
                        Lorem ipsum dolor sit amet consectetur.
                      </MenuItem>
                      <MenuItem value={"Lorem ipsum dolor sit."}>
                        Lorem ipsum dolor sit.
                      </MenuItem>
                    </Select>
                  </FormControl>
                </li>
              ))}
            </ul>
            <div id="Button/Cost" className="w-full pt-5 flex">
              <div
                id="wrapper"
                className="flex flex-row justify-around items-end h-full w-full relative">
                <div className="relative bottom-0 w-[40%]">
                <button type='submit' className='h-9 px-3.5 w-full rounded bg-black text-white text-center transition-all duration-500 lg:hover:bg-neutral-700'>
                    Calculate
                </button>
                </div>
                <div id="Cost" className="w-[40%] text-center">
                  <span className="text-4xl font-light dark:text-white">
                    $2000
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BannerForm;

import React from "react";
import { useSelector } from "react-redux";
import Card from "../../Components/Card";

const Samples = () => {
  const mode = useSelector((state) => state.mode.value);

  return (
    <div className={`relative h-auto ${mode == "dark" ? "dark" : "light"}`}>
      <div id="wrapper" className=" w-full p-8 dark:bg-dark bg-white">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full md:p-4 lg:p-10">
          {[...Array(12)].map((_, index) => (
            <li key={index}>
              <Card.Samples />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Samples;

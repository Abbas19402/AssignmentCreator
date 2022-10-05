import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Samples from "../../PageComponents/Samples/Samples";

const SamplesContent = () => {
  const mode = useSelector((state) => state.mode.value);

  useEffect(() => { }, [mode]);

  return (
    <div className={`relative ${mode == "dark" ? "dark" : "light"} mb-5 mt-6`}>
      <div className="text-center text-5xl dark:bg-dark bg-white">
        <div className="h-52 flex justify-center items-center bg-gray-100">
          <div className="dark:text-white text-gray-700 text-4xl md:text-5xl lg:text-5xl">
            Samples Content
          </div>
        </div>
      </div>
      <Samples />
    </div>
  );
};

export default SamplesContent;

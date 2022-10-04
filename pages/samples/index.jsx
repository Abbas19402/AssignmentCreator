import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Samples from "../../PageComponents/Samples/Samples";

const SamplesContent = () => {
  const mode = useSelector((state) => state.mode.value);

  useEffect(() => {}, [mode]);

  return (
    <div className={`relative ${mode == "dark" ? "dark" : "light"} mb-5`}>
      <div className="text-center text-5xl dark:bg-dark bg-white">
        <div className="dark:text-white text-gray-700">Samples Content</div>
      </div>
      <Samples />
    </div>
  );
};

export default SamplesContent;

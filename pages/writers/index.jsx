import React from "react";
import Writers from "../../PageComponents/Writers/Writers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const WritersContent = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode.value);
  useEffect(() => {}, [mode]);

  return (
    <div className={`relative ${mode == "dark" ? "dark" : "light"}`}>
      <div className="text-center text-5xl dark:bg-dark bg-white  ">
        <span className="dark:text-white text-gray-700">Our Writers</span>
      </div>
      <Writers />
    </div>
  );
};

export default WritersContent;

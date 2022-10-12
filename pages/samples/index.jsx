import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Samples from "../../PageComponents/Samples/Samples";
import axios from "axios";

const SamplesContent = (props) => {
  const mode = useSelector((state) => state.mode.value);

  useEffect(() => { }, [mode]);

  return (
    <div className={`relative ${mode == "dark" ? "dark" : "light"}`}>
      <div className="text-center text-5xl dark:bg-dark bg-white">
        <div className="h-52 flex justify-center items-center bg-gray-100">
          <div className="dark:text-white text-gray-700 text-4xl md:text-5xl lg:text-5xl">
            Samples Content
          </div>
        </div>
      </div>
      <Samples {...props}/>
    </div>
  );
};

export default SamplesContent;

export async function getServerSideProps(context) {
  const { data:samplesData } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}cms/Samples`)
  const { data:allSubjects } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}customer/Get-All-subject`)
  return {
    props: {
      samples: samplesData,
      subjects: allSubjects
    }
  }
}

import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Card from "../../Components/Card";
import Image from "next/image";
import Form from "../../Components/Form";
import parse from "html-react-parser";


const SubjectDetails = (props, query) => {
  const router = useRouter();

  const mode = useSelector((state) => state.mode.value);
  const { ImageSrc, category, short_desc, name, slug } =
    props.props.content.data;
  const prefillData = {
    category: category,
    subjectSlug: slug,
    subjectName: name,
  };

  return (
    <div className={`${mode == "dark" && "dark"}`}>
      <div className="relative lg:p-5 h-fit">
        <div className="flex flex-col lg:flex-row gap-4 justify-around items-center">
          <div className="w-full h-full md:w-[60%]">
            <div className="flex flex-col justify-start items-center">
              <div className="flex justify-center my-5">
                <img src={`${ImageSrc}`} alt={name} width={240} />
              </div>
              <div id="Heading" className="w-full my-3 px-4">
                <span className="text-2xl md:text-3xl lg:text-4xl text-start">{name}</span>
              </div>
              <p className="text-justify p-4">{parse(short_desc)}</p>
            </div>
          </div>
          <div className="w-full h-fit flex justify-center md:w-[40%] scale-95 md:scale-100 mb-16">
            <Form.ServiceForm prefill={prefillData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectDetails;

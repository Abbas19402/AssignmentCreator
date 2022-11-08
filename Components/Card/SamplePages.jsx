import React from "react";
import { useRouter } from "next/router";

import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import parse from "html-react-parser";

const SamplePages = ({ item }) => {
  const router = useRouter()
  console.log(item);
  return (
    <div className="w-full bg-white mt-8 flex justify-center">
      <div className="border shadow-lg bg-slate-50 rounded-md w-[80%] md:w-[70%] divide-y">
        <div className="font-medium text-2xl text-slate-700 cursor-pointer p-4 capitalize flex flex-col" onClick={()=> {
          router.push({
            pathname:`/samples/${item.category[0].slug}/${item.slug}`,
            query: {
              sample: item.id
            }
          },`/samples/${item.category[0].slug}/${item.slug}`)
        }}>
          <span>{item.title}</span>
          <span className="text-sm">{item.subject[0].name}</span>
        </div>

        <div className="p-4 text-lg">
          <div className="mb-3 flex gap-2">
            <p className="font-medium text-primary text-sm">
              Pages: <span className="font-normal text-dark"> 21 </span>
            </p>
          </div>
          {parse(item.description)}
          {/* <Link href={`/samples/${item.category[0].slug}/${item.slug}`}> */}
            <button className=" mt-3 font-semibold text-slate-600 hover:text-slate-400 ">
              View or download <ArrowRightAltIcon />
            </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default SamplePages;

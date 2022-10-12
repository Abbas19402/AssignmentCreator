import React from "react";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import parse from "html-react-parser";

const SamplePages = ({ item }) => {
  return (
    <div className="w-full bg-white mt-8 flex justify-center">
      <div className="border shadow-lg bg-slate-50 rounded-md w-[80%] md:w-[70%] divide-y">
        <div className="font-medium text-2xl text-slate-700 cursor-pointer p-4 capitalize">
          <Link href={`/samples/${item.category[0].slug}/${item.slug}`}>
            {item.title}
          </Link>
        </div>

        <div className="p-4 text-lg">
          <div className="mb-3 flex gap-2">
            <p className="font-medium text-primary text-sm">
              Downloads:
              <span className="font-normal text-dark"> 392 | </span>
            </p>

            <p className="font-medium text-primary text-sm">
              Pages: <span className="font-normal text-dark"> 21 | </span>
            </p>

            <p className="font-medium text-primary text-sm">
              Words: <span className="font-normal text-dark"> 5371 </span>
            </p>
          </div>
          {parse(item.description)}
          <Link href={`/samples/${item.category[0].slug}/${item.slug}`}>
            <button className=" mt-3 font-semibold text-slate-600 hover:text-slate-400 ">
              View or download <ArrowRightAltIcon />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SamplePages;

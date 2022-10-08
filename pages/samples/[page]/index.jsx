import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function SampleList(props) {
  console.log(props)

  return (
    <div>
      {[...Array(10)].map((_, index) => (
        <>
          <div className="w-full bg-white mt-8 flex justify-center" key={index}>
            <div className="border shadow-lg bg-slate-50 rounded-md w-[80%] md:w-[70%] divide-y">
              <div className="font-medium text-2xl text-slate-700 cursor-pointer p-4 capitalize">
                <Link href="/samples/sample-list/sample-details">
                  UGB163 Understanding of Fundamental Concepts, Techniques, and
                  Models - Gravepals PLC
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
                INTRODUCTION Accounting is considered a comprehensive and
                systematic tracing of numerous financial transactions related to
                business. It is also referred to as the process of classifying,
                summarizing, and analyzing reports to transactions for over
                sighting agencies, tax collection entities, and ...
                <div>
                  <button className=" mt-3 font-semibold text-slate-600 hover:text-slate-400 ">
                    View or download <ArrowRightAltIcon/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default SampleList;

export async function getServerSideProps (context) {
  const { query } = context
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/cms/Samples/${query.page}`)
  return {
    props: {
      samples: data
    }
  }
}

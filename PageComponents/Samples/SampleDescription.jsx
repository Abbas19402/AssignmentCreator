import React from 'react'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useSelector } from 'react-redux';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';
import { useRouter } from 'next/router';

function SampleDescription() {
  const { query } = useRouter()
  console.log(query);
  const loginStatus = useSelector((state)=> state.auth.loginStatus)
  return (
    <div className="flex flex-col justify-start items-center mt-2">
      <div className="w-full flex justify-center py-2">
        <Breadcrumbs aria-label="breadcrumb" className="px-8">
          <Link href={'/samples'} className="hover:cursor-pointer">
            <span className=" text-primary font-bold hover:underline cursor-pointer">Samples</span>
          </Link>
          <Link href={'/samples'} className="hover:cursor-pointer">
            <span className=" text-primary font-bold hover:underline cursor-pointer">{query.page}</span>
          </Link>
          <span className=" text-primary font-bold hover:underline">{query.slug}</span>
        </Breadcrumbs>
      </div>
        <div className="w-[70%]">
        
          <h1 className="font-medium text-slate-700 text-xl">
            THL124 Impact of DATBB digital Technology Level 5 Rose Mont College
          </h1>
          <h3 className="mt-2"> Introduction </h3>
          <p className="text-justify mt-2 text-gray-700">
            In the modern era, most of the businesses implemented digital
            technologies in order to enhance their operational efficiency and
            profitability as well. This technological advancement has changed
            the aspects of conducting operations. Such types of modifications
            have not occurred in history so far. Mobile solution is one of the
            most common digital solutions that has given facility to the
            customers for seamless web browsing (Zysman and Kenney, 2017). Now,
            people are able to get details about products and services of
            company through mobile technologies. Most of the entities are
            providing mobile application to clients so that they can select
            their desired products and can order it easily.In the modern era,
            most of the businesses implemented digital technologies in order to
            enhance their operational efficiency and profitability as well. This
            technological advancement has changed the aspects of conducting
            operations. Such types of modifications have not occurred in history
            so far. Mobile solution is one of the most common digital solutions
            that has given facility to the customers for seamless web browsing
            (Zysman and Kenney, 2017). Now, people are able to get details about
            products and services of company through mobile technologies. Most
            of the entities are providing mobile application to clients so that
            they can select their desired products and can order it easily.
          </p>
          <button className="mt-3 border-slate-700 font-medium hover:bg-slate-100 transition-all duration-300 ease-linear px-3 py-2 text-sm border rounded-md text-slate-700 ">
            {loginStatus ? <div className='flex items-center justify-between'> Download Full Sample <ArrowRightAltIcon /></div> : 
            <Link href={`/auth/login`}>
              <div className='flex items-center justify-between'>Login to Download <ArrowRightAltIcon /></div>
            </Link>}
          </button>
        </div>
      </div>
  )
}

export default SampleDescription
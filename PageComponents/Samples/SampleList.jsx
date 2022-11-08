import React from "react";
import Card from "../../Components/Card";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from "next/link";
import { useRouter } from "next/router";

const List = ({ samples }) => {
  const { query } = useRouter()
  console.log(samples)
  return (
    <div className="pb-10">
      <div className="w-full flex justify-center py-2">
        <Breadcrumbs aria-label="breadcrumb" className="px-8">
          <Link href={'/samples'} className="hover:cursor-pointer">
            <span className=" text-primary font-bold hover:underline cursor-pointer">Samples</span>
          </Link>
          <span className=" text-primary font-bold hover:underline">{samples.page[0].subject[0].name}</span>
        </Breadcrumbs>
      </div>
      {samples.page.map((item, index) => (
        <Card.SamplePages item={item} key={index}/>
      ))}
    </div>
  )
}

export default List
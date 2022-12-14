import React from "react";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const Samples = ({ mode , data }) => {
  const router = useRouter()
  return (
    <div className={`${mode == "dark" ? "dark" : "light"}`}>
      <div className="w-[100%] dark:border-white rounded-md bg-white dark:bg-dark">
        <div className="flex flex-col justify-center items-center">
          <Card className="min-w-[80vw] md:min-w-[35vw] lg:min-w-full">
            <CardContent className="bg-gray-100 divide-y">
              <div className="bg-slate-600 mb-1 w-8 text-center font-medium border rounded-md text-white">
                {data.character}
              </div>

              {data.subjects.map((item , key)=> (
                <div className="flex cursor-pointer justify-between text-sm hover:text-primary hover:font-bold py-2" onClick={()=> {
                    router.push({
                    pathname:`/samples/${item.slug}`,
                    query: {
                      sample: item.id
                    }
                  },`/samples/${item.slug}`)
                }}>
                  <span>{item.name}</span>
                  <span>12</span>
                </div>
              ))}

            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Samples;

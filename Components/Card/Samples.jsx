import React from "react";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import Link from "next/link";

const Samples = ({ mode }) => {

  return (
    <div className={`${mode == "dark" ? "dark" : "light"}`}>
      <div className="w-[100%]  dark:border-white rounded-md bg-white dark:bg-dark">
        <div className="flex flex-col">
          <Card>
            <CardContent className="bg-gray-100 divide-y">
              <div className="bg-slate-600 mb-1 w-8 text-center font-medium border rounded-md text-white">
                A
              </div>

              <div className="flex cursor-pointer justify-between text-sm hover:text-primary hover:font-bold py-2">
                <Link href="/samples/sample-details">Sample Content</Link>
                <Link href="/samples/sample-details"> 12 </Link>
              </div>

              <div className="flex justify-between text-sm hover:text-primary hover:font-medium py-2">
                <Link href="/samples/sample-details">Sample Content</Link>
                <Link href="/samples/sample-details"> 8 </Link>
              </div>

              <div className="flex justify-between text-sm hover:text-primary hover:font-medium py-2">
                <Link href="/samples/sample-details">Sample Content</Link>
                <Link href="/samples/sample-details"> 10 </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Samples;

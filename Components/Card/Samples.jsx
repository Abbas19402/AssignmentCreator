import React from "react";
import Card from "@mui/material/Card";
import { CardContent, Divider } from "@mui/material";
import Link from "next/link";

const Samples = ({ mode }) => {
  return (
    <div className={`${mode == "dark" ? "dark" : "light"}`}>
      <div className="w-[100%]  dark:border-white rounded-md bg-white dark:bg-dark">
        <div className="flex flex-col">
          <Card >
            <CardContent className="bg-gray-100">
              <div className="text-sm hover:text-primary-dark hover:font-medium">
                <Link href="/">Sample Title</Link>
              </div>
              <div className="mt-2 mb-2">
                <Divider />
              </div>
              <div className="text-sm hover:text-primary-dark hover:font-medium">
                <Link href="/">Sample Title</Link>
              </div>
              <div className="mt-2 mb-2">
                <Divider />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Samples;

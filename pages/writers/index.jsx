import React from "react";
import Writers from "../../PageComponents/Writers/Writers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const WritersContent = (props) => {
  const dispatch = useDispatch();

  const { writers } = props

  const mode = useSelector((state) => state.mode.value);
  useEffect(() => {}, [mode]);

  return (
    <div className={`relative ${mode == "dark" ? "dark" : "light"}`}>
      <Writers writers={writers}/>
    </div>
  );
};

export default WritersContent;

export async function getServerSideProps(context) {
  const writers = await fetch(`${process.env.NEXT_PUBLIC_API_URL}cms/Writers`)
  const ourWriters = await writers.json()

  return {
    props: {
      writers: ourWriters
    }
  }
}

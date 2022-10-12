import React, { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import List from "../../../PageComponents/Samples/SampleList";

function SampleList({ samples }) {
  const { query } = useRouter()
  return (
    <div>
      <List samples={samples}/>
    </div>
  );
}

export default SampleList;

export async function getServerSideProps (context) {
  const { query } = context
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}ccms_page/Samples/${query.page}`)
  return {
    props: {
      samples: data
    }
  }
}

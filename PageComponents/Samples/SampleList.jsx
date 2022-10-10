import React from "react";
import Card from "../../Components/Card";


const List = ({ samples }) => {
    console.log(samples);
  return (
    <div className="pb-10">
      {samples.page.map((item, index) => (
        <Card.SamplePages item={item} key={index}/>
      ))}
    </div>
  )
}

export default List
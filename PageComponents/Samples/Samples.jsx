import React, { useEffect , useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../Components/Card";
import Masonry from '@mui/lab/Masonry';
import { Box } from "@mui/material";

const Samples = ({samples , subjects}) => {
  const mode = useSelector((state) => state.mode.value);

  const [ sortedSubjects , setSortedSubjects ] = useState([])

  const sortSubjects = () => {
    const sorted = subjects.data.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    let orderedArray = [];
    let counter = 65;
    [...Array(26)].map((_,key) =>{
      const objects = {
        character: String.fromCharCode(counter),
        subjects: sorted.filter( item => item.name.charCodeAt(0) == counter )
      }
      orderedArray.push(objects)
      counter++
    })
    setSortedSubjects(orderedArray)
  }

  useEffect(()=>{
    sortSubjects()
  },[])

  return (
    <div className={`relative h-auto ${mode == "dark" ? "dark" : "light"}`}>
      <div id="wrapper" className=" w-full p-8 dark:bg-dark bg-white">
        <Box className="p-8 flex justify-center items-center w-full">
          <Masonry columns={{xs:1, sm:2 , md:2 , lg:4}} sx={{width: '100%'}} spacing={2}>
            {sortedSubjects.map((item, index) => (
              item.subjects.length != 0 && <div key={index} className="w-full">
                <Card.Samples data={item}/>
              </div>
            ))}
          </Masonry>
        </Box>
      </div>
    </div>
  );
};

export default Samples;

import React, { useEffect , useState } from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { useRouter } from "next/router";

import Masonry from '@mui/lab/Masonry';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from "@mui/material/Link";

import Card from "../../Components/Card";

const Samples = ({samples , subjects}) => {
  const router = useRouter()
  const mode = useSelector((state) => state.mode.value);

  console.log(router.query);

  const [ sortedSubjects , setSortedSubjects ] = useState([])
  const [ founded , setFounded ] = useState([])
  const [ isSearchActive , setIsSearchActive ] = useState(false)

  const sortSubjects = () => {
    let orderedArray = [];
    let counter = 65;
    [...Array(26)].map((_,key) =>{
      const objects = {
        character: String.fromCharCode(counter),
        subjects: subjects.data.filter( item => item.name.charCodeAt(0) == counter )
      }
      orderedArray.push(objects)
      counter++
    })
    setSortedSubjects(orderedArray)
  }

  const searchSamples = (e) => {
    let foundedItem = []
    subjects.data.map((item, index) => {
      if(item.name.search(e.target.value) !== -1) {
        console.log(item.name)
        foundedItem.push({value:item.slug , id:item.id , label:item.name})
      }
    });
    setFounded(foundedItem)
  }

  console.log(founded);
  useEffect(()=>{
    sortSubjects()
  },[])

  return (
    <div className={`relative h-auto ${mode == "dark" ? "dark" : "light"}`}>


      <div id="wrapper" className=" w-full p-8 dark:bg-dark bg-white" onClick={()=>{if(isSearchActive) setIsSearchActive(false)}}>
        {/* <div className="w-full flex justify-center">
          <Breadcrumbs aria-label="breadcrumb" className="px-8">
            <Link href={'/samples'}>
              <span className="no-underline">Samples</span>
            </Link>
          </Breadcrumbs>
        </div> */}
        <div className="flex flex-row justify-start items-center gap-2 w-full h-12 my-2 px-8">
          <div className="bg-white ring-1 focus:ring-primary-dark h-[80%] w-64 rounded-md overflow-hidden">
            <input type="text" placeholder="Search samples" className="flex justify-start items-center w-full h-full placeholder:font-light placeholder:tracking-wide px-2 focus:outline-0 font-light" onChange={(e) => searchSamples(e)} onClick={()=> setIsSearchActive(true)}/>
            <div
                id="dropdownComponent"
                className={`absolute transition-all ${isSearchActive && founded.length > 0 ? 'h-fit border' : 'h-0 border-0'} w-fit max-h-64 dark:bg-slate-200 bg-white shadow-xl shadow-gray-300 overflow-hidden z-10 rounded overflow-y-auto mt-6  border-primary`}
              >
                <ul className="flex flex-col justify-evenly  items-center h-full overflow-y-auto">
                  {founded.map((item, key) => (
                    <li
                      key={key}
                      className="py-2 px-4 hover:bg-sky-200 w-52 hover:cursor-pointer"
                      onClick={() => {
                        router.push({
                          pathname:`/samples/${item.value}`,
                          query: {
                            sample: item.id
                          }
                        },`/samples/${item.value}`)
                        setIsSearchActive(false)
                    }}
                    >
                      <span className="text-gray-600 text-sm text-center capitalize">
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
          </div>
        </div>
        <Box className="p-8 flex justify-center items-center w-full">
          <Masonry columns={{xs:1, sm:2 , md:2 , lg:4}} sx={{width: '100%'}} spacing={2}>
            {sortedSubjects.map((item, index) => (
              item.subjects.length > 0 && <div key={index} className="w-full">
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

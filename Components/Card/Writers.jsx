import React from "react";

const Writers = ({ mode, data }) => {

  function download(URL) {
    if (typeof window !== "undefined"){
      try {
        var link = document.createElement('a')
        link.href = window.URL.createObjectURL(URL)
        link.download = objFileState.strFileName
        link.click()
        link.remove(); 
      } catch (e) {
          console.log({ "message": e, status: 400 })
      }
    }
}
  return (
    <div className={`${mode == "dark" && "dark"} h-full`}>
      <div className="w-[100%] border-2 border-gray-300 dark:border-gray-300 rounded-md hover:border-primary transition-all duration-300 bg-white dark:bg-dark/80 min-h-[30vh]  h-full">
        <div className="h-full w-full flex flex-col justify-between items-center">
          <div className="h-full flex flex-col justify-start items-center">
            <div
              id="Avatar"
              className="w-full  p-2 flex flex-row justify-around"
            >
              <div className="w-[50%] h-20 rounded-md border-gray-500 dark:border-white">
                <img
                  src={data.logoSrc}
                  alt="writer"
                  className="h-20 w-[100%] bg-cover border rounded-md"
                />
              </div>

              <div
                id="NameRating"
                className="flex flex-col w-[70%] justify-center ml-3"
              >
                <div
                  id="name"
                  className="text-sm text-gray-700 dark:text-white font-medium"
                >
                  {data.title}
                </div>
                <div
                  id="name"
                  className="mt-2 text-sm text-gray-700 dark:text-white font-medium"
                >
                  {data.meta_tag}
                </div>
                {/* <div
                  id="rating"
                  className="mt-2 text-sm text-gray-700 font-medium"
                >
                  <Rating name="read-only" value={3} readOnly size="small" />
                </div> */}
              </div>
            </div>
            <div id="DescriptionAndOthers" className="w-full p-2">
              <div className="text-justify">
                <span className="dark:text-white text-sm text-gray-800 text-justify">
                  {data.short_description}
                </span>
              </div>
            </div>
          </div>
          <div id="Buttons" className="w-full p-2 flex flex-row justify-between items-center gap-4">
            <div className="flex flex-row justify-start gap-3">
              <>
                <button
                  onClick={() => download(data.pdfSrc)}
                  className="bg-primary dark:bg-white hover:bg-primary-dark rounded transition-all duration-300 p-1.5 px-4 w-fit flex justify-around items-center gap-2"
                >
                  
                  <span className="text-white font-bold tracking-wider text-sm dark:text-black">
                    Download PDF 
                  </span>
                </button>
              </>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Writers;

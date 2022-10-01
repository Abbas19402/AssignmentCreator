import Image from 'next/image'
import React from 'react'

const ServiceOffered = () => {

  var StaticImage= 'data:image/jpeg;base64,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'

  return (
    <div className='relative p-5 bg-inherit'>
      <div className="p-5 flex flex-row justify-center items-center gap-5 md:pl-16 my-4 lg:my-0 lg:pl-10">
          <span className='text-2xl lg:text-4xl tracking-tight leading-relaxed font-thin whitespace-nowrap'>What services do Assignment Creator offer?</span>
      </div>
      <div className="grid grid-cols-3 gap-8 px-3 py-10">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div>
            <Image src={StaticImage} width={480} height={250} layout='responsive'/>
          </div>
          <div className="p-3">
            <div className="w-full flex flex-row justify-start p-2 py-0 pt-1">
              <span className='text-xl font-medium'>Essay Writting</span>
            </div>
            <div className="w-full text-justify p-2">
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolores sint architecto nobis? Iusto nostrum hic rem. Aperiam magni, eveniet accusamus cum molestiae vitae voluptates ex consectetur aliquam natus veritatis fugiat. Quisquam dolor quo consequuntur, neque consectetur eveniet alias rem.</span>
            </div>
          </div>
          <div className="w-full flex justify-end pt-0 pr-5 pb-5">
            <span className="text-primary hover:underline hover:cursor-pointer text-lg">Learn More</span>
          </div>
        </div>
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div>
            <Image src={StaticImage} width={480} height={250} layout='responsive'/>
          </div>
          <div className="p-3">
            <div className="w-full flex flex-row justify-start p-2 py-0 pt-1">
              <span className='text-xl font-medium'>Dessertation Writting</span>
            </div>
            <div className="w-full text-justify p-2">
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolores sint architecto nobis? Iusto nostrum hic rem. Aperiam magni, eveniet accusamus cum molestiae vitae voluptates ex consectetur aliquam natus veritatis fugiat. Quisquam dolor quo consequuntur, neque consectetur eveniet alias rem.</span>
            </div>
          </div>
          <div className="w-full flex justify-end pt-0 pr-5 pb-5">
            <span className="text-primary hover:underline hover:cursor-pointer text-lg">Learn More</span>
          </div>
        </div>
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div>
            <Image src={StaticImage} width={480} height={250} layout='responsive'/>
          </div>
          <div className="p-3">
            <div className="w-full flex flex-row justify-start p-2 py-0 pt-1">
              <span className='text-xl font-medium'>Report Writting</span>
            </div>
            <div className="w-full text-justify p-2">
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolores sint architecto nobis? Iusto nostrum hic rem. Aperiam magni, eveniet accusamus cum molestiae vitae voluptates ex consectetur aliquam natus veritatis fugiat. Quisquam dolor quo consequuntur, neque consectetur eveniet alias rem.</span>
            </div>
          </div>
          <div className="w-full flex justify-end pt-0 pr-5 pb-5">
            <span className="text-primary hover:underline hover:cursor-pointer text-lg">Learn More</span>
          </div>
        </div>
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div>
            <Image src={StaticImage} width={480} height={250} layout='responsive'/>
          </div>
          <div className="p-3">
            <div className="w-full flex flex-row justify-start p-2 py-0 pt-1">
              <span className='text-xl font-medium'>Plagiarism Report</span>
            </div>
            <div className="w-full text-justify p-2">
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolores sint architecto nobis? Iusto nostrum hic rem. Aperiam magni, eveniet accusamus cum molestiae vitae voluptates ex consectetur aliquam natus veritatis fugiat. Quisquam dolor quo consequuntur, neque consectetur eveniet alias rem.</span>
            </div>
          </div>
          <div className="w-full flex justify-end pt-0 pr-5 pb-5">
            <span className="text-primary hover:underline hover:cursor-pointer text-lg">Learn More</span>
          </div>
        </div>
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div>
            <Image src={StaticImage} width={480} height={250} layout='responsive'/>
          </div>
          <div className="p-3">
            <div className="w-full flex flex-row justify-start p-2 py-0 pt-1">
              <span className='text-xl font-medium'>Homework Writting</span>
            </div>
            <div className="w-full text-justify p-2">
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolores sint architecto nobis? Iusto nostrum hic rem. Aperiam magni, eveniet accusamus cum molestiae vitae voluptates ex consectetur aliquam natus veritatis fugiat. Quisquam dolor quo consequuntur, neque consectetur eveniet alias rem.</span>
            </div>
          </div>
          <div className="w-full flex justify-end pt-0 pr-5 pb-5">
            <span className="text-primary hover:underline hover:cursor-pointer text-lg">Learn More</span>
          </div>
        </div>
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div>
            <Image src={StaticImage} width={480} height={250} layout='responsive'/>
          </div>
          <div className="p-3">
            <div className="w-full flex flex-row justify-start p-2 py-0 pt-1">
              <span className='text-xl font-medium'>Thesis Writting</span>
            </div>
            <div className="w-full text-justify p-2">
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolores sint architecto nobis? Iusto nostrum hic rem. Aperiam magni, eveniet accusamus cum molestiae vitae voluptates ex consectetur aliquam natus veritatis fugiat. Quisquam dolor quo consequuntur, neque consectetur eveniet alias rem.</span>
            </div>
          </div>
          <div className="w-full flex justify-end pt-0 pr-5 pb-5">
            <span className="text-primary hover:underline hover:cursor-pointer text-lg">Learn More</span>
          </div>
        </div>
      </div>
    </div>
  )
}   

export default ServiceOffered
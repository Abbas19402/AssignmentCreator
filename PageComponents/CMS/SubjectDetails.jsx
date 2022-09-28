import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Card from '../../Components/Card'
import Image from 'next/image'
import Form from '../../Components/Form'

const SubjectDetails = ( props , query ) => {
    const mode = useSelector( state => state.mode.value )
    console.log(props.props.content);
    const { ImageSrc , category , short_desc , name } = props.props.content.data
  return (
    <div className={`${mode == 'dark' && 'dark'}`}>
        <div className="relative lg:p-5">
            <div className="flex flex-col md:flex-row gap-4 justify-around items-center">
                <div className="w-full h-full md:w-[60%]">
                    <div className="flex flex-col justify-start items-center">
                        <div className='flex justify-center my-5'>
                            <img src={`${ImageSrc}`} alt={name} width={240} />
                        </div>
                        <div id="Heading" className='w-full my-3'>
                            <span className="text-4xl text-start">{name}</span>
                        </div>
                        {short_desc}
                    </div>
                </div>
                <div className="w-full h-96 md:w-[40%]">
                    <Form.BannerForm />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubjectDetails
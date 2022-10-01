import React from 'react'
import { useRouter } from 'next/router'
import Card from '../../../Components/Card'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import SubjectDetails from '../../../PageComponents/CMS/SubjectDetails'

const PageType = (props) => {
  const mode = useSelector( state => state.mode.value )
    const { query } = useRouter()
  return (
    <div className='m-5'>
      <div id="wrapper" className='w-full lg:p-8 dark:bg-dark/80 bg-white'>
        <div className="w-full h-fit border-4 border-black flex flex-col justify-center item-center">
          <SubjectDetails query={query} props={props}/>
        </div>
      </div>
    </div>
  )
}

export default PageType

export async function getServerSideProps(context) {
  const sub = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/customer/SubjectById/${context.query.slug}`,{
    headers: {
      "Accept" : "application/json",
      "Authorization" : `${process.env.NEXT_PUBLIC_ASSIGNMENT_TOKEN}`
    }
  })
  const subject = await sub.json()

  return {
    props: {
      content: subject
    }
  }
}
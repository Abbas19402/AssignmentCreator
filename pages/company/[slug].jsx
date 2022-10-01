import React from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Image from 'next/image'

const PageType = (props) => {
  const mode = useSelector( state => state.mode.value )
    const { query } = useRouter()
  return (
    <div className='m-5'>
      <div id="wrapper" className='w-full lg:p-8 dark:bg-dark/80 bg-white'>
        <div className="w-full border-4 border-black flex flex-col justify-center item-center">
          {/* <SubjectDetails query={query} props={props}/> */}
        </div>
      </div>
    </div>
  )
}

export default PageType

export async function getServerSideProps(context) {
  const company = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cms`,{
    headers: {
      "Accept" : "application/json",
      "Authorization" : `${process.env.NEXT_PUBLIC_ASSIGNMENT_TOKEN}`
    }
  })
  const cms = await company.json()

  return {
    props: {
      content: cms
    }
  }
}
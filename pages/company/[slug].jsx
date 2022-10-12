import React from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Company from '../../PageComponents/CMS/Company'

const PageType = (props) => {
  const mode = useSelector( state => state.mode.value )
  const { query } = useRouter()
  return (
    <div className='m-5'>
      <div id="wrapper" className='w-full lg:p-8 dark:bg-dark/80 bg-white'>
        <div className="w-full flex flex-col justify-center item-center">
          <Company {...props} query={query}/>
        </div>
      </div>
    </div>
  )
}

export default PageType

export async function getServerSideProps(context) {
  const company = await fetch(`${process.env.NEXT_PUBLIC_API_URL}cms/Company`)
  const cms = await company.json()
  return {
    props: {
      content: cms
    }
  }
}
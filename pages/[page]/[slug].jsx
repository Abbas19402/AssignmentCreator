import React from 'react'
import { useRouter } from 'next/router'

const PageType = () => {
    const { query } = useRouter()
  return (
    <div className='font-thin text-6xl underline m-5'>{query.page}/{query.slug} </div>
  )
}

export default PageType
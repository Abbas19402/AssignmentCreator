import React from 'react'
import Authentication from '../../../PageComponents/Authentication'
import { useRouter } from 'next/router'

const AuthType = () => {
  const { query } = useRouter()
    return (
      <Authentication query={query}/>
  )
}

export default AuthType
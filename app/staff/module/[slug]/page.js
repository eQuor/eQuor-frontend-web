'use client'
import React from 'react'
import ProtectedRouteWRap from '@app/ProtectedRouteWRap'
import { useEffect, useState } from 'react'
import { axiosGet } from '@common/basicAxios'
import { useAuth } from '@contexts/authContext'
import axios from 'axios'

const page = ({ params }) => {
    const [data, setResponse] = useState('')
    

   const getResponse = async () => {
     const slug = params.slug
     console.log(slug)
     const response = await axiosGet(`/staff/getUserById/${slug}`)
     

     if (response.status === 200) {
       console.log('axios worked')
       console.log(response.data)
       setResponse(response.data)
     } else {
       console.log('Error while fetching API')
     }
     return response
   }

   useEffect(() => {
     console.log('useEffect is running')
     getResponse()
   }, [])

 
  return (
    <ProtectedRouteWRap>
      {/* <div>{params.slug}</div> */}
      <div className="col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5 mt-3">
        <span className="text-light-blue font-semibold text-lg">
          {data.name}
        </span>

        <p className="text-link-ash font-semibold text-sm">
          Home / Modules /{' '}
          <span className="text-black font-semibold text-sm">{data.name}</span>
        </p>
      </div>
    </ProtectedRouteWRap>
  )
}

export default page

'use client'
import React from 'react'
import ProtectedRouteWRap from '@app/ProtectedRouteWRap'
import { useEffect, useState, useRef } from 'react'
import { axiosGet, axiosPost } from '@common/basicAxios'
import { useAuth } from '@contexts/authContext'
import axios from 'axios'

import Papa from 'papaparse'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
import CsvLecturer from '@components/CsvLecturer'
import CsvStudent from '@components/CsvStudent'
import CsvLecGroup from '@components/CsvLecGroup'
import CsvStudentGroup from '@components/CsvStudentGroup'

const page = ({ params }) => {
  //Rerender page
  const [render, setRender] = useState(false)



  //Show moudle name from the backend
  const [data, setResponse] = useState('')
  const [slug, setSlug] = useState('')

  const getResponse = async () => {
    const slug = params.slug
    setSlug(slug)
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
    <div className="col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5 mt-3">
      <span className="text-light-blue font-semibold text-lg">{data.name}</span>

      <p className="text-link-ash font-semibold text-sm">
        Home / Modules /{' '}
        <span className="text-black font-semibold text-sm">{data.name}</span>
      </p>
    </div>

    <div className="col-start-1 col-end-13 row-start-2 px-4 pt-5 mt-3">
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2">
        <CsvLecturer prop1={data.name} prop2={setRender} prop3={render} />
        <CsvStudent prop1={data.name} />
      </div>
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 mt-2">
        <CsvLecGroup prop1={params.slug} />
        <CsvStudentGroup prop1={params.slug} />
        {/* <CsvGroup /> */}
      </div>
    </div>
  </ProtectedRouteWRap>
)
}

export default page

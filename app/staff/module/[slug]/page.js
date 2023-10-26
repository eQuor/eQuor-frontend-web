'use client'
import React from 'react'
import ProtectedRouteWRap from '@app/ProtectedRouteWRap'
import { useEffect, useState, useRef } from 'react'
import { axiosGet } from '@common/basicAxios'
import { useAuth } from '@contexts/authContext'
import axios from 'axios'
import Group from '@components/Group'
import Papa from 'papaparse'

const page = ({ params }) => {

  //Show moudle name from the backend
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



  //Show data in the CSV
  // const [csvData, setCsvData] = useState([])
  // const handleFileUpload = (e) => {
  //   const file = e.target.files[0]
  //   Papa.parse(file, {
  //     header: true,
  //     dynamicTyping: true,
  //     complete: function (results) {
  //       console.log(results.data)
  //       setCsvData(results.data)
  //     },
  //   })  
  //  }
  
  const fileInput = useRef()

  const parseCsv = () => {
    const file = fileInput.current.files[0]
    Papa.parse(file, {
      complete: function (results) {
        console.log(results)
      },
    })
  }
  
 


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

      <div className="col-start-1 col-end-13 row-start-2 px-4 pt-5 mt-3">
        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2">
          <div className="mr-4 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className="p-6">
              <h5 className="text-lg font-bold leading-none text-dark-blue mt-3">
                Assign Lectures
              </h5>
              {/* <button
                type="button"
                class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-3"
              >
                Create Group
              </button> */}
              <input type="file" ref={fileInput} accept=".csv" />
              <button
                onClick={parseCsv}
                type="button"
                class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-3"
              >
                Regiter
              </button>
          
            </div>
          </div>

          <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className="p-6">
              <h5 className="text-lg font-bold leading-none text-dark-blue mt-3 ">
                Assign Students
              </h5>
              <button
                type="button"
                class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-3"
              >
                Create Group
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 mt-2">
          {/* <Group />

          <Group /> */}
        </div>
      </div>
    </ProtectedRouteWRap>
  )
}

export default page

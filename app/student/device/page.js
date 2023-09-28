'use client'
import React from 'react'
import ProtectedRouteWRap from '@app/ProtectedRouteWRap'
import QRCode from 'react-qr-code'
import { useState, useEffect} from 'react'

import { axiosGet } from '@common/basicAxios'
import { useAuth } from '@contexts/authContext'

import axios from 'axios'








const page = () => {
  // const [text, setText] = useState('')
  // function handleChange(e) {
  //   setText(e.target.value)
  // }

  const [data, setValue] = useState('')
  const[userName,setUsername] = useState('')

  const { authUser, setAuthUser } = useAuth()

 const getResponse = async () => {
   const response = await axiosGet('/auth/getId')
   if (response.status == 200) {
     console.log('axios wed')
     console.log(response.data)
     console.log(response.data.qrString)
     console.log(response.data.userName)
     
     //let value = response.data.toString()
     let value = response.data.qrString.toString()
     let userName = response.data.userName.toString()
     setValue(value)
     setUsername(userName)
 
   } else {
     console.log('error while fetching API')
   }
   return response
 }
 useEffect(() => {
   console.log('useEffect is running')
   const response = getResponse()
 }, [])





  return (
    <ProtectedRouteWRap>
      <div className="col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5 mt-3">
        <span className="text-light-blue font-semibold text-lg">
          Your Device
        </span>

        <p className="text-link-ash font-semibold text-sm">
          Home /{' '}
          <span className="text-black font-semibold text-sm">Your Device</span>
        </p>
      </div>

      <div className="col-start-3 col-end-13 px-4 pt-5">
        <div className="flex">
          <div className="p-20 bg-white border border-gray-200 rounded-lg shadow">
            <div className="mt-12">
              <p className="mb-3 font-normal text-gray-500 ">
                1. Download eQuor mobile application.
              </p>
              <p className="mb-3 font-normal text-gray-500 ">
                2. Click Scan QR button.
              </p>
              <p className="mb-3 font-normal text-gray-500 ">
                3. Scan the QR Code
              </p>
              <p className="mb-3 font-normal text-gray-500 ">
                4. Register your device to mark attendance.
              </p>
            </div>
          </div>
          <div className="p-20 bg-white border border-gray-200 rounded-lg shadow ml-5">
            <div className="ml-0">
              {/* <h1 className='ml-23'>QR Code</h1> */}
              <QRCode value={data} />

              {/* <div>
                <p>Enter your text</p>
                <input
                  type="text"
                  value={text}
                  onChange={(e) => {
                    handleChange(e)
                  }}
                />
                <button>Generate</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRouteWRap>
  )
}

export default page

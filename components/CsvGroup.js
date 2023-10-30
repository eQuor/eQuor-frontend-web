'use client'
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { axiosGet, axiosPost } from '@common/basicAxios'

const Group = (props) => {
  const render = props.prop3
  console.log('Inside CSVGroup')
  console.log(props.prop1)

const [lecData, setLecData] = useState([])
  const getLecData = async () => {
    const slug = props.prop1
    console.log(slug)
  try {
      const response = await axiosGet(`/staff/byModule/${slug}`)
    if (response.status === 200) {
      console.log('axios worked 2nd time')
      console.log(response.data)
      setLecData(response.data)
    } else {
      throw new Error('Error while fetching API')
    }
  } catch (error) {
    console.error(error)
  }
}

useEffect(() => {
  console.log('useEffect is running')
  getLecData()
}, [render])
  
  console.log(lecData)

  return (
    <>
      <div className="mr-4 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <div className="w-full max-w-md p-4  rounded-lg sm:p-8 ">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-dark-blue ">
              Assigned Lectures
            </h5>
        
          </div>
          <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200 ">
              {lecData.map((item) => {
                return (
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-dark-blue truncate">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {item.email}
                        </p>
                      </div>
                      {/* <div className="inline-flex items-center text-base font-semibold text-dark-blue ">
                  Group 1
                </div> */}
                    </div>
                  </li>
                )
              })}
              
              
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Group

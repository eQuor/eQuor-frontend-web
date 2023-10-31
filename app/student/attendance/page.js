'use client'
import Button from '@components/Button'
import React from 'react'
import Search from '@components/Search'
import TabsContainer from '@components/Tabscontent'
import ProtectedRouteWRap from '@app/ProtectedRouteWRap'

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'


import Card from '@components/Card'
import Link from 'next/link'

const page= () => {
  return (
    <ProtectedRouteWRap>
      <div className="col-start-1 col-end-13 ">
        <TabsContainer />
      </div>

      <div className="col-start-1 col-end-13 row-start-2 row-end-2  px-4 pt-5 mt-3">
        <span className="text-light-blue font-semibold text-lg">
          Attendance
        </span>

        <p className="text-link-ash font-semibold text-sm">
          Home /{' '}
          <span className="text-black font-semibold text-sm"> Attendance</span>
        </p>
      </div>

      <div className="col-start-1 col-end-13 px-4 pt-5 flex">
        <div className="w-[1200px] overflow-x-auto">
          <Search />
        </div>

        <div className="ml-3">
          <Button title={'Search'} url={'/student/attendance'} />
        </div>
      </div>

      <div className="col-start-1 col-end-13 px-4 pt-5">
        <span className="text-dark-blue font-semibold text-2xl ">
          Marked Attendance
        </span>
        <div className=" overflow-x-auto shadow-md sm:rounded-lg mt-4">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Student Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Module Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Time Slot
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Pasan Silva
                </th>
                <td className="px-6 py-4">SCS2206 Mathematical Methods II</td>
                <td className="px-6 py-4">08.16.2023</td>
                <td className="px-6 py-4">8.00-10.00</td>
              </tr>
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Pasan Silva
                </th>
                <td className="px-6 py-4">SCS3203 Middleware Architecture</td>
                <td className="px-6 py-4">08.16.2023</td>
                <td className="px-6 py-4">8.00-10.00</td>
              </tr>
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Pasan Silva
                </th>
                <td className="px-6 py-4">
                  SCS3212 Mobile Application Development
                </td>
                <td className="px-6 py-4">08.16.2023</td>
                <td className="px-6 py-4">8.00-10.00</td>
              </tr>
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Pasan Silva
                </th>
                <td className="px-6 py-4">
                  SCS3208 Software Project Management
                </td>
                <td className="px-6 py-4">08.16.2023</td>
                <td className="px-6 py-4">8.00-10.00</td>
              </tr>
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Pasan Silva
                </th>
                <td className="px-6 py-4">IS3102 Human Computer Interaction</td>
                <td className="px-6 py-4">08.16.2023</td>
                <td className="px-6 py-4">8.00-10.00</td>
              </tr>
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Pasan Silva
                </th>
                <td className="px-6 py-4">
                  SCS3208 Software Project Management
                </td>
                <td className="px-6 py-4">08.16.2023</td>
                <td className="px-6 py-4">8.00-10.00</td>
              </tr>
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Pasan Silva
                </th>
                <td className="px-6 py-4">SCS3203 Middleware Architecture</td>
                <td className="px-6 py-4">07.17.2023</td>
                <td className="px-6 py-4">1.00-3.00</td>
              </tr>
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Pasan Silva
                </th>
                <td className="px-6 py-4">SCS2206 Mathematical Methods II</td>
                <td className="px-6 py-4">08.16.2023</td>
                <td className="px-6 py-4">8.00-10.00</td>
              </tr>
              <tr className="bg-white ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Pasan Silva
                </th>
                <td className="px-6 py-4">SCS2206 Mathematical Methods II</td>
                <td className="px-6 py-4">08.16.2023</td>
                <td className="px-6 py-4">8.00-10.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ProtectedRouteWRap>
  )
}

export default page
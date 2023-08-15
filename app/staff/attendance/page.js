'use client'
import Button from '@components/Button'
import React from 'react'
import Search from '@components/Search'
import TabsContainer from '@components/Tabscontent'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

import Card from '@components/Card'
import Link from 'next/link'

const Home = () => {
  const datapie = [
    { name: 'present students', value: 500 },
    { name: 'abesent students', value: 300 },
  ]
  const COLORS = ['#012970', '#899BBD']

  const RADIAN = Math.PI / 180
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <>
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
          <Button title={'Generate Report'} url={'/staff/module/addmodule'} />
        </div>
      </div>

      <div className="col-start-1 col-end-13 px-4 pt-5">
        <span className="text-dark-blue font-semibold text-2xl ">
          Present Students
        </span>
        <div class=" overflow-x-auto shadow-md sm:rounded-lg mt-4">
          <table class="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Student Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Student Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Index Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Registration Number
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
                <td className="px-6 py-4">john@example.com</td>
                <td className="px-6 py-4">20001278</td>
                <td className="px-6 py-4">2020/CS/120</td>
              </tr>
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Pasan Silva
                </th>
                <td className="px-6 py-4">jane@example.com</td>
                <td className="px-6 py-4">20001278</td>
                <td className="px-6 py-4">2020/CS/120</td>
              </tr>
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Pasan Silva
                </th>
                <td className="px-6 py-4">jane@example.com</td>
                <td className="px-6 py-4">20001278</td>
                <td className="px-6 py-4">2020/CS/120</td>
              </tr>
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Pasan Silva
                </th>
                <td className="px-6 py-4">jane@example.com</td>
                <td className="px-6 py-4">20001278</td>
                <td className="px-6 py-4">2020/CS/120</td>
              </tr>
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Pasan Silva
                </th>
                <td className="px-6 py-4">jane@example.com</td>
                <td className="px-6 py-4">20001278</td>
                <td className="px-6 py-4">2020/CS/120</td>
              </tr>
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Pasan Silva
                </th>
                <td className="px-6 py-4">jane@example.com</td>
                <td className="px-6 py-4">20001278</td>
                <td className="px-6 py-4">2020/CS/120</td>
              </tr>
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Pasan Silva
                </th>
                <td className="px-6 py-4">jane@example.com</td>
                <td className="px-6 py-4">20001278</td>
                <td className="px-6 py-4">2020/CS/120</td>
              </tr>
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Pasan Silva
                </th>
                <td className="px-6 py-4">jane@example.com</td>
                <td className="px-6 py-4">20001278</td>
                <td className="px-6 py-4">2020/CS/120</td>
              </tr>
              <tr className="bg-white ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Pasan Silva
                </th>
                <td className="px-6 py-4">jane@example.com</td>
                <td className="px-6 py-4">20001278</td>
                <td className="px-6 py-4">UCSC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Home

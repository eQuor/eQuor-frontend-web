'use client'
import Button from '@components/Button'
import DataTable from '@components/DataTable'
import Search from '@components/Search'
import TabsContainer from '@components/Tabscontent'
import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
      {/* <div className=" bg-white  col-start-1 col-end-13 row-start-1 row-end-2 pl-8  pt-5 ">
        <TabsContainer />
      </div> */}
      <div className="col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5 mt-3">
        <span className="text-light-blue font-semibold text-lg">
          Staff Member Management
        </span>

        <p className="text-link-ash font-semibold text-sm">
          Home /{' '}
          <span className="text-black font-semibold text-sm">
            Staff members
          </span>
        </p>
      </div>

      <div className="col-start-1 col-end-13 px-4 pt-5 flex">
        <div className="w-[950px] overflow-x-auto">
          <Search />
        </div>

        <div className="ml-3">
          <Button
            title={'Add Staff Member'}
            url={'/admin/staffmanage/staffcreate'}
          />
        </div>
      </div>

      <div className="col-start-1 col-end-13 px-4 pt-5">
        <span className="text-dark-blue font-semibold text-2xl ">
          Current Staff Members
        </span>
        <div class=" overflow-x-auto shadow-md sm:rounded-lg mt-4">
          <table class="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  email
                </th>
                <th scope="col" className="px-6 py-3">
                  Institute
                </th>
                <th scope="col" className="px-6 py-3">
                  Department
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  U12345
                </th>
                <td className="px-6 py-4">john@example.com</td>
                <td className="px-6 py-4">University of Colombo</td>
                <td className="px-6 py-4">Finance</td>
                <td className="px-6 py-4">
                  <Link
                    className="font-medium text-blue-600 "
                    href="/admin/staffmanage/editstaff"
                  >
                    Edit
                  </Link>
                  {/* <a href="#" className="font-medium text-blue-600 "></a> */}
                </td>
              </tr>
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  U67890
                </th>
                <td className="px-6 py-4">jane@example.com</td>
                <td className="px-6 py-4">University of Colombo</td>
                <td className="px-6 py-4">Marketing</td>
                <td className="px-6 py-4">
                  <Link
                    className="font-medium text-blue-600 "
                    href="/admin/staffmanage/editstaff"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  U67890
                </th>
                <td className="px-6 py-4">jane@example.com</td>
                <td className="px-6 py-4">University of Colombo</td>
                <td className="px-6 py-4">Marketing</td>
                <td className="px-6 py-4">
                  <Link
                    className="font-medium text-blue-600 "
                    href="/admin/staffmanage/editstaff"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  U67890
                </th>
                <td className="px-6 py-4">jane@example.com</td>
                <td className="px-6 py-4">University of Colombo</td>
                <td className="px-6 py-4">Marketing</td>
                <td className="px-6 py-4">
                  <Link
                    className="font-medium text-blue-600 "
                    href="/admin/staffmanage/editstaff"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  U67890
                </th>
                <td className="px-6 py-4">jane@example.com</td>
                <td className="px-6 py-4">University of Colombo</td>
                <td className="px-6 py-4">Marketing</td>
                <td className="px-6 py-4">
                  <Link
                    className="font-medium text-blue-600 "
                    href="/admin/staffmanage/editstaff"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  U67890
                </th>
                <td className="px-6 py-4">jane@example.com</td>
                <td className="px-6 py-4">University of Colombo</td>
                <td className="px-6 py-4">Marketing</td>
                <td className="px-6 py-4">
                  <Link
                    className="font-medium text-blue-600 "
                    href="/admin/staffmanage/editstaff"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  U67890
                </th>
                <td className="px-6 py-4">jane@example.com</td>
                <td className="px-6 py-4">University of Colombo</td>
                <td className="px-6 py-4">Marketing</td>
                <td className="px-6 py-4">
                  <Link
                    className="font-medium text-blue-600 "
                    href="/admin/staffmanage/editstaff"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  U67890
                </th>
                <td className="px-6 py-4">jane@example.com</td>
                <td className="px-6 py-4">University of Colombo</td>
                <td className="px-6 py-4">Marketing</td>
                <td className="px-6 py-4">
                  <Link
                    className="font-medium text-blue-600 "
                    href="/admin/staffmanage/editstaff"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
              <tr className="bg-white ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  U67890
                </th>
                <td className="px-6 py-4">jane@example.com</td>
                <td className="px-6 py-4">University of Colombo</td>
                <td className="px-6 py-4">UCSC</td>
                <td className="px-6 py-4">
                  <Link
                    className="font-medium text-blue-600 "
                    href="/admin/staffmanage/editstaff"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* <div className=" font-semibold text-[#012970] text-3xl col-start-1 col-end-13  pl-12  pt-10 ">
        <h1>Current Staff members</h1>
      </div> */}
    </>
  )
}

export default page

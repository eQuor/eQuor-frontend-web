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
          Medical Submission
        </span>

        <p className="text-link-ash font-semibold text-sm">
          Home /{' '}
          <span className="text-black font-semibold text-sm">
            Medical Submission
          </span>
        </p>
      </div>

      <div className="col-start-1 col-end-13 px-4 pt-5 flex">
        <div className="w-[1200px] overflow-x-auto">
          <Search />
        </div>

        <div className="ml-3">
          <Button title={'Submit New Report'} url={'/student/absenceReport/submitreport'} />
        </div>
      </div>

      <div className="col-start-1 col-end-13 px-4 pt-5">
        <span className="text-dark-blue font-semibold text-2xl ">
          Submitted Reports
        </span>
        <div className="overflow-x-auto shadow-md sm:rounded-lg mt-3">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Registration Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500   focus:ring-2"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
                >
                  <div className="pl-3">
                    <div className="text-base font-semibold">Pasan Silva</div>
                    <div className="font-normal text-gray-500">
                      pasan@ucsc.cmb.lk
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">2020/CS/120</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{' '}
                    Accepted
                  </div>
                </td>
                <td className="px-6 py-4">16.08.2023</td>
              </tr>

              <tr className="bg-white  hover:bg-gray-50 ">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-3"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <label
                      htmlFor="checkbox-table-search-3"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  <div className="pl-3">
                    <div className="text-base font-semibold">Pasan Silva</div>
                    <div className="font-normal text-gray-500">
                      pasan@ucsc.cmb.lk
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">2020/CS/120</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>{' '}
                    Rejected
                  </div>
                </td>
                <td className="px-6 py-4">16.08.2023</td>
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

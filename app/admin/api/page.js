import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <div className="col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5 mt-3">
        <span className="text-light-blue font-semibold text-lg">
          API Requst Management
        </span>

        <p className="text-link-ash font-semibold text-sm">
          Home /{' '}
          <span className="text-black font-semibold text-sm">API Requests</span>
        </p>
      </div>

      <div className="col-start-1 col-end-13 px-4 pt-5">
        <span className="text-dark-blue font-semibold text-2xl ">
          API Requests
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
                    href="/admin/api/apirequestdetails"
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
                    href="/admin/api/apirequestdetails"
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
                    href="/admin/api/apirequestdetails"
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
                    href="/admin/api/apirequestdetails"
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
                    href="/admin/api/apirequestdetails"
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
                    href="/admin/api/apirequestdetails"
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
                    href="/admin/api/apirequestdetails"
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
                    href="/admin/api/apirequestdetails"
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
                    href="/admin/api/apirequestdetails"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default page

import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
      {/* <div classNameName="col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5 mt-3">
        <span classNameName="text-light-blue font-semibold text-lg">
          Attendance Management
        </span>

        <p classNameName="text-link-ash font-semibold text-sm">
          Home /{' '}
          <span classNameName="text-black font-semibold text-sm">
            Absence Reports
          </span>
        </p>
      </div>

      <div classNameName="col-start-1 col-end-13 px-4 pt-5">
        <span classNameName="text-dark-blue font-semibold text-2xl ">
          Absence Reports
        </span>
        
      </div> */}

      <div className="col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5 mt-3">
        <span className="text-light-blue font-semibold text-lg">
          Attendance Management
        </span>

        <p className="text-link-ash font-semibold text-sm">
          Home /{' '}
          <span className="text-black font-semibold text-sm">
            {' '}
            Absence Reports
          </span>
        </p>
      </div>

      <div className="col-start-1 col-end-13 px-4 pt-5">
        <span className="text-dark-blue font-semibold text-2xl ">
          Absence Reports
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
                    <label for="checkbox-all-search" className="sr-only">
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
                  Action
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
                    <label for="checkbox-table-search-1" className="sr-only">
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
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    View Report
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50 ">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-2"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2"
                    />
                    <label for="checkbox-table-search-2" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
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
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600  hover:underline"
                  >
                    View Report
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b  hover:bg-gray-50">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-2"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "
                    />
                    <label for="checkbox-table-search-2" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <div className="pl-3">
                    <div className="text-base font-semibold">Pasan Silva</div>
                    <div className="font-normal text-gray-500">
                      pasan@ucsc.cmb.lk
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">2019/IS/100</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{' '}
                    Accepted
                  </div>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    View Report
                  </a>
                </td>
              </tr>

              <tr className="bg-white border-b  hover:bg-gray-50">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-2"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "
                    />
                    <label for="checkbox-table-search-2" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <div className="pl-3">
                    <div className="text-base font-semibold">Pasan Silva</div>
                    <div className="font-normal text-gray-500">
                      pasan@ucsc.cmb.lk
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">2019/IS/100</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{' '}
                    Accepted
                  </div>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    View Report
                  </a>
                </td>
              </tr>

              <tr className="bg-white  hover:bg-gray-50 ">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-3"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <label for="checkbox-table-search-3" className="sr-only">
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
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    View Report
                  </a>
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

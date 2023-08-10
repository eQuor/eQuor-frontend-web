'use client'
import React, { useState } from 'react'
import { AiFillPlaySquare } from 'react-icons/ai'
import Sessioncard from './Sessioncard'

const page = () => {
  const [isSessionActive, setSessionActive] = useState(true)

  const subject = 'SCS1101 Database Management'
  return (
    <>
      <div className="col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5 mt-3">
        <span className="text-light-blue font-semibold text-lg">{subject}</span>

        <p className="text-link-ash font-semibold text-sm">
          Home / Modules /{' '}
          <span className="text-black font-semibold text-sm">{subject}</span>
        </p>
      </div>

      {isSessionActive ? (
        <>
          <div className="col-start-1 col-end-13 row-start-2 px-4 pt-5">
            <span className="text-dark-blue font-semibold text-2xl ">
              Active
            </span>
            <div className="overflow-x-auto mt-3 rounded-md">
              <table className="w-full text-sm text-left text-gray-400">
                <tbody>
                  <tr className="bg-white border-b border-gray-400">
                    <th
                      scope="row"
                      className="px-6 py-4  font-medium text-gray-400 whitespace-nowrap"
                    >
                      2023 / 07 / 30
                    </th>
                    <td className="px-6 py-4 ">8.00-10.00</td>
                    <td className="px-6 py-4">Mr.Kavinda Atapattu</td>
                    <td className="px-6 py-4 text-gray-350 text-2xl cursor-pointer">
                      <AiFillPlaySquare />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-start-1 col-end-13 row-start-4 row-end-5  px-4 pt-0">
            <span className="text-dark-blue font-semibold text-2xl">Past</span>
            <Sessioncard />
            <Sessioncard />
            <Sessioncard />
          </div>
        </>
      ) : (
        <>
          <div className="col-start-1 col-end-13 row-start-2 row-end-3  px-4 pt-5">
            <span className="text-dark-blue font-semibold text-2xl ">Past</span>
            <Sessioncard />
          </div>
        </>
      )}

      {/* <div className="col-start-1 col-end-13 row-start-2 row-end-3  px-4 pt-5">
        {isSessionActive ? (
          <>
            <span className="text-dark-blue font-semibold text-2xl ">
              Active
            </span>
            <span className="text-dark-blue font-semibold text-2xl"></span>
            <Sessioncard />
            <span className="text-dark-blue font-semibold text-2xl">Past</span>
            <Sessioncard />
            <Sessioncard />
          </>
        ) : (
          <>
            <Sessioncard />
          </>
        )}
      </div> */}
    </>
  )
}

export default page

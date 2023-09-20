"use client"
import React from 'react'
import Image from 'next/image'

const Group = () => {
  return (
    <>
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-dark-blue ">
            Group 1
          </h5>
          <input
            id="checkbox-all-search"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 ">
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/logo.svg"
                    className="w-8 h-8 rounded-full"
                    alt="profile"
                    width={37}
                    height={37}
                  ></Image>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-dark-blue truncate">
                    Tharusha Pathirana
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-dark-blue ">
                  Group 1
                </div>
              </div>
            </li>

            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/logo.svg"
                    className="w-8 h-8 rounded-full"
                    alt="profile"
                    width={37}
                    height={37}
                  ></Image>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-dark-blue truncate ">
                    Suresh Shrinath
                  </p>
                  <p className="text-sm text-gray-500 truncate 0">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-dark-blue ">
                  Group 2
                </div>
              </div>
            </li>

            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/logo.svg"
                    className="w-8 h-8 rounded-full"
                    alt="profile"
                    width={37}
                    height={37}
                  ></Image>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-dark-blue truncate ">
                    Madusha Aponsu
                  </p>
                  <p className="text-sm text-gray-500 truncate 0">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-dark-blue ">
                  Group 2
                </div>
              </div>
            </li>
            <li className="pt-3 pb-0 sm:pt-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/logo.svg"
                    className="w-8 h-8 rounded-full"
                    alt="profile"
                    width={37}
                    height={37}
                  ></Image>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-dark-blue truncate ">
                    Hirosima Siridewa
                  </p>
                  <p className="text-sm text-gray-500 truncate ">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-dark-blue ">
                  Group 3
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Group
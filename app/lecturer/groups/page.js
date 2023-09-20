'use client'
import React from 'react'
import Image from 'next/image'
import Group from '@components/Group'
import ProtectedRouteWRap from '@app/ProtectedRouteWRap'

const page = () => {
  return (
    <ProtectedRouteWRap>
      <div className="col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5 mt-3">
        <span className="text-light-blue font-semibold text-lg">Groups</span>

        <p className="text-link-ash font-semibold text-sm">
          Home /{' '}
          <span className="text-black font-semibold text-sm">Groups</span>
        </p>
      </div>

      <div className="col-start-1 col-end-6 row-start-2 px-4 pt-5 mt-3">
        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-dark-blue ">
              Online Users
            </h5>
            <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              View all
            </a>
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
                      Senith Uthsara
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-dark-blue">
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
                    <p className="text-sm font-medium text-dark-blue truncate">
                      Pasindu Weerasinghe
                    </p>
                    <p className="text-sm text-gray-500 truncate ">
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
      </div>

      <div className="col-start-5 col-end-13 row-start-2 px-4 pt-5 mt-3">
        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2">
          <div className="mr-4 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className="p-6">
              <h5 className="text-lg font-bold leading-none text-dark-blue mt-3">
                Manually Assign Group Members
              </h5>
              <button
                type="button"
                class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-3"
              >
                Create Group
              </button>
            </div>
          </div>

          <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className="p-6">
              <h5 className="text-lg font-bold leading-none text-dark-blue mt-3 ">
                Generate Random Groups
              </h5>
              <button
                type="button"
                class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-3"
              >
                Create Group
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 mt-2">
          <Group />

          <Group />
        </div>
      </div>
    </ProtectedRouteWRap>
  )
}

export default page

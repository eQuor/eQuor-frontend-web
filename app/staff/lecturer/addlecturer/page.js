'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
  const subject = 'Lecturerregistration'
  
 const router = useRouter()

 const handleClick = () => {
   router.push('/staff/lecturer')
 }

  return (
    <>
      <div className="col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5 mt-3">
        <span className="text-light-blue font-semibold text-lg">
          Lecturer Registration
        </span>

        <p className="text-link-ash font-semibold text-sm">
          Home / Lecturer /{' '}
          <span className="text-black font-semibold text-sm">Add Lecturer</span>
        </p>
      </div>

      <div className="col-start-3 col-end-13 row-start-1  m-24 p-5 sm:px-6 lg:px-8 w-[700px] h-[540px] justify-center bg-white rounded-lg shadow-lg overflow-y-auto scrollbar-hidden">
        <form action="" className="bg-white">
          <div>
            <h1 className="text-xl text-left text-[#012970] font-medium">
              Add Lecturer
            </h1>
          </div>
          <div className="h-12 bg-white"></div>
          <div className="text-base bg-white">
            <div>
              <label>Lecturer full name</label>
              <input
                type="text"
                autoComplete="none"
                required
                className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                placeholder="Name"
              />
            </div>
            <br />
            <div className="flex">
              <div>
                <label>Registration Number</label>
                <input
                  type="text"
                  autoComplete="none"
                  required
                  className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="2020/IS/027"
                />
              </div>
              <br />
              <div className="ml-10">
                <label>Index Number</label>
                <input
                  type="text"
                  autoComplete="none"
                  required
                  className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="2020/IS/027"
                />
              </div>
            </div>
            <br />
            <div>
              <label>Email</label>
              <input
                type="email"
                autoComplete="none"
                required
                className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="sam@gmail.com"
              />
            </div>
            <br />
            <div>
              <label>Address</label>
              <input
                type="text"
                autoComplete="none"
                required
                className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Apprtment,studio, or floor"
              />
            </div>
            <br />
            <div className="flex">
              <div>
                <div>
                  <label>Username</label>
                  <input
                    type="text"
                    autoComplete="none"
                    required
                    className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Username"
                  />
                </div>
                <br />
                <div>
                  <label>Password</label>
                  <input
                    type="password"
                    autoComplete="none"
                    required
                    className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
                <br />
              </div>
              <div className="ml-10">
                <label>Profile Picture</label>
                <input
                  type="text"
                  autoComplete="none"
                  required
                  className="h-32 appearance-none rounded-none static vlock w-full px-3 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <br />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="justify-self-end"></div>
            <div className="flex justify-self-end gap-4 ">
              <button
                className="group relative w-26 flex justify-self-end py-2 px-4 border border-transparent font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-base"
                onClick={handleClick}
              >
                Submit
              </button>
              <button
                className="group relative w-26 flex justify-self-end py-2 px-4 border border-transparent font-regular rounded-md text-white bg-[#6C757D] hover:bg-[#5a6268]
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-base"
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default page

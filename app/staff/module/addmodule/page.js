'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const addModule = () => {
  const subject = 'Module Management'


   const router = useRouter() 

   const handleClick = () => {
     router.push('/staff/module')
   }
  return (
    <>
      <div className="col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5 mt-3">
        <span className="text-light-blue font-semibold text-lg">
          Module Management
        </span>

        <p className="text-link-ash font-semibold text-sm">
          Home / Modules /{' '}
          <span className="text-black font-semibold text-sm">Add Module</span>
        </p>
      </div>

      <div className="col-start-4 col-end-13 p-5 w-[700px] h-[750px] justify-center bg-white rounded-lg shadow-lg overflow-y-auto">
        <form action="" className="bg-white">
          <div>
            <h1 className="text-xl text-left text-[#012970] font-medium">
              Add a Module
            </h1>
          </div>
          <div className="h-12 bg-white"></div>
          <div className="text-base bg-white">
            <div>
              <label>New Module Name</label>
              <input
                type="text"
                autoComplete="none"
                required
                className="static appearance-none rounded-none  vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                placeholder="Name"
              />
            </div>
            <br />
            <div>
              <label>Module Code</label>
              <input
                type="text"
                autoComplete="none"
                required
                className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Code here"
              />
            </div>
            <br />
            <div>
              <label>Semester Number</label>
              <input
                type="text"
                autoComplete="none"
                required
                className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Semester 1"
              />
            </div>
            <br />
            <div>
              <label>Current Lectures</label>
              <input
                type="text"
                autoComplete="none"
                required
                className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Madam"
              />
            </div>
            <br />
            <div>
              <label>Module Picture</label> <br></br>
              <input
                type="text"
                autoComplete="none"
                required
                className="h-32 w-64 appearance-none rounded-none relative vlock px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Picture"
              />
            </div>
            <br />
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

export default addModule

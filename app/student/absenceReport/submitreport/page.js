import React from 'react'
import ProtectedRouteWRap from '@app/ProtectedRouteWRap'


const medReport = () => {
  const subject = 'Absence Report'

  return (
     <ProtectedRouteWRap>
      <div className="col-start-1 col-end-9 row-start-1 row-end-1  px-4 pt-5">
        <span className="text-light-blue font-semibold text-lg">{subject}</span>

        <p className="text-link-ash font-semibold text-sm">
          Home / Student /{' '}
          <span className="text-black font-semibold text-sm">{subject}</span>
        </p>
      </div>

      <div className="col-start-4 col-end-13 p-5 w-[700px] h-[650px] justify-center bg-white rounded-lg shadow-lg overflow-y-auto">
        <form action="" className="bg-white">
          <div>
            <h1 className="text-xl text-left text-[#012970] font-medium">
              Student Medical Report
            </h1>
          </div>
          <div className="h-12 bg-white"></div>
          <div className="text-base bg-white">
            <div>
              <label>Student Full Name</label>
              <input
                type="text"
                autoComplete="none"
                required
                className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                placeholder="Tharusha Pathirana"
              />
            </div>
            <br />
            <div>
              <label>Strudent Adress</label>
              <input
                type="text"
                autoComplete="none"
                required
                className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Kurunegala"
              />
            </div>
            <br />
            <div>
              <label>Diagnosis</label>
              <input
                type="text"
                autoComplete="none"
                required
                className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Fever"
              />
            </div>
            <br />
            <div>
              <label>Unfit for ,</label>
              <label>From </label>
              <input
                type="text"
                autoComplete="none"
                required
                className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="20.07.2023"
              />
              <label>Until </label>
              <input
                type="text"
                autoComplete="none"
                required
                className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="23.07.2023"
              />
            </div>
            <br />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="justify-self-end"></div>
            <div className="flex justify-self-end gap-4 ">
              <button
                className="group static w-26 flex justify-self-end py-2 px-4 border border-transparent font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-base"
              >
                Accept
              </button>
              <button
                className="group static w-26 flex justify-self-end py-2 px-4 border border-transparent font-regular rounded-md text-white bg-[#6C757D] hover:bg-[#5a6268]
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-base"
              >
                Reject
              </button>
            </div>
          </div>
        </form>
      </div>
    </ProtectedRouteWRap>
  )
}

export default medReport

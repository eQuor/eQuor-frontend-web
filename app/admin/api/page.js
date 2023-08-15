import React from 'react'

const page = () => {
  return (
    <>
      <div className="col-start-1 col-end-12 row-start-1 row-end-1  px-4 pt-5 mt-3">
        <span className="text-light-blue font-semibold text-lg">
          API Requst Management
        </span>

        <p className="text-link-ash font-semibold text-sm">
          Home / API Requests /{' '}
          <span className="text-black font-semibold text-sm">
            API Request Details
          </span>
        </p>
      </div>

      {/* <div className="col-start-1 col-end-12 row-start-2   px-4 pt-5 mt-3">
        <span className="text-dark-blue font-semibold text-2xl ">
          API Request Details
        </span>
      </div> */}

      <div className="col-start-3 col-end-11 row-start-3 px-4 pt-0  ">
        <form className="bg-white rounded shadow-lg px-4 py-3">
          <div className="mb-6 mt-2">
            <span className="text-dark-blue font-semibold text-2xl ">
              API Request Details
            </span>
          </div>

          <div className="mb-6 mt-2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Request Sender's Full Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Tharusha Pathirana"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="id"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Sender's Address
            </label>
            <input
              type="text"
              id="id"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Colombo"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              University or Department
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Colombo"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Request Purpose
            </label>
            <input
              type="text"
              id="address"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Attendance Collecting for Mahapola Fund"
              required
            />
          </div>
          <div className="mb-3  flex justify-end">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2 text-center "
            >
              Submit
            </button>
            <button
              type="submit"
              className="text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2 text-center  ml-5 "
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default page

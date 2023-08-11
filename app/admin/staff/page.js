import React from 'react'

const page = () => {
  return (
    <>
      <div className="col-start-1 col-end-12 row-start-1 row-end-1  px-4 pt-5 mt-3">
        <span className="text-light-blue font-semibold text-lg">
          Staff Member
        </span>

        <p className="text-link-ash font-semibold text-sm">
          Home / Staff Member /{' '}
          <span className="text-black font-semibold text-sm">
            Add Staff Member
          </span>
        </p>
      </div>

      <div className="col-start-3 col-end-11 row-start-3 px-4 pt-0  ">
        <form className="bg-white rounded shadow-lg px-4 py-3">
          <span className="text-dark-blue font-semibold text-2xl ">
            Add a Staff Member
          </span>
          <div className="mb-6 mt-2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Staff Member Full Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="id"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Staff Member ID
            </label>
            <input
              type="text"
              id="id"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="20001258"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Name"
              required
            />
          </div>

          <div>
            <div className="mb-6">
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                User Name
              </label>
              <input
                type="text"
                id="username"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              />
            </div>
            <div className="mb-6 ">
              <label
                htmlFor="repeat-password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type="password"
                id="repeat-password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>

            {/* <div className="mb-6">
              <label
                htmlFor="profile-picture"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Profile Picture
              </label>
              <input
                type="text"
                id="profile-picture"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              />
            </div> */}
          </div>
          {/* <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                required
              />
            </div>
            <label
              htmlFor="terms"
              className="ml-2 text-sm font-medium text-gray-900 "
            >
              I agree with the{' '}
              <a href="#" className="text-blue-600 hover:underline">
                terms and conditions
              </a>
            </label>
          </div> */}
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Register new account
          </button>
        </form>
        {/* <div>
          <URLFilter />
        </div> */}
      </div>
    </>
  )
}

export default page

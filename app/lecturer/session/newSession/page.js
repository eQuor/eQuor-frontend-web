import React from 'react'

const page = () => {
     const subject = 'SCS1101 Database Management'
    return (
      <>
        <div className="col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5 mt-3">
          <span className="text-light-blue font-semibold text-lg">
            {subject}
          </span>

          <p className="text-link-ash font-semibold text-sm">
            Home / Modules /SCS1101 Database Management/{' '}
            <span className="text-black font-semibold text-sm">
              New Session
            </span>
          </p>
        </div>

        <div className="col-start-1 col-end-13 row-start-2   px-4 pt-5 mt-3 mx-5 bg-white">
          <span className="text-dark-blue font-semibold text-2xl ">
            Create New Session
          </span>
        </div>

        <div className="col-start-1 col-end-13 row-start-3 row-end-7 px-4 pt-5 mt-3 mx-5 bg-white flex justify-between">
          <a
            href="#"
            className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          
          </a>
          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>

          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
        </div>

        {/* <div className="col-start-3 col-end-11 row-start-3 px-4 pt-0  ">
                <div className="bg-white rounded shadow-lg px-4 py-3"></div>
            </div> */}
      </>
    )
}

export default page
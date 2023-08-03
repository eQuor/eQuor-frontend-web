import React from 'react'

const page = () => {
  return (
    <>
      <div className="col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5 mt-3">
        <span className="text-light-blue font-semibold text-lg">
          Medical Submission
        </span>

        <p className="text-link-ash font-semibold text-sm">
          Home /{' '}
          <span className="text-black font-semibold text-sm">
            Medical Submission
          </span>
        </p>

        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Module
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b   hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">React Developer</td>

                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="pl-3">
                    <div className="text-base font-semibold">Neil Sims</div>
                    <div className="font-normal text-gray-500">
                      neil.sims@flowbite.com
                    </div>
                  </div>
                </th>

                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                    Online
                  </div>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">Designer</td>

                <th
                  scope="row"
                  className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="pl-3">
                    <div className="text-base font-semibold">Bonnie Green</div>
                    <div className="font-normal text-gray-500">
                      bonnie@flowbite.com
                    </div>
                  </div>
                </th>

                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                    Online
                  </div>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">Vue JS Developer</td>

                <th
                  scope="row"
                  className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="pl-3">
                    <div className="text-base font-semibold">Jese Leos</div>
                    <div className="font-normal text-gray-500">
                      jese@flowbite.com
                    </div>
                  </div>
                </th>

                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                    Online
                  </div>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">UI/UX Engineer</td>

                <th
                  scope="row"
                  className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="pl-3">
                    <div className="text-base font-semibold">Thomas Lean</div>
                    <div className="font-normal text-gray-500">
                      thomes@flowbite.com
                    </div>
                  </div>
                </th>

                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                    Online
                  </div>
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">SEO Specialist</td>

                <th
                  scope="row"
                  className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="pl-3">
                    <div className="text-base font-semibold">Leslie Livingston</div>
                    <div className="font-normal text-gray-500">
                      leslie@flowbite.com
                    </div>
                  </div>
                </th>

                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                    Offline
                  </div>
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

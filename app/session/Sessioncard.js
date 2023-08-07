import React from 'react'
import { AiFillPlaySquare, } from 'react-icons/ai'
import { sessionData } from './data'


const Sessioncard = () => {

  sessionData.map((data) => (
  console.log(data.lecturer)
))


  return (
    <div className="overflow-x-auto mt-3 rounded-md">
      <table className="w-full text-sm text-left text-gray-400">
        <tbody>
          {sessionData.map((data) => {
            const {id, date, time, lecturer} = data
            return (
              <tr className="bg-white border-b border-gray-400" key={id}>
                <th
                  scope="row"
                  className="px-6 py-4  font-medium text-gray-400 whitespace-nowrap"
                >
                  {date}
                </th>
                <td className="px-6 py-4 ">{time}</td>
                <td className="px-6 py-4">{lecturer}</td>
                <td className="px-6 py-4 text-gray-350 text-2xl cursor-pointer">
                  <AiFillPlaySquare />
                </td>
              </tr>
            )
          })
         
          }
        </tbody>
      </table>
    </div>
  )
}

export default Sessioncard
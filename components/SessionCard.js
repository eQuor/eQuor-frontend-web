import React from 'react'
import { AiFillPlaySquare } from 'react-icons/ai'

const SessionCard = ({ id, date, start_time,end_time, name, is_active }) => {
  return (
    <>
      <table className="w-full text-sm text-left text-gray-400">
        <tbody>
          <tr className="bg-white border-b border-gray-400">
            <th
              scope="row"
              className="px-6 py-4  font-medium text-gray-400 whitespace-nowrap"
            >
              {date}
            </th>
            <td className="px-6 py-4">{`Start Time-${start_time}`}</td>
            <td className="px-6 py-4">{`End Time-${end_time}`}</td>
            <td className="px-6 py-4">{name}</td>
            <td className="px-6 py-4 text-gray-350 text-2xl cursor-pointer">
              <AiFillPlaySquare />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default SessionCard
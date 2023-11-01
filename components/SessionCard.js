"use client"
import React from "react";
import { AiFillPlaySquare } from "react-icons/ai";

const SessionCard = ({ id, date, start_time, end_time, name, is_active }) => {
  return (
    <>
      <table className="w-full text-sm text-left text-gray-500">
        <tbody>
          <tr className="bg-white border-b-2 h-16">
            <th
              scope="row"
              className="w-1/4 px-4 py-2 font-medium text-gray-500 whitespace-nowrap"
            >
              {date}
            </th>
            <td className="w-1/4 px-4 py-2 truncate">{`Start Time-${start_time}`}</td>
            <td className="w-1/4 px-4 py-2 truncate">{`End Time-${end_time}`}</td>
            <td className="w-1/4 px-4 py-2 truncate">{name}</td>
            <td className="w-1/4 px-8 py-2">
              <AiFillPlaySquare />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default SessionCard;

import React from "react";
import { AiFillPlaySquare } from "react-icons/ai";
import { sessionData } from "./data";
import { useRouter } from "next/navigation";

const SessioncardPast = ({
  id,
  date,
  start_time,
  end_time,
  name,
  is_active,
}) => {
  const router = useRouter();
  return (
    <>
         <table className="w-full text-sm text-left text-gray-400">
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
            <td className="w-1/4 px-8 py-2cursor-pointer">
            <button 
              className='bg-light-blue  w-[150px] h-[40px] rounded-[50px] text-white text-center text-sm'>View Attendance</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default SessioncardPast;


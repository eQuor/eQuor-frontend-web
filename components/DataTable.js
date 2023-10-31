import React, { useState } from "react";
import { useTable } from "react-table";
import { useRouter } from 'next/navigation'

const DataTable = ({ columns, data, onRowClick }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <div className="pl-8 ">
        <div>
          <table
            {...getTableProps()}
            className="border-separate bg-white border pl-5 pt-5 pr-5 rounded-md w-[100%]"
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps()}
                      className="bg-[#DFDFDFB0] border-red-500 rounded-md text-gray-600 font-bold font-Open Sans text-lg p-1"
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    onClick={() => onRowClick(row.original)} // Added onClick handler
                    className="cursor-pointer hover:bg-gray-200" // Add hover effect
                  >
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        className="p-2 text-center font-Open Sans text-base bg-white  text-gray-500"
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DataTable;

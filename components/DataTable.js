import React, { useState } from "react";
import { useTable } from "react-table";

const DataTable = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const [searchQuery, setSearchQuery] = useState("");

  
  return (
    <>
    <div className="pl-8 ">
      
      <div>
        {" "}
        <table
          {...getTableProps()}
          className=" border-separate bg-[#C7C7C7] border  rounded-md w-[100%]"
        >
          <thead>
            {headerGroups.map((headerGroup,index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column,index) => (
                  <th
                    {...column.getHeaderProps()}
                    className="bg-[#E7E7E7] border-red-500 text-gray-600 font-bold font-Open Sans text-lg p-1"
                    key={index}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row,index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell,index) => (
                    <td
                      {...cell.getCellProps()}
                      className="p-2 font-Open Sans text-base bg-white  text-gray-500"
                      key={index}
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

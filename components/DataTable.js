import React, { useState } from 'react';
import { useTable } from 'react-table';


const DataTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  const [searchQuery, setSearchQuery] = useState('');

  // const filteredData = data.filter((row) =>
  //   row.cells.some((cell) =>
  //     cell.value.toString().toLowerCase().includes(searchQuery.toLowerCase())
  //   )
  // );

  return (
    <div className="pl-8 ">
      <input
  type="text"
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  placeholder="Search here"
  className="p-2 pl-8 mb-4 w-full border border-gray-300 rounded" 
/>
   <div className=" p-4 bg-blue-100"> <table
      {...getTableProps()}
      className=" p-4 border-collapse border border-gray-200 "
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                className=" border-red-500 bg-gray-200 text-gray-600 font-bold font-Open Sans text-lg px-4 py-2"
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  className="p-4 font-Open Sans text-base bg-white  text-gray-500"
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
    </div>
  );
};

export default DataTable;

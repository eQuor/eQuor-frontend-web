"use client";
import Button from "@components/Button";
import DataTable from "@components/DataTable";

import TabsContainer from "@components/Tabscontent";
import React from "react";

const data = [
  { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', age: 23 },
  { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', age: 23 },
  { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', age: 23 },
  { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', age: 23 },
  { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', age: 23 },
  { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', age: 23 },
  { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', age: 23 },
  { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', age: 23 },
  { id: 1,name: 'Manag Lama', reg: '2020/IS/027',ind: 20020279, email: 'maan@gmail.com', age: 23 },
  
  // Add more data as needed
];

const columns = [
  { Header: '#', accessor: 'id' },
  { Header: 'Student name', accessor: 'name' },
  { Header: 'Reg No', accessor: 'reg' },
  { Header: 'Index No', accessor: 'ind' },
  { Header: 'Email', accessor: 'email' },
  { Header: 'Action', accessor: 'age' },
];

const page = () => {
  return (
    <>
      {/* <div className=" col-start-1 col-end-13  ">
        <TabsContainer />
      </div> */}
      <div className="col-start-1 col-end-12 row-start-1 row-end-1  px-4 pt-5 mt-3">
        <span className="text-light-blue font-semibold text-lg">
          API Requst Management
        </span>

        <p className="text-link-ash font-semibold text-sm">
          Home /{' '}
          <span className="text-black font-semibold text-sm">
            API Requests
          </span>
        </p>
      </div>

      <div className=" font-semibold text-[#012970] text-3xl col-start-1 col-end-13  pl-12  pt-10 ">
        <h1>API Requests</h1>
      </div>

      <div className="">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  )
};

export default page;

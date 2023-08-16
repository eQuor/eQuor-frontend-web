"use client";
import React, { useState } from "react";
import DataTable from "@components/DataTable";
import { useRef } from "react";
import { useEffect } from "react";
import axios from "axios";
import TabsContainer from "@components/Tabscontent";
import Button from "@components/Button";
import Search from "@components/Search";

function page() {
  const tableRef = useRef(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3001/api/v1/staff/getStudent",
      responseType: "json",
    }).then(function (response) {
      setData(response.data);
      let i = 1;
      response.data.forEach((element) => {
        element.action = 1;
        element.index = i;
        i++;
      });
    });
  }, []);

  const columns = [
    { Header: "#", accessor: "index" },
    { Header: "Student Name", accessor: "fullName" },
    { Header: "User Name", accessor: "userName" },
    { Header: "Reg No", accessor: "regNo" },
    { Header: "Index No", accessor: "indexNo" },
    { Header: "Email", accessor: "email" },
    { Header: "Address", accessor: "address" },
  ];

  return (
    <>
      <div className="col-start-1 col-end-13 ">
        <TabsContainer />
      </div>
      <div className='  col-start-1 col-end-13 row-start-2 row-end-3 pl-8  pt-5 '>
        <h1 className='text-xl font-normal text-[#4154F1] bg-#F0F4FB'>
          {" "}
          Student Management
        </h1>
        <p className=' text-xs font-normal'>Home / Students</p>
      </div>

      <div className='w-[950px] pl-10 '>
        <Search />
      </div>
      <div className=' col-start-4 col-end-7'>
        <Button
          title={"Add Student"}
          url={'/staff/student/addstudent'}
        />
      </div>

      <div className=' font-semibold text-[#012970] text-3xl col-start-1 col-end-13  pl-12  pt-10 '>
        <h1>Current Students</h1>
      </div>

      <div className='col-start-1 col-end-13 row-start-5 px-4 pt-5'>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}

export default page;

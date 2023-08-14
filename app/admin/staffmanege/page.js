"use client";
import Button from "@components/Button";
import DataTable from "@components/DataTable";
import Search from "@components/Search";
import TabsContainer from "@components/Tabscontent";
import React from "react";

const page = () => {
  const data = [
    { id: 1,sname: 'Manag Lama', mid: '2020/IS/027',email: 20020279, addr: 'maan@gmail.com', action: 23 },
    { id: 1,sname: 'Manag Lama', mid: '2020/IS/027',email: 20020279, addr: 'maan@gmail.com', action: 23 },
    { id: 1,sname: 'Manag Lama', mid: '2020/IS/027',email: 20020279, addr: 'maan@gmail.com', action: 23 },
    { id: 1,sname: 'Manag Lama', mid: '2020/IS/027',email: 20020279, addr: 'maan@gmail.com', action: 23 },
    { id: 1,sname: 'Manag Lama', mid: '2020/IS/027',email: 20020279, addr: 'maan@gmail.com', action: 23 },
    { id: 1,sname: 'Manag Lama', mid: '2020/IS/027',email: 20020279, addr: 'maan@gmail.com', action: 23 },
    { id: 1,sname: 'Manag Lama', mid: '2020/IS/027',email: 20020279, addr: 'maan@gmail.com', action: 23 },
    { id: 1,sname: 'Manag Lama', mid: '2020/IS/027',email: 20020279, addr: 'maan@gmail.com', action: 23 },
    { id: 1,sname: 'Manag Lama', mid: '2020/IS/027',email: 20020279, addr: 'maan@gmail.com', action: 23 },
    
    // Add more data as needed
  ];

  const columns = [
    { Header: '#', accessor: 'id' },
    { Header: 'Staff Member Name', accessor: 'sname' },
    { Header: 'Member ID', accessor: 'mid' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Address', accessor: 'addr' },
    { Header: 'Action', accessor: 'action' },
  ];

  return (
    <>
      <div className=" bg-white  col-start-1 col-end-13 row-start-1 row-end-2 pl-8  pt-5 ">
        <TabsContainer />
      </div>
      <div className="  col-start-1 col-end-13 row-start-2 row-end-3 pl-8  pt-5 ">
        <h1 className="text-xl font-normal text-[#4154F1] bg-#F0F4FB">
          {" "}
          IS3116 Database Management System
        </h1>
        <p className=" text-xs font-normal">
          Home/Attendance/Attendance Reports
        </p>
      </div>

      <div className="w-[950px] pl-10 ">
        <Search />
      </div>
      <div className=" col-start-4 col-end-7">
        <Button title={"Add Staff Member"} />
      </div>

      <div className=" font-semibold text-[#012970] text-3xl col-start-1 col-end-13  pl-12  pt-10 ">
        <h1>Current Staff members</h1>
      </div>

      <div className="" >
      <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default page;

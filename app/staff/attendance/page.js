"use client";
import Button from "@components/Button";
import React from "react";
import TabsContainer from "@components/Tabscontent";
import DataTable from "@components/DataTable";
import YearDropdown from "@components/YearDropdown";
import MonthDropdown from "@components/MonthDropdown";
import DateDropdown from "@components/DateDropdown";

const Home = () => {
  const data = [
    {
      id: 1,
      name: "Manag Lama",
      reg: "2020/IS/027",
      ind: 20020279,
      email: "maan@gmail.com",
      age: 23,
    },
    {
      id: 1,
      name: "Manag Lama",
      reg: "2020/IS/027",
      ind: 20020279,
      email: "maan@gmail.com",
      age: 23,
    },
    {
      id: 1,
      name: "Manag Lama",
      reg: "2020/IS/027",
      ind: 20020279,
      email: "maan@gmail.com",
      age: 23,
    },
    {
      id: 1,
      name: "Manag Lama",
      reg: "2020/IS/027",
      ind: 20020279,
      email: "maan@gmail.com",
      age: 23,
    },
    {
      id: 1,
      name: "Manag Lama",
      reg: "2020/IS/027",
      ind: 20020279,
      email: "maan@gmail.com",
      age: 23,
    },
    {
      id: 1,
      name: "Manag Lama",
      reg: "2020/IS/027",
      ind: 20020279,
      email: "maan@gmail.com",
      age: 23,
    },
    {
      id: 1,
      name: "Manag Lama",
      reg: "2020/IS/027",
      ind: 20020279,
      email: "maan@gmail.com",
      age: 23,
    },
    {
      id: 1,
      name: "Manag Lama",
      reg: "2020/IS/027",
      ind: 20020279,
      email: "maan@gmail.com",
      age: 23,
    },
    {
      id: 1,
      name: "Manag Lama",
      reg: "2020/IS/027",
      ind: 20020279,
      email: "maan@gmail.com",
      age: 23,
    },

    // Add more data as needed
  ];

  const columns = [
    { Header: "#", accessor: "id" },
    { Header: "Student name", accessor: "name" },
    { Header: "Reg No", accessor: "reg" },
    { Header: "Index No", accessor: "ind" },
    { Header: "Email", accessor: "email" },
    { Header: "Action", accessor: "age" },
  ];

  return (
    <>
      <div className=" col-start-1 col-end-13  ">
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

      <div className="bg-white col-start-2  col-end-11 row-start-3 row-end-5 flex gap-x-12  pl-12  items-center ">
        <div className="flex justify-center items-center   ">
          <YearDropdown />
        </div>
        <div className="flex justify-center items-center  ">
          <MonthDropdown />
        </div>
        <div className="flex justify-center items-center ">
          <DateDropdown />
        </div>

        <div className=" col-start-7 col-end-10 pl-10">
          <Button title={"Generate Report"} />
        </div>
      </div>
      <div className=" text-white text-center text-sm col-start-11 col-end-12 row-start-4 row-end-5 ml-4 "></div>

      <div className="  col-start-1 col-end-13 row-start-5 row-end-6 pl-12  pt-10 ">
        <h1 className="text-xl font-semibold text-dark-blue bg-#F0F4FB">
          Student attendance Details for this month
        </h1>
      </div>

      <div className="col-start-1 col-end-13  px-4 pt-5">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default Home;

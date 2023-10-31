"use client";
import Button from "@components/Button";
import React, { useEffect, useState } from "react";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import TabsContainer from "@components/Tabscontent";
import DataTable from "@components/DataTable";
import ProtectedRouteWRap from "@app/ProtectedRouteWRap";
import { axiosGet } from "@common/basicAxios";
import { PHASE_DEVELOPMENT_SERVER } from "next/dist/shared/lib/constants";

const Home = () => {
  const [piechartdata, setData] = useState({
    allStudent: 0,
    attendStudent: 0,
  });
  const getResponse = async () => {
    const response = await axiosGet("/lecture/studentAttendSession/");
    if (response.status == 200) {
      console.log("axios wed");
      let i = 1;
      let resdata = response.data;

      setData(resdata);
      console.log(resdata);
    } else {
      console.log("error while fetching API");
    }
    return response;
  };
  useEffect(() => {
    console.log("useEffect is running");
    const response = getResponse();
  }, []);

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

  const datapie = [
    { name: "present students", value: piechartdata.attendStudent },
    {
      name: "abesent students",
      value: piechartdata.allStudent - piechartdata.attendStudent,
    },
    // { name: 'present students', value: 200 },
    // {
    //   name: 'abesent students',
    //   value:100,
    // },
  ];
  const COLORS = ["#012970", "#899BBD"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ProtectedRouteWRap>
      <div className="col-start-1 col-end-13 ">
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

      <div className=" font-semibold text-[#012970] text-lg col-start-1 col-end-13 row-start-3 row-end-4 pl-12  pt-4 ">
        <h1>
          IS3116 Database Management System Attendance Report - 2023.07.25
        </h1>
      </div>

      <div className=" text-white text-center text-sm col-start-11 col-end-12 row-start-4 row-end-5 ">
        <button className="bg-light-blue w-[210px] h-[50px] rounded-[5px] ">
          Download Report
        </button>
      </div>

      <div className=" bg-white col-start-9 col-end-12 row-start-4 row-end-7 rounded-[5px]  ">
        <div className=" text-center text-xl  font-semibold text-[#012970] pt-3">
          <h1 className="pt-5">Number of Quiz events</h1>
          <h1 className="pt-5 text-4xl">2</h1>
          <h1 className="pt-5">Number of Polls</h1>
          <h1 className="pt-5 text-4xl">0</h1>
        </div>
      </div>
      <div className="  col-start-1 col-end-13 row-start-7 row-end-8 pl-12  pt-10 ">
        <h1 className="text-xl font-semibold text-dark-blue bg-#F0F4FB">
          {" "}
          Student attendance Details for this month
        </h1>
      </div>

      <div className=" col-start-1 col-end-13 row-start-4 row-end-7   pl-8  ">
        <ResponsiveContainer width="100%" height="100%" className="">
          <PieChart width={400} height={400}>
            <Pie
              className=" static !important "
              data={datapie}
              cx="15%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={110}
              fill="#899BBD80"
              dataKey="value"
            >
              {datapie.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className=" text-center  col-start-5 col-end-7 row-start-5 row-end-7 ">
        <h1 className="bg-[#012970] text-white rounded-[5px] w-[250px] h-[28px] ">
          Total Present Students - {piechartdata.attendStudent}
        </h1>

        <h1 className="bg-[#989797] text-dark-blue rounded-[5px] w-[250px] h-[28px] mt-5 ">
          Total Absent Students -{" "}
          {piechartdata.allStudent - piechartdata.attendStudent}
        </h1>
      </div>

      <div className="col-start-1 col-end-13  px-4 pt-5">
        <DataTable columns={columns} data={data} />
      </div>
    </ProtectedRouteWRap>
  );
};

export default Home;

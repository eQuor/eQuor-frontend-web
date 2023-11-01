"use client";
import React, { useEffect, useState } from "react";
import { axiosGet } from "@common/basicAxios";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import ProtectedRouteWRap from "@app/ProtectedRouteWRap";
import axios from "axios";
import config from "@configuration/config";
import { useAuth } from "@contexts/authContext";
import { useRouter } from "next/navigation";

const staffDashboard = () => {
  const router = useRouter();
  const { authUser, setAuthUser } = useAuth();
  // const subject = "Dashboard";
  const [memberData, setData] = useState({
    totalLecture: 0,
    totalStaff: 0,
    totalStudent: 0,
  });
  const getResponse = async () => {
    if (authUser === null) {
      router.push("/auth/signin");
    } else {
      const jwt_token = authUser.jwtToken;
      const response = await axios.get(
        config.API_BASE_URL + config.API_VERSION + "/admin/adminDashboard/",
        {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
          },
        }
      );
      // const response = await axiosGet("/admin/adminDashboard/");
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
    }
  };
  useEffect(() => {
    console.log("useEffect is running");
    const response = getResponse();
  }, []);



  const datapie = [
    { name: "present students", value: 500 },
    { name: "abesent students", value: 300 },
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
        asfawf
        {/* {`${(percent * 100).toFixed(0)}%`} */}
      </text>
    );
  };

  return (
    <ProtectedRouteWRap>
      <div className="  col-start-1 col-end-13  pl-8  pt-5 ">
        <h1 className="text-xl font-normal text-[#4154F1] bg-#F0F4FB">
          {" "}
          Dashboard
        </h1>
        <p className=" text-xs font-normal">Home / Dashboard</p>
      </div>

      {/* .................cards........................... */}
      <div className="col-start-2 col-end-12 row-start-2 row-end-4 container mx-auto mt-4 flex gap-4 ">
        <div className="flex-1 transition duration-300 transform hover:scale-105">
          <div className="bg-white p-6 rounded shadow-md">
            <h1 className="text-lg font-medium text-light-blue">
              Total staff Members
            </h1>
            <br></br>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
              <div>
                <h1 className="text-4xl font-bold text-light-blue">
                  {memberData.totalStaff}
                </h1>
              </div>
              <br></br>
            </div>
          </div>
        </div>

        <div className="flex-1 transition duration-300 transform hover:scale-105">
          <div className=" bg-white p-6 rounded shadow-md">
            <h1 className="text-lg font-medium text-light-blue">
              Total Lecturers
            </h1>
            <br></br>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
              <div>
                <h1 className="text-4xl font-bold text-light-blue">
                  {memberData.totalLecture}
                </h1>
              </div>
              <br></br>
            </div>
          </div>
        </div>

        <div className="flex-1 transition duration-300 transform hover:scale-105">
          <div className=" bg-white p-6 rounded shadow-md">
            <h1 className="text-lg font-medium text-light-blue">
              Total Students
            </h1>
            <br></br>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
              <div>
                <h1 className="text-4xl font-bold text-light-blue">
                  {memberData.totalStudent}
                </h1>
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      {/* .................cards end here .......................  */}

      

      <div className="col-start-2 col-end-6 row-start-4 row-end-7  h-[280px] text-center mt-10 bg-white  ">
        <p className="text-lg font-medium text-dark-blue ">
          Total Attendance for this month
        </p>

        {/* <ResponsiveContainer width="100%" height="100%" className="">
          {/* <PieChart className=" -top-3" width={300} height={300}> */}
            {/* <Pie
              className=" static !important "
              data={datapie}
              // cx="15%"
              // cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={110}
              fill="#899BBD80"
              dataKey="value"
            >
              {datapie.map((entry, index) => (
                <Cell
                  key={cell-${index}}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart> */}
        {/* </ResponsiveContainer> */} 
      </div>
      <div className=" text-center felx items-center col-start-7 col-end-13 pt-10 row-start-5 row-end-8 ">
        <h1 className="bg-[#012970] text-white rounded-[10px] w-[420px] h-[40px] ">
          Total this month Present Students - {}
        </h1>

        <h1 className="bg-[#989797] text-dark-blue rounded-[10px] w-[420px] h-[40px] mt-5 ">
          Total this month Absent Students - {}
        </h1>
      </div>
    </ProtectedRouteWRap>
  );
};

export default staffDashboard;
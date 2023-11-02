"use client";
import React, { useEffect, useState } from "react";
import { axiosGet } from "@common/basicAxios";
import staffdash from "../../public/staffdash.svg";
import Image from "next/image";

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
    { name: "present students", value: memberData.totalStaff },
    { name: "abesent students", value: memberData.totalLecture },
    { name: "abesent students", value: memberData.totalStudent },
  ];
  const COLORS = ["#012970", "#899BBD","#4154F1"];

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
    const z = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        z={z}
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
              <div className="w-10 h-10 bg-[#012970] rounded-full"></div>
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
              <div className="w-10 h-10 bg-[#899BBD] rounded-full"></div>
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
              <div className="w-10 h-10 bg-[#4154F1] rounded-full"></div>
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

        <ResponsiveContainer width="100%" height="100%" className="">
          <PieChart className=" -top-3" width={300} height={300}>
            <Pie
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
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="col-start-8 w-[310px] mt-20  row-start-4 row-end-7  "><Image src={staffdash} alt='staff' className=' ' /></div>
    
    </ProtectedRouteWRap>
  );
};

export default staffDashboard;
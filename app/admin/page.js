"use client";

import React from "react";
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
import RouteProtector from "@app/routeProtector";

const adminDashboard = () => {
  const subject = "Dashboard";

  const datare = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

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
        fill='white'
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline='central'
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      <div className='  col-start-1 col-end-13  pl-8  pt-5 '>
        <h1 className='text-xl font-normal text-[#4154F1] bg-#F0F4FB'>
          {" "}
          Dashboard
        </h1>
        <p className=' text-xs font-normal'>Home / Dashboard</p>
      </div>

      {/* .................cards........................... */}
      <div className='col-start-2 col-end-12 row-start-2 row-end-4 container mx-auto mt-4 flex gap-4 '>
        <div className='flex-1 transition duration-300 transform hover:scale-105'>
          <div className='bg-white p-6 rounded shadow-md'>
            <h1 className='text-lg font-medium text-light-blue'>
              Total staff Members
            </h1>
            <br></br>
            <div className='flex gap-4'>
              <div className='w-10 h-10 bg-blue-500 rounded-full'></div>
              <div>
                <h1 className='text-4xl font-bold text-light-blue'>100</h1>
              </div>
              <br></br>
            </div>
          </div>
        </div>

        <div className='flex-1 transition duration-300 transform hover:scale-105'>
          <div className=' bg-white p-6 rounded shadow-md'>
            <h1 className='text-lg font-medium text-light-blue'>
              Total Lecturers
            </h1>
            <br></br>
            <div className='flex gap-4'>
              <div className='w-10 h-10 bg-blue-500 rounded-full'></div>
              <div>
                <h1 className='text-4xl font-bold text-light-blue'>145</h1>
              </div>
              <br></br>
            </div>
          </div>
        </div>

        <div className='flex-1 transition duration-300 transform hover:scale-105'>
          <div className=' bg-white p-6 rounded shadow-md'>
            <h1 className='text-lg font-medium text-light-blue'>
              Total Students
            </h1>
            <br></br>
            <div className='flex gap-4'>
              <div className='w-10 h-10 bg-blue-500 rounded-full'></div>
              <div>
                <h1 className='text-4xl font-bold text-light-blue'>320</h1>
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      {/* .................cards end here .......................  */}

      <div className='col-start-2 col-end-7 row-start-4 row-end-7 h-[280px] text-center  mt-10 bg-white'>
        <p className='text-lg font-medium text-dark-blue '>
          Attendance Growth This Month
        </p>
        <ResponsiveContainer width='100%' height='100%'>
          <AreaChart
            width={500}
            height={400}
            data={datare}
            margin={{
              top: 0,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='uv'
              stroke='#8884d8'
              fill='#8884d8'
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className='col-start-8 col-end-12 row-start-4 row-end-7  h-[280px] text-center mt-10 bg-white  '>
        <p className='text-lg font-medium text-dark-blue '>
          Total Attendance for this month
        </p>

        <ResponsiveContainer width='100%' height='100%' className=''>
          <PieChart className=' -top-3' width={300} height={300}>
            <Pie
              className=' static !important '
              data={datapie}
              // cx="15%"
              // cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={110}
              fill='#899BBD80'
              dataKey='value'
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
    </>
  );
};

export default adminDashboard;

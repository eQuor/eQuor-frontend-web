"use client";
import Button from "@components/Button";
import DataTable from "@components/DataTable";
import Search from "@components/Search";
import TabsContainer from "@components/Tabscontent";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProtectedRouteWRap from "@app/ProtectedRouteWRap";

function tabViews({ columns, data }) {
  return <DataTable columns={columns} data={data} />;
}

const columns = [
  { Header: "#", accessor: "index" },
  { Header: "Full Name", accessor: "full_name" },
  { Header: "Email", accessor: "email" },
  { Header: "Address", accessor: "address" },
  { Header: "Action", accessor: "action" },
];

const Page = () => {
  const [data, setData] = useState([]);
  const getResponse = async () => {
    const response = await axiosGet("/staff");
    if (response.status == 200) {
      let i = 1;
      let resdata = response.data._embedded.staff;
      resdata.forEach((element) => {
        element.action = 1;
        element.index = i;
        i++;
      });
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

  return (
    <ProtectedRouteWRap>
      <div className=' col-start-1 col-end-13  '></div>
      <div className='  col-start-1 col-end-13 row-start-2 row-end-3 pl-8  pt-5 '>
        <h1 className='text-xl font-normal text-[#4154F1] bg-#F0F4FB'>
          {" "}
          API Request Management
        </h1>
        <p className=' text-xs font-normal'>Home/API requests</p>
      </div>

      <div className='w-[950px] pl-10 '>
        <Search />
      </div>
      <div className=' col-start-4 col-end-7'>
        <Button title={"Revoked API Requests"} />
      </div>

      <div className=' font-semibold text-[#012970] text-3xl col-start-1 col-end-13  pl-12  pt-10 '>
        <h1>API Requests</h1>
      </div>

      <div className='col-start-1 col-end-13 row-start-5 px-4 pt-5'>
        <TabsContainer></TabsContainer>
      </div>
      <div className='col-start-1 col-end-13 px-4 pt-5'></div>
    </ProtectedRouteWRap>
  );
};

export default Page;

"use client";
import Button from "@components/Button";
import DataTable from "@components/DataTable";
import Search from "@components/Search";
import TabsContainer from "@components/Tabscontent";
import React, { useEffect, useState } from "react";
import axios from "axios";

const columns = [
  { Header: "#", accessor: "index" },
  { Header: "Full Name", accessor: "fullName" },
  { Header: "NIC", accessor: "nic" },
  { Header: "Email", accessor: "email" },
  { Header: "Address", accessor: "address" },
  { Header: "Action", accessor: "action" },
];

const Page = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("useEffect is running");

    axios({
      method: "get",
      url: "http://localhost:3001/api/v1/admin/getApiRequests",
      responseType: "json",
    }).then(function (response) {
      console.log("axios wed");
      setData(response.data);
      let i = 1;
      response.data.forEach((element) => {
        element.action = 1;
        element.index = i;
        i++;
      });
      console.log(data);
    });
  }, []);

  return (
    <>
      <div className="  col-start-1 col-end-13  pl-8  pt-5 ">
        <h1 className="text-xl font-normal text-[#4154F1] bg-#F0F4FB">
          {" "}
          API Request Management
        </h1>
        <p className=" text-xs font-normal">Home/API requests</p>
      </div>

      <div className="w-[950px] pl-10 ">
        <Search />
      </div>
      <div className=" col-start-4 col-end-7">
        <Button title={"Revoked API Requests"} />
      </div>

      <div className=" font-semibold text-[#012970] text-3xl col-start-1 col-end-13  pl-12  pt-4 ">
        <h1>API Requests</h1>
      </div>

      <div className="col-start-1 col-end-13 px-4 pt-5">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default Page;

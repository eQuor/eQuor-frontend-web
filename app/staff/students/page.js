"use client";
import React, { useState } from "react";
import DataTable from "@components/DataTable";
import { useRef } from "react";
import { useEffect } from "react";
import axios from "axios";

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
      console.log(data);
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
      <div className="col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5 mt-3">
        <span className="text-light-blue font-semibold text-lg">
          Student Management
        </span>

        <p className="text-link-ash font-semibold text-sm">
          Home / Modules /{" "}
          <span className="text-black font-semibold text-sm">
            Student Management
          </span>
        </p>
      </div>
      <div className="col-start-1 col-end-13 row-start-2 px-4 pt-5">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}

export default page;

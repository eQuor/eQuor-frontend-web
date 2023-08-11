"use client";
import React from "react";
import DataTable from "@components/DataTable";
import { useRef } from "react";
import { useEffect } from "react";

function page() {
  const tableRef = useRef(null);

  const data = [
    {
      id: 1,
      name: "Manag Lama",
      reg: "2020/IS/027",
      ind: 20020279,
      email: "maan@gmail.com",
      add: "molamo",
    },
    {
      id: 1,
      name: "Manag Lama",
      reg: "2020/IS/027",
      ind: 20020279,
      email: "maan@gmail.com",
      add: "molamo",
    },
    {
      id: 1,
      name: "Manag Lama",
      reg: "2020/IS/027",
      ind: 20020279,
      email: "maan@gmail.com",
      add: "molamo",
    },
    {
      id: 1,
      name: "Manag Lama",
      reg: "2020/IS/027",
      ind: 20020279,
      email: "maan@gmail.com",
      add: "molamo",
    },
    {
      id: 1,
      name: "Manag Lama",
      reg: "2020/IS/027",
      ind: 20020279,
      email: "maan@gmail.com",
      add: "molamo",
    },
    {
      id: 1,
      name: "Manag Lama",
      reg: "2020/IS/027",
      ind: 20020279,
      email: "maan@gmail.com",
      add: "molamo",
    },
    {
      id: 1,
      name: "Manag Lama",
      reg: "2020/IS/027",
      ind: 20020279,
      email: "maan@gmail.com",
      add: "molamo",
    },
    {
      id: 1,
      name: "Manag Lama",
      reg: "2020/IS/027",
      ind: 20020279,
      email: "maan@gmail.com",
      add: "molamo",
    },
    {
      id: 1,
      name: "Manag Lama",
      reg: "2020/IS/027",
      ind: 20020279,
      email: "maan@gmail.com",
      add: "molamo",
    },
    {
      id: 1,
      name: "Manag Lama",
      reg: "2020/IS/027",
      ind: 20020279,
      email: "maan@gmail.com",
      add: "molamo",
    },
    {
      id: 1,
      name: "Manag Lama",
      reg: "2020/IS/027",
      ind: 20020279,
      email: "maan@gmail.com",
      add: "molamo",
    },
  ];

  const columns = [
    { Header: "#", accessor: "id" },
    { Header: "Student name", accessor: "name" },
    { Header: "Reg No", accessor: "reg" },
    { Header: "Index No", accessor: "ind" },
    { Header: "Email", accessor: "email" },
    { Header: "Address", accessor: "add" },
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
      <div className="col-start-1 col-end-8 row-start-2 px-4 pt-5">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}

export default page;

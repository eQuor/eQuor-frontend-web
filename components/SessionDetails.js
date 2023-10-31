import React from "react";
import Button from "./Button";
import Swal from 'sweetalert2';

import DataTable from "@components/DataTable";


function SessionDetails() {
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
      
        const showAlertId = () => {
            Swal.fire('Session ID')
          };
          const showAlertQr = () => {
            Swal.fire('Show QR')
          };
        
  return (
    <>
      <div className="col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5 mt-3">
        <span className="text-light-blue font-semibold text-lg">
          Session Name
        </span>

        <p className="text-link-ash font-semibold text-sm">
          Home /{" "}
          <span className="text-black font-semibold text-sm">Your Device</span>
        </p>
      </div>

      <div className="col-start-3 col-end-13 px-4  pt-5">
        <div className="flex">
          <div className="p-20 bg-white border flex flex-col items-center justify-center border-gray-200 rounded-lg shadow">
            <p className="mb-3 items-center text-dark-blue text-3xl font-semibold ">
              Session ID
            </p>
            {/* <Button title="View Session ID"></Button> */}
            <button onClick={showAlertId}
             className="bg-light-blue w-[200px] h-[40px] rounded-[5px] text-white text-center text-sm ">
              View Session ID
            </button>
          </div>
          <div className="p-20 bg-white flex flex-col items-center justify-center border border-gray-200 rounded-lg shadow ml-5">
            <p className="mb-3 items-center text-dark-blue text-3xl font-semibold ">
              Session QR
            </p>
            {/* <Button title="View Session ID"></Button> */}
            <button onClick={showAlertQr}
             className="bg-light-blue w-[200px] h-[40px] rounded-[5px] text-white text-center text-sm ">
              View Session QR
            </button>
          </div>
        </div>
      
      </div>
      <div className="col-start-1 col-end-13 px-4 pt-5">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}

export default SessionDetails;

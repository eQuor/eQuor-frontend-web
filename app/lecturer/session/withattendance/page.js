"use client";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { axiosPost, axiosGet } from "@common/basicAxios";
import ProtectedRouteWRap from "@app/ProtectedRouteWRap";


function Popup() {
  const [data, setData] = useState([]);
  const getResponse = async () => {
    const response = await axiosGet("/module");
    if (response.status == 200) {
      console.log("axios wed");
      let resdata = response.data._embedded.module;
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

  const router = useRouter();
  const [formData, setFormData] = useState({
    start_time: "",
    end_time: "",
    session_date:"",
    requirement: 0,
    session_name: "",
    module_id: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: "This will save the staff member details!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4154F1",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Save it!",
    })
      .then(async (result) => {
        if (result.isConfirmed) {
          console.log(formData);
          const response = await axiosPost("/session", formData);
          if (response.status === 201) {
            Swal.fire("Saved!", "New staff member has been saved.", "success");
            router.push("/lecturer/session/newSession");
          } else
            Swal.fire("Error!", "Couldn't save new staff member.", "success");
        }
      })
      .catch((error) => {
        Swal.fire("Error!", "Couldn't save new staff member.", "error");
      });
  };

  return (
    <ProtectedRouteWRap>
    <div className=" col-start-2 col-end-10 row-start-2   px-4 pt-5 mt-3 ">
       
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="  bg-white rounded shadow-lg px-4 py-3 "
      >
         <span className='text-dark-blue font-semibold text-2xl  '>
         When do you want to use this session?
          </span>
        <div className="  ">
          
          <div className="">
            <label className="  mb-2 text-lg  text-dark-blue font-normal">
              Start Time
            </label>
            <input
              type="time"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              onChange={(e) => {
                let newFormData = formData;
                newFormData.start_time = e.target.value;
                setFormData(newFormData);
              }}
            ></input>
            <div>
              <label className=" mb-2 text-lg  text-dark-blue font-normal">
                End Time
              </label>
              <input
                type="time"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                onChange={(e) => {
                  let newFormData = formData;
                  newFormData.end_time = e.target.value;
                  setFormData(newFormData);
                }}
              ></input>
            </div>
          </div>
          <div>
              <label className=" mb-2 text-lg  text-dark-blue font-normal">
                Session Date
              </label>
              <input
                type="date"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                onChange={(e) => {
                  let newFormData = formData;
                  newFormData.session_date = e.target.value;
                  setFormData(newFormData);
                }}
              ></input>
            </div>
          <div>
            <label className="mb-2 text-lg  text-dark-blue font-normal">
              Select Module
            </label>
            <select
              onChange={(e) => {
                let newFormData = formData;
                newFormData.module_id = e.target.value;
                setFormData(newFormData);
              }}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              {data.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
           
            </select>
            <label className="mb-2 text-lg  text-dark-blue font-normal">
              Session Name
            </label>
            <input
              onChange={(e) => {
                let newFormData = formData;
                newFormData.session_name = e.target.value;
                setFormData(newFormData);
              }}
              className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            ></input>
          </div>
          <div className="flex justify-self-end gap-4 pt-5 ">
            <button
              className="group relative w-26 flex justify-self-end py-2 px-4 border border-transparent font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-base"
            >
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
    </ProtectedRouteWRap>
  );
}

export default Popup;

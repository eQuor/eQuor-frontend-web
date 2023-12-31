"use client";
import React, { useState } from "react";

function Popup() {
  const [formData, setFormData] = useState({
    start_time: "",
    end_time: "",
    requirement: 0,
    session_name: "",
    module_id: "",
  });

  const handleSubmit = (e) => {
    console.log("aaa");
  };

  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault;
      }} className=" ml-60">
        <div className="  ">
          <h2 className="text-lg  text-dark-blue font-normal ">
            When do you want to use this session?{" "}
          </h2>
          <div className="">
            <label className=" mb-2 text-lg  text-dark-blue font-normal">
              Start Time
            </label>
            <input
              type="time"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 "
              onChange={(value) => {
                let newFormData = formData;
                newFormData.start_time = value;
                setFormData(newFormData);
              }}
            ></input>
            <div>
              <label className=" mb-2 text-lg  text-dark-blue font-normal">
                End Time
              </label>
              <input
                type="time"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5"
                onChange={(value) => {
                  let newFormData = formData;
                  newFormData.end_time = value;
                  setFormData(newFormData);
                }}
              ></input>
            </div>
          </div>
          <div>
            <label className="mb-2 text-lg  text-dark-blue font-normal">
              Select Module
            </label>
            <select
              onChange={(value) => {
                let newFormData = formData;
                newFormData.module_id = value;
                setFormData(newFormData);
              }}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5"
            >
              <option
                value={123}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5"
              >
                database
              </option>
              <option>DSA</option>
            </select>
            <label className="mb-2 text-lg  text-dark-blue font-normal">
              Session Name
            </label>
            <input
              onChange={(value) => {
                let newFormData = formData;
                newFormData.session_name = value;
                setFormData(newFormData);
              }}
              className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5"
            ></input>
          </div>
          <div className="flex justify-self-end gap-4 pt-5 ">
            <button
              className="group relative w-26 flex justify-self-end py-2 px-4 border border-transparent font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-base"
            >
              Createee
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Popup;

"use client";
import React, { useState } from "react";
import config from "@configuration/config";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const addStudent = () => {
  const router = useRouter();
  const subject = "Student registration";
  const [formData, setFormData] = useState({
    fullName: "",
    id: "",
    email: "",
    address: "",
    userName: "",
    password: "",
    indexNo: "",
    propic: "",
    regNo: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: "This will save the staff member details!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Save it!",
    })
      .then(async (result) => {
        if (result.isConfirmed) {
          const response = await axios.post(
            config.API_BASE_URL + config.API_VERSION + "/staff/createStudent",
            formData
          );
          if (response.status === 200) {
            Swal.fire("Saved!", "New Student has been saved.", "success");
            router.push("/staff/student");
          } else
            Swal.fire("Error!", "Couldn't save new Student.", "success");
        }
      })
      .catch((error) => {
        Swal.fire("Error!", "Couldn't save new Student.", "error");
      });
  };

  return (
    <>
      <div className="col-start-1 col-end-9 row-start-1 row-end-1  px-4 pt-5">
        <span className="text-light-blue font-semibold text-lg">{subject}</span>

        <p className="text-link-ash font-semibold text-sm">
          Home / Student /{" "}
          <span className="text-black font-semibold text-sm">{subject}</span>
        </p>
      </div>

      <div className="col-start-4 col-end-13 p-5 w-[700px] h-[750px] justify-center bg-white rounded-lg shadow-lg overflow-y-auto ">
        <form action="" className="bg-white">
          <div>
            <h1 className="text-xl text-left text-[#012970] font-medium">
              Add a Student
            </h1>
          </div>
          <div className="h-12 bg-white"></div>
          <div className="text-base bg-white">
            <div>
              <label>Student full name</label>
              <input
                type="text"
                autoComplete="none"
                required
                className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                placeholder="Full Name"
                onChange={(e) => {
                  let newFormData = formData;
                  newFormData.fullName = e.target.value;
                  setFormData(newFormData);
                }}
              />
            </div>
            <br />
            <div className="flex">
              <div>
                <label>Registration Number</label>
                <input
                  type="text"
                  autoComplete="none"
                  required
                  className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="2020/IS/027"
                  onChange={(e) => {
                    let newFormData = formData;
                    newFormData.regNo = e.target.value;
                    setFormData(newFormData);
                  }}
                />
              </div>
              <br />
              <div className="ml-10">
                <label>Index Number</label>
                <input
                  type="text"
                  autoComplete="none"
                  required
                  className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="2020/IS/027"
                  onChange={(e) => {
                    let newFormData = formData;
                    newFormData.indexNo = e.target.value;
                    setFormData(newFormData);
                  }}
                />
              </div>
            </div>
            <br />
            <div>
              <label>Email</label>
              <input
                type="email"
                autoComplete="none"
                required
                className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="sam@gmail.com"
                onChange={(e) => {
                  let newFormData = formData;
                  newFormData.email = e.target.value;
                  setFormData(newFormData);
                }}
              />
            </div>
            <br />
            <div>
              <label>Address</label>
              <input
                type="text"
                autoComplete="none"
                required
                className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Apprtment,studio, or floor"
                onChange={(e) => {
                  let newFormData = formData;
                  newFormData.address = e.target.value;
                  setFormData(newFormData);
                }}
              />
            </div>
            <br />
            <div className="flex">
              <div>
                <div>
                  <label>Username</label>
                  <input
                    type="text"
                    autoComplete="none"
                    required
                    className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Username"
                    onChange={(e) => {
                      let newFormData = formData;
                      newFormData.userName = e.target.value;
                      setFormData(newFormData);
                    }}
                  />
                </div>
                <br />
                <div>
                  <label>Password</label>
                  <input
                    type="password"
                    autoComplete="none"
                    required
                    className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    onChange={(e) => {
                      let newFormData = formData;
                      newFormData.password = e.target.value;
                      setFormData(newFormData);
                    }}
                  />
                </div>
                <br />
              </div>
              <div className="ml-10">
                <label>Profile Picture</label>
                <input
                  type="text"
                  autoComplete="none"
                  required
                  className="h-32 appearance-none rounded-none static vlock w-full px-3 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={(e) => {
                    let newFormData = formData;
                    newFormData.propic = e.target.value;
                    setFormData(newFormData);
                  }}
                />
              </div>
              <br />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="justify-self-end"></div>
            <div className="flex justify-self-end gap-4 ">
              <button
                className="group relative w-26 flex justify-self-end py-2 px-4 border border-transparent font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-base"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button
                className="group relative w-26 flex justify-self-end py-2 px-4 border border-transparent font-regular rounded-md text-white bg-[#6C757D] hover:bg-[#5a6268]
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-base"
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default addStudent;

"use client";

import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import ProtectedRouteWRap from "@app/ProtectedRouteWRap";
import { axiosPost } from "@common/basicAxios";
import { useAuth } from "@contexts/authContext";




const medReport = () => {
// ......................................
const router = useRouter();
const { authUser, setAuthUser } = useAuth();
const [formData, setFormData] = useState({
  name: "",
  addr: "",
  diag: "",
  frm: "",
  until: "",
});





const handleSubmit = async (e) => {
  e.preventDefault();

  Swal.fire({
    title: "Are you sure?",
    text: "This will save the report details!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#4154F1",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Save it!",
  })
    .then(async (result) => {
      if (result.isConfirmed) {
        const response = await axiosPost(
          "/absencereport",
          formData,
          router,
          setAuthUser
        );
        if (response.status === 201) {
          Swal.fire("Saved!", "Your medical report is submitted", "success");
          router.push("/student/absenceReport");
        } else
          Swal.fire("Error!", "Couldn't submit the report.", "success");
      }
    })
    .catch((error) => {
      Swal.fire("Error!", "Couldn't submit the report.", "error");
    });
};
//........................................

  const subject = 'Absence Report'

  return (
    <ProtectedRouteWRap>
    <>
      <div className="col-start-1 col-end-9 row-start-1 row-end-1  px-4 pt-5">
        <span className="text-light-blue font-semibold text-lg">{subject}</span>

        <p className="text-link-ash font-semibold text-sm">
          Home / Student /{' '}
          <span className="text-black font-semibold text-sm">{subject}</span>
        </p>
      </div>

      <div className="col-start-4 col-end-13 p-5 w-[700px] h-[650px] justify-center bg-white rounded-lg shadow-lg overflow-y-auto">
        <form action="" className="bg-white" onSubmit={(e) => {
            handleSubmit(e);
          }}>
          <div>
            <h1 className="text-xl text-left text-[#012970] font-medium">
              Student Medical Report
            </h1>
          </div>
          <div className="h-12 bg-white"></div>
          <div className="text-base bg-white">
            <div>
              <label htmlFor='name'>Student Full Name</label>
              <input
                type="text"
                id='name'
                autoComplete="none"
                required
                className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                placeholder="Tharusha Pathirana"
                onChange={(e) => {
                  let newFormData = formData;
                  newFormData.name = e.target.value;
                  setFormData(newFormData);
                }}
              />
            </div>
            <br />
            <div>
              <label htmlFor='addr'>Student Adress</label>
              <input
                type="text"
                id='addr'
                autoComplete="none"
                required
                className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Kurunegala"
                onChange={(e) => {
                  let newFormData = formData;
                  newFormData.address = e.target.value;
                  setFormData(newFormData);
                }}
              />
            </div>
            <br />
            <div>
              <label htmlFor='diog'>Diagnosis</label>
              <input
                type="text"
                id='diag'
                autoComplete="none"
                required
                className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Fever"
                onChange={(e) => {
                  let newFormData = formData;
                  newFormData.diagnosis = e.target.value;
                  setFormData(newFormData);
                }}
              />
            </div>
            <br />
            <div>
              <label>Unfit for ,</label>
              <label htmlFor='frm'>From </label>
              <input
                type="text"
                id='frm'
                autoComplete="none"
                required
                className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="20.07.2023"
                onChange={(e) => {
                  let newFormData = formData;
                  newFormData.from = e.target.value;
                  setFormData(newFormData);
                }}
              />
              <label htmlFor='until'>Until </label>
              <input
                type="text"
                id='until'
                autoComplete="none"
                required
                className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="23.07.2023"
                onChange={(e) => {
                  let newFormData = formData;
                  newFormData.until = e.target.value;
                  setFormData(newFormData);
                }}
              />
            </div>
            <br />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="justify-self-end"></div>
            <div className="flex justify-self-end gap-4 ">
              <button
                className="group static w-26 flex justify-self-end py-2 px-4 border border-transparent font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-base"
              >
                Accept
              </button>
              <button
                className="group static w-26 flex justify-self-end py-2 px-4 border border-transparent font-regular rounded-md text-white bg-[#6C757D] hover:bg-[#5a6268]
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-base"
              >
                Reject
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
    </ProtectedRouteWRap>

  );
};

export default medReport;

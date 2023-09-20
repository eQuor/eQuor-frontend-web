"use client";
import React, { useState } from "react";
import config from "@configuration/config";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import ProtectedRouteWRap from "@app/ProtectedRouteWRap";
import { axiosPost } from "@common/basicAxios";
import { useAuth } from "@contexts/authContext";

const page = () => {
  const router = useRouter();
  const { authUser, setAuthUser } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    email: "",
    address: "",
    user_name: "",
    password: "",
    role: "STAFF",
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
          const response = await axiosPost(
            "/staff",
            formData,
            router,
            setAuthUser
          );
          if (response.status === 201) {
            Swal.fire("Saved!", "New staff member has been saved.", "success");
            router.push("/admin/staffmanage");
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
      <div className='col-start-1 col-end-12 row-start-1 row-end-1  px-4 pt-5 mt-3'>
        <span className='text-light-blue font-semibold text-lg'>
          Staff Member
        </span>

        <p className='text-link-ash font-semibold text-sm'>
          Home / Staff Member /{" "}
          <span className='text-black font-semibold text-sm'>
            Add Staff Member
          </span>
        </p>
      </div>

      <div className='col-start-3 col-end-11 row-start-3 px-4 pt-0  '>
        <form
          className='bg-white rounded shadow-lg px-4 py-3'
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <span className='text-dark-blue font-semibold text-2xl '>
            Add a Staff Member
          </span>
          <div className='mb-2 mt-2'>
            <label
              htmlFor='name'
              className='block mb-2 text-sm font-medium text-gray-900 '
            >
              Staff Member Full Name
            </label>
            <input
              type='text'
              id='name'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
              placeholder='Name'
              required
              onChange={(e) => {
                let newFormData = formData;
                newFormData.name = e.target.value;
                setFormData(newFormData);
              }}
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='id'
              className='block mb-2 text-sm font-medium text-gray-900 '
            >
              Staff Member ID
            </label>
            <input
              type='text'
              id='id'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
              placeholder='20001258'
              required
              onChange={(e) => {
                let newFormData = formData;
                newFormData.id = e.target.value;
                setFormData(newFormData);
              }}
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900 '
            >
              Your email
            </label>
            <input
              type='email'
              id='email'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
              placeholder='name@flowbite.com'
              required
              onChange={(e) => {
                let newFormData = formData;
                newFormData.email = e.target.value;
                setFormData(newFormData);
              }}
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='address'
              className='block mb-2 text-sm font-medium text-gray-900 '
            >
              Address
            </label>
            <input
              type='text'
              id='address'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
              placeholder='Address'
              required
              onChange={(e) => {
                let newFormData = formData;
                newFormData.address = e.target.value;
                setFormData(newFormData);
              }}
            />
          </div>

          <div>
            <div className='mb-6'>
              <label
                htmlFor='username'
                className='block mb-2 text-sm font-medium text-gray-900 '
              >
                User Name
              </label>
              <input
                type='text'
                id='username'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                placeholder='New username'
                onChange={(e) => {
                  let newFormData = formData;
                  newFormData.username = e.target.value;
                  setFormData(newFormData);
                }}
              />
            </div>
            <div className='mb-6 '>
              <label
                htmlFor='new-password'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Password
              </label>
              <input
                type='password'
                id='new-password'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                required
                placeholder='Password'
                onChange={(e) => {
                  let newFormData = formData;
                  newFormData.password = e.target.value;
                  setFormData(newFormData);
                }}
              />
            </div>

            <div className='mb-2'>
              <label
                htmlFor='repeat-password'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Confirm password
              </label>
              <input
                type='password'
                id='repeat-password'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                required
                placeholder='Confirm password'
              />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <div className='justify-self-end'></div>
            <div className='flex justify-self-end gap-4 '>
              <button
                className='group relative w-26 flex justify-self-end py-2 px-4 border border-transparent font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-base'
              >
                Submit
              </button>
              <button
                className='group relative w-26 flex justify-self-end py-2 px-4 border border-transparent font-regular rounded-md text-white bg-[#6C757D] hover:bg-[#5a6268]
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-base'
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </ProtectedRouteWRap>
  );
};

export default page;

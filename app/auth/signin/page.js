"use client";

import React, { useState, useContext } from "react";
import axios from "axios";
import config from "@configuration/config";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { useAuth } from "@contexts/authContext";
import RouteWrap from "@app/RouteWrap";

const Home = () => {
  const { authUser, setAuthUser } = useAuth();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  alert("awww");

  const router = useRouter();
  return (
    <RouteWrap>
      <div className=' flex col-start-1 col-end-13 row-start-1 row-end-7  items-center justify-center  '>
        <form
          className=' w-[700px] rounded-lg shadow-lg p-4'
          onSubmit={async (e) => {
            e.preventDefault();

            const response = await axios.post(
              config.API_BASE_URL + config.API_VERSION + "/auth/token",
              {},
              {
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(formData.username + ":" + formData.password),
                  "Content-Type": "application/json",
                },
              }
            );

            if (response.status == 200) {
              const user = response.data;
              setAuthUser(user);
              if (user.role[0].authority === "ADMIN") {
                alert("h");
                router.push("/admin");
                alert("before");
              } else if (user.role[0].authority === "STAFF")
                router.push("/staff");
              else if (user.role[0].authority === "LECTURER")
                router.push("/lecturer");
              else if (user.role[0].authority === "STUDENT")
                router.push("/student");
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Email or password is wrong!",
                footer: '<a href="">Why do I have this issue?</a>',
              });
            }
          }}
        >
          <div>
            <h1 className='text-center  text-light-blue text-6xl font-bold font-sans bg-white'>
              Log In
            </h1>
          </div>
          <div>
            <div className=' bg-white'>
              <label>Username</label>
              <input
                type='text'
                autoComplete='none'
                required
                className='appearance-none rounded-none static vlock w-full px-3 py-2 border border-CED4DA placeholder-gray-500
                text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-white '
                placeholder='Username'
                onChange={(e) => {
                  let newData = formData;
                  newData.username = e.target.value;
                  setFormData(newData);
                }}
              />
            </div>
            <div className=' bg-white'>
              <label>Password</label>
              <input
                type='password'
                autoComplete='none'
                required
                className='appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-white'
                placeholder='Password'
                onChange={(e) => {
                  let newData = formData;
                  newData.password = e.target.value;
                  setFormData(newData);
                }}
              />
            </div>
          </div>
          <br></br>
          <div className='flex items-center justify-between bg-white'>
            <div className='flrx items-center bg-white'>
              <label className='ml-2 block text-sm text-gray-900 bg-white'>
                <input
                  type='checkbox'
                  className='h-4 w-4 text-light-blue focus:ring-light-blue border-gray-300 rounded '
                />
                Remember me
              </label>
            </div>
          </div>
          <br></br>
          <div>
            <button
              type='submit'
              className='group static w-full flex justify-center py-2 px-4 border border-transparent text-sm font-regular rounded-md text-white bg-light-blue hover:bg-indigo-700
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Sign in
            </button>
          </div>
          <br></br>
          <div className='textt-sm bg-white'>
            <a
              href='#'
              className='  hover:text-light-blue text-gray-400  bg-white'
            >
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </RouteWrap>
  );
};

export default Home;

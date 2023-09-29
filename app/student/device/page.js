"use client";
import React from "react";
import ProtectedRouteWRap from "@app/ProtectedRouteWRap";
import QRCode from "react-qr-code";
import { useState, useEffect } from "react";

import { axiosGet } from "@common/basicAxios";
import { useAuth } from "@contexts/authContext";

import axios from "axios";

const page = () => {
  // const [text, setText] = useState('')
  // function handleChange(e) {
  //   setText(e.target.value)
  // }

  const [data, setValue] = useState("");

  const { authUser, setAuthUser } = useAuth();

  const getResponse = async () => {
    const response = await axiosGet("/auth/getId");
    if (response.status == 200) {
      console.log("axios wed");
      console.log(response.data);

      let value = response.data.toString();
      setValue(value);
    } else {
      console.log("error while fetching API");
    }
    return response;
  };
  useEffect(() => {
    console.log("useEffect is running");
    const response = getResponse();
  }, []);

  return (
    <ProtectedRouteWRap>
      <div className='col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5 mt-3'>
        <span className='text-light-blue font-semibold text-lg'>
          Your Device
        </span>

        <p className='text-link-ash font-semibold text-sm'>
          Home /{" "}
          <span className='text-black font-semibold text-sm'>Your Device</span>
        </p>
      </div>

      <div className='col-start-1 col-end-13 px-4 pt-5 '>
        <div className='flex'>
          <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow'>
            <p className='mb-3 font-normal text-gray-500 '>
              1. Download eQuor mobile application.
            </p>
            <p className='mb-3 font-normal text-gray-500 '>
              2. Open the Web Application
            </p>
            <p className='mb-3 font-normal text-gray-500 '>
              3. Scan the QR Code
            </p>
          </div>
          <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ml-5'>
            <div>
              <h1>QR Code</h1>
              <QRCode value={data} />

              {/* <div>
                <p>Enter your text</p>
                <input
                  type="text"
                  value={text}
                  onChange={(e) => {
                    handleChange(e)
                  }}
                />
                <button>Generate</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRouteWRap>
  );
};

export default page;

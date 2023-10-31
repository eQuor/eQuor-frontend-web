"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Group from "@components/Group"; // Assuming you have a component named Group
import ProtectedRouteWRap from "@app/ProtectedRouteWRap"; // Assuming you have a ProtectedRouteWRap component
import axios from "axios";

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_ACCESS_TOKEN' with your actual access token or authentication method
    const accessToken = "YOUR_ACCESS_TOKEN";

    axios({
      method: "get",
      url: "http://localhost:3001/api/v1/lecturer/online?session_id=6",
      responseType: "json",
      headers: {
        Authorization: `Bearer ${accessToken}`, // Pass your authentication token here
      },
    })
      .then(function (response) {
        console.log("axios success");
        let i = 1;
        let resdata = response.data._embedded.lecturer;
        resdata.forEach((element) => {
          element.action = 1;
          element.index = i;
          i++;
        });
        setData(resdata);
        console.log(resdata);
      })
      .catch(function (error) {
        console.error("axios error:", error);
        // Handle errors, including 401 Unauthorized
      });
  }, []);

  return (
    <ProtectedRouteWRap>
      <div className="col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5 mt-3">
        <span className="text-light-blue font-semibold text-lg">Groups</span>

        <p className="text-link-ash font-semibold text-sm">
          Home /{" "}
          <span className="text-black font-semibold text-sm">Groups</span>
        </p>
      </div>
      {/* Online users area start */}
      <div className="col-start-1 col-end-6 row-start-2 px-4 pt-5 mt-3">
        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-dark-blue ">
              Online Users
            </h5>
            <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              View all
            </a>
          </div>
          <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200 ">
              {data.map((item, index) => (
                <li key={index} className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <Image
                        src="/logo.svg"
                        className="w-8 h-8 rounded-full"
                        alt="profile"
                        width={37}
                        height={37}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-dark-blue truncate">
                        {item.name}{" "}
                        {/* Assuming item.name exists in your data */}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {item.email}{" "}
                        {/* Assuming item.email exists in your data */}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Online users area end */}

      <div className="col-start-5 col-end-13 row-start-2 px-4 pt-5 mt-3">
        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2">
          <div className="mr-4 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className="p-6">
              <h5 className="text-lg font-bold leading-none text-dark-blue mt-3">
                Manually Assign Group Members
              </h5>
              <button
                type="button"
                className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-3"
              >
                Create Group
              </button>
            </div>
          </div>

          <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className="p-6">
              <h5 className="text-lg font-bold leading-none text-dark-blue mt-3 ">
                Generate Random Groups
              </h5>
              <button
                type="button"
                className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-3"
              >
                Create Group
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 mt-2">
          <Group />

          <Group />
        </div>
      </div>
    </ProtectedRouteWRap>
  );
};

export default Page;

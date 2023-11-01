"use client"
import React from "react";
import Image from "next/image";
import tick from "../../../public/tick.gif";


const resetPwd = () => {
  return (
    <div className="col-start-3 col-end-10 row-start-2 ml-14">
       <div className="w-[700px]">
        <div className=" p-5 sm:px-6 lg:px-8  w-[700px] h-[500px] tems-center justify-center bg-white rounded-lg">
          <form action="" className="bg-white">
          <div>
          <h1 className="text-4xl text-center font-bold text-blue-500">
          Reset Your Password</h1>
        </div>
        <div className="h-12 bg-white"></div>
            <div className="text-xl bg-white">
              <div>
                <label>Username</label>
                <input
                  type="text"
                  autoComplete="none"
                  required
                  className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                  placeholder="Username"
                />
              </div><br />
              <div>
                <label>Password</label>
                <input
                  type="password"
                  autoComplete="none"
                  required
                  className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div><br />
              <div>
                <label>Cofirm Password</label>
                <input
                  type="password"
                  autoComplete="none"
                  required
                  className="appearance-none rounded-none static vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Cofirm Password"
                />
              </div><br />

            

            </div>
            <div>
              <button
                className="group static w-26 flex justify-self-start py-2 px-4 border border-transparent font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-base"  >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
                            
export default resetPwd;

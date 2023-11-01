"use client"
import React from "react";
import Image from "next/image";
import tick from "../../../public/adminlogin.png";

const regForm = () => {
  return (
    <div className=' flex col-start-1 col-end-13 row-start-1 row-end-7  items-center justify-center  '>
      <form action='' className=' w-[700px] rounded-lg shadow-lg p-4'>
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
  );
};

export default regForm;

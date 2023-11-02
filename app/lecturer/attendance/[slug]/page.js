"use client";
import React, { useState, useEffect } from "react";
import { AiFillPlaySquare } from "react-icons/ai";
import { useRouter } from "next/navigation";
import ProtectedRouteWRap from "@app/ProtectedRouteWRap";
import { axiosGet, axiosPost } from "@common/basicAxios";

import SessionCardPast from "./SessioncardPast";
import Link from "next/link";

const page = ({ params }) => {
  //Show moudle name from the backend
  const [data, setResponse] = useState("");

  //get all sessions given by the id
  const [sessions, setSessions] = useState([]);

  const getResponse = async () => {
    const slug = params.slug;

    console.log(slug);
    const response = await axiosGet(`/lecture/getModuleDetailsById/${slug}`);

    if (response.status === 200) {
      console.log("axios worked");
      console.log(response.data);
      setResponse(response.data);
    } else {
      console.log("Error while fetching API");
    }
    return response;
  };

  useEffect(() => {
    console.log("useEffect is running");
    getResponse();
  }, []);

  //get all sessions given by the id

  const getSessions = async () => {
    const slug = params.slug;

    console.log(slug);
    const sessionResponse = await axiosGet(
      `/lecture/getAllSessionsDetailsByModuleId/${slug}`
    );

    if (sessionResponse.status === 200) {
      console.log("axios worked");
      console.log(sessionResponse.data);
      setSessions(sessionResponse.data);
    } else {
      console.log("Error while fetching API");
    }
    return sessionResponse;
  };

  useEffect(() => {
    console.log("useEffect is running");
    getSessions();
  }, []);

  const activeSessions = sessions.filter(
    (session) => session.isactive === true
  );
  const inactiveSessions = sessions.filter(
    (session) => session.isactive === false
  );

  console.log("Active Sessions:", activeSessions);
  console.log("Inactive Sessions:", inactiveSessions);
  console.log(activeSessions.length);

  return (
    <ProtectedRouteWRap>
      <div className='col-start-1 col-end-13 row-start-1 row-end-1  px-4 pt-5 mt-3'>
        <span className='text-light-blue font-semibold text-lg'>
          {data.name}
        </span>

        <p className='text-link-ash font-semibold text-sm'>
          Home / Modules /{" "}
          <span className='text-black font-semibold text-sm'>{data.name}</span>
        </p>
      </div>

      <div className='col-start-1 col-end-13  px-4 pt-5 mt-3'>
        <span className='text-dark-blue font-semibold text-2xl '>Past</span>
        {inactiveSessions.length > 0 ? (
          inactiveSessions.map((session) => (
            <Link
              href={{
                pathname: `/lecturer/forlate/${session.id}`,
                query: `${session.id}`,
              }}
            >
              {/* {`/lecturer/forlate/${session.id}`} */}
              <SessionCardPast
                //key={session.id}
                id={session.id}
                date={session.session_date}
                start_time={session.start_time}
                end_time={session.end_time}
                name={session.session_name}
                is_active={session.is_active}
              />
            </Link>
          ))
        ) : (
          <div className='w-full text-sm text-left text-gray-400 mt-1'>
            <div className='bg-white border-b border-gray-400 p-3'>
              <p>There aren't any past sessions at the moment.</p>
            </div>
          </div>
        )}

        {/* <Sessioncard /> */}
      </div>
    </ProtectedRouteWRap>
  );
};

export default page;

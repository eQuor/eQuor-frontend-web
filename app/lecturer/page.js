"use client";
import Button from "@components/Button";
import React, { useEffect, useState } from "react";
import Search from "@components/Search";
import TabsContainer from "@components/Tabscontent";

import Card from "@components/Card";
import Link from "next/link";
import ProtectedRouteWRap from "@app/ProtectedRouteWRap";
import { axiosGet } from "@common/basicAxios";

const Home = () => {
  const [data, setData] = useState([]);
  const [cards, setCards] = useState([]);

  const getResponse = async () => {
    const response = await axiosGet("/lecture/getModules");

    if (response.status == 200) {
      console.log("axios wed");

      let resdata = response.data;

      setData(resdata);
      // alert(JSON.stringify(resdata));
      const newCards = cards.map((module, index) => {
        <Card key={index} name={module.name} semester={module.semester}></Card>;
      });

      setCards(newCards);
    //  alert(JSON.stringify(newCards));
    } else {
      console.log("error while fetching API");
    }
    return response;
  };
  useEffect(() => {
    console.log("useEffect is running");
    const response = getResponse();
    console.log(response);
  }, []);

  return (
    <ProtectedRouteWRap>
      <div className="col-start-1 col-end-13 ">
        <TabsContainer />
      </div>

      <div className="col-start-1 col-end-13 row-start-2 row-end-2  px-4 pt-5 mt-3">
        <span className="text-light-blue font-semibold text-lg">Dashboard</span>

        <p className="text-link-ash font-semibold text-sm">
          Home /{" "}
          <span className="text-black font-semibold text-sm">Modules</span>
        </p>
      </div>

      <div className="col-start-1 col-end-13 px-4 pt-5 flex">
        <div className="w-[1200px] overflow-x-auto">
          <Search />
        </div>

        <div className="ml-3">
          <Button title={"Search"} url={"/lecturer"} />
        </div>
      </div>

      <div className=" col-start-1 col-end-13 flex px-4 mt-4">
        <div className="flex gap-5 flex-wrap">

        <div className="flex gap-5 flex-wrap">
          {data.map((data, index) => {
            //const { name, semester } = data

            // return <Card name={module.name} semester = {module.semester} />

            return (
              <div key={index}>
                <Link href={`/lecturer/${data.id}`}>
                  <Card name={data.name} semester={data.semester} />
                </Link>
              </div>
            );
          })}
        </div>
          {/* {cards} */}
          {/* <Link href="/lecturer/session">
            <Card />
          </Link>
          <Link href="/lecturer/session">
            <Card />
          </Link>
          <Link href="/lecturer/session">
            <Card />
          </Link>
          <Link href="/lecturer/session">
            <Card />
          </Link>
          <Link href="/lecturer/session">
            <Card />
          </Link>
          <Link href="/lecturer/session">
            <Card />
          </Link>
          <Link href="/lecturer/session">
            <Card />
          </Link>
          <Link href="/lecturer/session">
            <Card />
          </Link> */}

          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
        </div>
      </div>
      {/* 
      <div className=" text-white text-center text-sm col-start-10 col-end-11 row-start-2 row-end-4 ">
        <button className="bg-light-blue w-[210px] h-[50px] rounded-[5px] ">
          Assign Lecturers{' '}
        </button>
      </div>
      <div className=" text-white text-center text-sm col-start-11 col-end-12 row-start-2 row-end-4 pl-3">
        <button className="bg-light-blue w-[210px] h-[50px] rounded-[5px] ">
          Assign Students{' '}
        </button>
      </div> */}

      {/* <div className=" font-semibold text-[#012970] text-lg col-start-1 col-end-13 row-start-3 row-end-4 pl-12  pt-10 ">
        <h1>Assigned Lecturers</h1>
      </div> */}
    </ProtectedRouteWRap>
  );
};

export default Home;

import React from "react";
import Image from "next/image";
import { CgPoll } from "react-icons/cg";
import multiqz from "../../../public/question.png";
import qz from "../../../public/quiz.png";

const lecturerPollsWithPolls = () => {
  return (
    <>
      {/* .................cards........................... */}
      <div className="col-start-2 col-end-12 row-start-2 row-end-4 container mx-auto mt-4 flex gap-10">
        <div className="flex-2 ">
          <div className="bg-white p-6 rounded shadow-md w-[100%] justify-end">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full">
                <CgPoll
                  style={{ width: "40px", height: "40px", color: "#012970" }}
                />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-light-blue">
                  Create Your Polls
                </h1>
                <h1 className="text-[15px] font-regular text-[#555555]">
                  Engage your audience with live polls, surveys or quizzes.
                </h1>
                <br></br>
              </div>
            </div>
            <div className="flex gap-4 ml-12">
              <div className="text-[13px] border border-solid font-semibold border-[#CBC9CF] p-10 rounded text-dark-blue">
                <div>
                  <Image
                    src={multiqz}
                    alt="multiple questions"
                    className="w-[100px] h-[100px]"
                  />
                </div>
                <br></br>
                <h1>Multiple Choice</h1>
              </div>
              <div className="text-[13px] border border-solid font-semibold border-[#CBC9CF] p-10 rounded text-dark-blue">
                <div>
                  <Image
                    src={qz}
                    alt="multiple questions"
                    className="w-[100px] h-[100px]"
                  />
                </div>
                <br></br>
                <h1>Quiz</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 h-[100%]">
          <div className="bg-white p-6 rounded shadow-md w-[100%] h-[400%] justify-end">
            <div className="text-lg font-regular p-4 rounded text-dark-blue">
              <h1>Create and launch polls to collect responses.</h1>
              <div className="h-[200px]"></div>
              <h1>You can see the responses here. </h1>
            </div>
          </div>
        </div>
      </div>
      {/* .................cards end here .......................  */}
    </>
  );
};

export default lecturerPollsWithPolls;

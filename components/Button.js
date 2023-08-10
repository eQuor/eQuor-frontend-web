import React from "react";

const Button = (props) => {
  return (
    <div className=" text-white text-center text-sm  ">
      <button className="bg-light-blue w-[210px] h-[50px] rounded-[5px] ">
        {props.title}
      </button>
    </div>
  );
};

export default Button;

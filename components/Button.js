import React from "react";

const Button = ({ title, onclick }) => {
  return (
    <div className=' text-white text-center text-sm  '>
      <button
        onClick={onclick}
        className='bg-light-blue w-[210px] h-[50px] rounded-[5px] '
      >
        {title}
      </button>
    </div>
  );
};

export default Button;

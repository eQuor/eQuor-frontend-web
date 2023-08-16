import React from "react";
import { useRouter } from 'next/navigation'

const Button = (props) => {

    const router = useRouter()

    const handleClick = () => {
      router.push(props.url)
    }
  return (
    <div className=" text-white text-center text-sm  ">
      <button className="bg-light-blue w-[210px] h-[50px] rounded-[5px] " onClick={handleClick}>
        {props.title}
      </button>
    </div>
  );
};

export default Button;

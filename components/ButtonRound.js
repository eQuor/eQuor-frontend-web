import React from "react";
import { useRouter } from 'next/navigation'

const ButtonRound = (props) => {

    const router = useRouter()

    const handleClick = () => {
      router.push(props.url)
    }
  return (
    <div className=" text-white text-center text-sm  ">
      <button className="w-12 h-12 bg-dark-blue rounded-full pt-[1px]" onClick={handleClick}>
        {props.title}
      </button>
    </div>
  );
};

export default ButtonRound;

'use client'
import React from 'react';
import Image from 'next/image';
import cardimg from '../public/card.png';
import { BsThreeDots } from 'react-icons/bs';
const Card = () => {
  return (
    <>
      <div className='bg-white rounded-xl pb-6 shadow-xl font-medium min-w-[300px]'>
        <div >
            <Image className="flex w-full" src={cardimg} alt='for card' priority></Image>
        </div>
        <div className='flex justify-between p-4 text-slate-400'>
            <span className=' text-xm'>Semester I</span>
            <BsThreeDots className=' cursor-pointer'/>
        </div>
        <span className='p-4 text-blue-950 text-sm font-semibold min-w-full'>IS3116 Database Management System</span>
    </div>
     
    </>
  );
};

export default Card;

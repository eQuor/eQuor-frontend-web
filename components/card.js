'use client'
import React from 'react';
import Image from 'next/image';
import cardimg from '../public/card.png';
import { BsThreeDots } from 'react-icons/bs';
// TODO crate card properly
const Card = () => {
  return (
    <>
      <div className='col-start-1 col-end-4ml-8 bg-white'>
        <div>
          <Image className='col-start-1 col-end-4' src={cardimg} width={332} height={55} alt='card image'/>
        </div>
        <div className='flex-between p-4 text-link-ash'>
            <span>Semester I</span>
            <BsThreeDots/>
        </div>
        <span className='p-4 text-dark-blue'>IS3116 Database Management System</span>
      </div>
     
    </>
  );
};

export default Card;

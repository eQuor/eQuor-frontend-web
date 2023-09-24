'use client'
import React from 'react';
import Swal from 'sweetalert2';

const Page = () => {
  const handleClick = () => {
    Swal.fire(
      'The Internet?',
      'That thing is still around?',
      'question'
    );
  };

  return (
    <div className='col-start-3'>
      <button onClick={handleClick}>alert!</button>
    </div>
  );
};

export default Page;

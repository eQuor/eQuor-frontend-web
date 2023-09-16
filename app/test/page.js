"use client";
import React, { useState } from 'react';
import PollResults from 'components/PollResults';

function test() {
  const [pollOptions, setPollOptions] = useState([]);

  // Define functions to handle poll creation and voting

  return (
    <>
    <div className="col-start-2 col-end-12 row-start-2 row-end-4 container mx-auto mt-4 flex gap-10">
    <PollResults options={pollOptions} />
    </div>
    </>
  );
}

export default test;



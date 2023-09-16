"use client";
import React, { useState } from 'react';
import CreatePoll from 'components/CreatePoll';
import PollResults from 'components/PollResults';

function test() {
  const [pollOptions, setPollOptions] = useState([]);

  // Define functions to handle poll creation and voting

  return (
    <div>
      <CreatePoll />
      <PollResults options={pollOptions} />
    </div>
  );
}

export default test;



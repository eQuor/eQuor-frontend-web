// components/PollResults.js
import React from 'react';

function PollResults() {
  // Define hardcoded poll options with vote counts
  const options = [
    { text: 'Option A', votes: 25 },
    { text: 'Option B', votes: 30 },
    { text: 'Option C', votes: 15 },
  ];

  const totalVotes = options.reduce((total, option) => total + option.votes, 0);

  return (
    <div>
      <h2>Poll Results</h2>
      {options.map((option, index) => (
        <div key={index}>
          <p>{option.text}</p>
          <p>
            {option.votes} vote(s) - {((option.votes / totalVotes) * 100).toFixed(2)}%
          </p>
        </div>
      ))}
    </div>
  );
}

export default PollResults;

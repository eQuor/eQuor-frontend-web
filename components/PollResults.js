import React from "react";

function PollResults() {
  // Define hardcoded poll options with vote counts
  const options = [
    { text: "Paris", votes: 25 },
    { text: "London", votes: 30 },
    { text: "Rome", votes: 15 },
    { text: "Madrid", votes: 15 },
  ];

  const totalVotes = options.reduce((total, option) => total + option.votes, 0);

  return (
    <div>
      <span className="font-regular text-xl">
        What is the capital city of France?
      </span>
      {options.map((option, index) => (
        <div key={index}>
          <div>
            <p className="w-1/4">{option.text}</p>
            <div className="w-3/4 rounded shadow-md bg-gray-200">
              <div
                className="bg-light-blue rounded text-white text-center py-1"
                style={{
                  width: `${((option.votes / totalVotes) * 100).toFixed(2)}%`,
                }}
              >
              </div>
            </div>
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default PollResults;

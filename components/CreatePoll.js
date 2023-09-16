// components/CreatePoll.js
import React, { useState } from 'react';

function CreatePoll() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  // Add logic for creating the poll

  return (
    <div>
      <input
        type="text"
        placeholder="Poll Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      {options.map((option, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Option ${index + 1}`}
          value={option}
          onChange={(e) => handleOptionChange(index, e.target.value)}
        />
      ))}
      <button onClick={handleAddOption}>Add Option</button>
      {/* Add a button to submit the poll */}
    </div>
  );
}

export default CreatePoll;

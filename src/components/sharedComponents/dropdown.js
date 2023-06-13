import React, { useState } from "react";

const Dropdown = () => {
  const options = ["English", "french", "portuguese"];
  const [selectedOption, setSelectedOption] = useState("english");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">{selectedOption}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;

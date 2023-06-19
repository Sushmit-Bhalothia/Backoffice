import React, { useState, useContext } from "react";

import { LanguageContext } from "../contexts/languageContext.js";

const Dropdown = () => {
  const { language, updateLanguage } = useContext(LanguageContext);
  const handleLanguageChange = () => {
    updateLanguage("fr"); // Change the language to 'fr' (French)
  };
  const options = ["English", "French", "Portuguese"];
  const [selectedOption, setSelectedOption] = useState("English");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <select
        style={{ border: "none", height: "2.5vh", fontSize: "1.75vh" }}
        value={selectedOption}
        onChange={handleOptionChange}
      >
        {/* <option value="">{selectedOption}</option> */}
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

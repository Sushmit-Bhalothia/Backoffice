import React, { useState, useContext } from "react";

import { LanguageContext } from "../contexts/languageContext.js";

const Dropdown = () => {
  const { language, updateLanguage } = useContext(LanguageContext);
  const handleLanguageChange = () => {
    updateLanguage("fr"); // Change the language to 'fr' (French)
  };
  const options = [
    "🇺🇸  Eng",
    "🇫🇷  French",
    "🇵🇹  Portuguese",
    "🇷🇺  Russian",
    "🇯🇵 Japanese",
    "🇮🇹 Italian",
  ];
  const [selectedOption, setSelectedOption] = useState("English");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <select
        className="language-select"
        style={{ border: "none", width: "70px" , background: "transparent",  padding: "0px", margin: "0px", }}
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

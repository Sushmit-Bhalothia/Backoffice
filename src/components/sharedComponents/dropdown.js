import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";

import { LanguageContext } from "../contexts/languageContext.js";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import "../../css/headerFooter.css";

export default function Dropdown() {

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
  const [selectedOption, setSelectedOption] = useState("🇺🇸 English");

  const handleOptionChange = (event) => {
    event.preventDefault();
    setSelectedOption(event.target.textContent);
    toggleModal();
  };
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div style={{ display:"flex", justifyContent:"center", alignItems:"center", fontFamily: "Montserrat", fontWeight: "400"  }} onClick={toggleModal}>
        {selectedOption}
        <span style={{ paddingLeft: "5px", fontFamily: "Montserrat", fontWeight: "400", color: "#00000"  }}>
        <FontAwesomeIcon icon={faAngleDown} />
        </span>
  
      </div>

      {modal && (
        <div className="modal" style={{zIndex: 1000}}>
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content" style={{ right: "5vw", width: "13vw" }}>
              <div className="modal-Elements" onClick={handleOptionChange}>🇺🇸  English</div>
              <div className="modal-Elements" onClick={handleOptionChange}>🇫🇷  French</div>
              <div className="modal-Elements" onClick={handleOptionChange}>🇵🇹  Portuguese</div>
              <div className="modal-Elements" onClick={handleOptionChange}>🇷🇺  Russian</div>
              <div className="modal-Elements" onClick={handleOptionChange}>🇯🇵 Japanese</div>
              <div className="modal-Elements" onClick={handleOptionChange}>🇮🇹 Italian</div>
          </div>
        </div>
      )}
    </>
  );
}


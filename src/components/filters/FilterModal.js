import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../../css/main.css";

const Architecture = ({ name }) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeArchitecture = () => {
    setIsOpen(false);
  };

  return (
    <div className={`architecture ${isOpen ? "open" : "closed"}`}>
      <span className="architecture-name">{name}</span>
      <span
        className="close"
        onClick={closeArchitecture}
        style={{ cursor: "pointer" }}
      >
        <FontAwesomeIcon icon={faTimes} />
      </span>
    </div>
  );
};

const FilterModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const selectOption = (option) => {
    setSelectedOptions([...selectedOptions, option]);
  };

  const removeOption = (option) => {
    const updatedOptions = selectedOptions.filter(
      (selected) => selected !== option
    );
    setSelectedOptions(updatedOptions);
  };

  return (
    <div>
      <div
        style={{
          paddingTop: "1vh",
          height: "3.5vh",
          marginTop: "1.5vh",
          cursor: "pointer",
        }}
        className="Trans-Button"
        onClick={openModal}
      >
        <FontAwesomeIcon icon={faFilter} style={{ marginRight: "0.5rem" }} />
        Filters
      </div>
      {isOpen && (
        <div
          className="modal"
          style={{
            position: "absolute",
            top: "30vh",
            left: "35vw",
            width: "40vw",
            height: "40vh",
          }}
        >
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              close
            </span>
            <h2>Add a Filter</h2>

            <div id="selectedArchitecture">
              {selectedOptions.map((option) => (
                <Architecture
                  key={option}
                  name={option}
                  onClose={() => removeOption(option)}
                />
              ))}
            </div>
            <div className="dropdown">
              <button className="dropbtn">Select an Option</button>
              <div className="dropdown-content">
                <a onClick={() => selectOption("Option 1")}>Option 1</a>
                <a onClick={() => selectOption("Option 2")}>Option 2</a>
                <a onClick={() => selectOption("Option 3")}>Option 3</a>
                <a onClick={() => selectOption("Option 4")}>Option 4</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterModal;

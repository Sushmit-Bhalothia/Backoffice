import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../../css/main.css";

const ArchitectureOption1 = ({ name, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeArchitecture = () => {
    setIsOpen(false);
    onClose(name);
  };

  return (
    <div className={`architecture ${isOpen ? "open" : "closed"}`}>
      <span className="architecture-name">
        {name} here one drohhhhjklkjhghjklp down will come{" "}
      </span>
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

const ArchitectureOption2 = ({ name, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeArchitecture = () => {
    setIsOpen(false);
    onClose(name);
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

const ArchitectureOption3 = ({ name, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeArchitecture = () => {
    setIsOpen(false);
    onClose(name);
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

const ArchitectureOption4 = ({ name, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeArchitecture = () => {
    setIsOpen(false);
    onClose(name);
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
    if (!selectedOptions.includes(option)) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const removeOption = (option) => {
    const updatedOptions = selectedOptions.filter(
      (selected) => selected !== option
    );
    setSelectedOptions(updatedOptions);
  };

  const renderArchitectures = () => {
    return selectedOptions.map((option) => {
      switch (option) {
        case "Option 1":
          return (
            <ArchitectureOption1
              key={option}
              name={option}
              onClose={() => removeOption(option)}
            />
          );
        case "Option 2":
          return (
            <ArchitectureOption2
              key={option}
              name={option}
              onClose={() => removeOption(option)}
            />
          );
        case "Option 3":
          return (
            <ArchitectureOption3
              key={option}
              name={option}
              onClose={() => removeOption(option)}
            />
          );
        case "Option 4":
          return (
            <ArchitectureOption4
              key={option}
              name={option}
              onClose={() => removeOption(option)}
            />
          );
        default:
          return null;
      }
    });
  };

  const resetFilters = () => {
    setSelectedOptions([]);
  };

  const applyFilters = () => {
    // Apply the selected filters
    // You can add your logic here
    closeModal();
  };

  return (
    <div>
      <div
        style={{
          paddingTop: "1vh",
          height: "3.5vh",
          marginTop: "1.5vh",
          cursor: "pointer",
          color: isOpen ? "blue" : "inherit",
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

            <div id="selectedArchitecture">{renderArchitectures()}</div>
            <div>
              <select
                className="dropbtn"
                onChange={(event) => selectOption(event.target.value)}
                // multiple
              >
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 4">Option 4</option>
              </select>
            </div>
            <div>
              <button className="Smaller-Button" onClick={applyFilters}>
                Apply
              </button>
              <button onClick={resetFilters}>Reset All</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterModal;

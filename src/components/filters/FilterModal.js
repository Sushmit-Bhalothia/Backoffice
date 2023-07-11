import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../../css/main.css";

import { FilterContext } from "../contexts/FilterContext";

const ArchitectureOption1 = ({ name, onClose }) => {
  const { filter, updateFilter } = useContext(FilterContext);
  const [isOpen, setIsOpen] = useState(true);

  const closeArchitecture = () => {
    setIsOpen(false);
    onClose(name);
  };

  const handleFilterUpdate = (value) => {
    updateFilter({ LifeTimeRank: value });
  };

  const isOptionSelected = (value) => {
    return filter.LifeTimeRank === value;
  };
  return (
    <div className={`architecture ${isOpen ? "open" : "closed"}`}>
      <div
        style={{ display: "flex", overflowX: "scroll", marginLeft: "1rem" }}
        className="architecture-name"
      >
        {/* {name} here one drohhhhjklkjhghjklp down will come{" "} */}
        <h4 style={{ marginRight: "1vw", marginTop: ".35vh" }}>
          Lifetime_Rank:{" "}
        </h4>
        <div
          style={{
            cursor: "pointer",
            padding: "2px",
            paddingTop: "1vh",
            margin: "2px",
            height: "3vh",

            boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            paddingTop: "0.5vh",
            backgroundColor: isOptionSelected("Qualified_IBP")
              ? "#6d06c6"
              : "white",
            color: isOptionSelected("Qualified_IBP") ? "white" : "black",
          }}
          onClick={() => handleFilterUpdate("Qualified_IBP")}
        >
          Qualified_IBP
        </div>
        <div
          style={{
            cursor: "pointer",
            padding: "2px",
            paddingTop: "1vh",
            margin: "2px",
            height: "3vh",

            boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            paddingTop: "0.5vh",
            backgroundColor: isOptionSelected("Sapphire") ? "#6d06c6" : "white",
            color: isOptionSelected("Sapphire") ? "white" : "black",
          }}
          onClick={() => handleFilterUpdate("Sapphire")}
        >
          Sapphire
        </div>
        <div
          style={{
            cursor: "pointer",
            padding: "2px",
            paddingTop: "1vh",
            margin: "2px",
            height: "3vh",

            boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            paddingTop: "0.5vh",
            backgroundColor: isOptionSelected("Diamond") ? "#6d06c6" : "white",
            color: isOptionSelected("Diamond") ? "white" : "black",
          }}
          onClick={() => handleFilterUpdate("Diamond")}
        >
          Diamond
        </div>

        <div
          style={{
            cursor: "pointer",
            padding: "2px",
            paddingTop: "1vh",
            margin: "2px",
            height: "3vh",

            boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            paddingTop: "0.5vh",

            backgroundColor: isOptionSelected("Presidental")
              ? "#6d06c6"
              : "white",
            color: isOptionSelected("Presidental") ? "white" : "black",
          }}
          // className="Smaller-Button"
          onClick={() => handleFilterUpdate("Presidental")}
        >
          Presidental
        </div>
        <div
          style={{
            cursor: "pointer",
            padding: "2px",
            paddingTop: "1vh",
            margin: "2px",
            height: "3vh",

            boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            paddingTop: "0.5vh",
            backgroundColor: isOptionSelected("Presidential_Diamond")
              ? "#6d06c6"
              : "white",
            color: isOptionSelected("Presidential_Diamond") ? "white" : "black",
          }}
          onClick={() => handleFilterUpdate("Presidential_Diamond")}
        >
          Presidential_Diamond
        </div>
        <div
          style={{
            cursor: "pointer",
            padding: "2px",
            paddingTop: "1vh",
            margin: "2px",
            height: "3vh",

            boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            paddingTop: "0.5vh",
            backgroundColor: isOptionSelected(" Ruby") ? "#6d06c6" : "white",
            color: isOptionSelected(" Ruby") ? "white" : "black",
          }}
          onClick={() => handleFilterUpdate(" Ruby")}
        >
          Ruby
        </div>

        <div
          style={{
            cursor: "pointer",
            padding: "2px",
            paddingTop: "1vh",
            margin: "2px",
            height: "3vh",

            boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            paddingTop: "0.5vh",
            backgroundColor: isOptionSelected("Silver") ? "#6d06c6" : "white",
            color: isOptionSelected("Silver") ? "white" : "black",
          }}
          onClick={() => handleFilterUpdate("Silver")}
        >
          Silver
        </div>

        <div
          style={{
            cursor: "pointer",
            padding: "2px",
            paddingTop: "1vh",
            margin: "2px",
            height: "3vh",

            boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            paddingTop: "0.5vh",
            backgroundColor: isOptionSelected("Gold") ? "#6d06c6" : "white",
            color: isOptionSelected("Gold") ? "white" : "black",
          }}
          onClick={() => handleFilterUpdate("Gold")}
        >
          Gold
        </div>
        <div
          style={{
            cursor: "pointer",
            padding: "2px",
            paddingTop: "1vh",
            margin: "2px",
            height: "3vh",

            boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            paddingTop: "0.5vh",
            backgroundColor: isOptionSelected("Ambassador")
              ? "#6d06c6"
              : "white",
            color: isOptionSelected("Ambassador") ? "white" : "black",
          }}
          onClick={() => handleFilterUpdate("Ambassador")}
        >
          Ambassador
        </div>

        <span
          className="close"
          onClick={closeArchitecture}
          style={{ cursor: "pointer", margin: "0.5vh" }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </div>
    </div>
  );
};

const ArchitectureOption2 = ({ name, onClose }) => {
  const { filter, updateFilter } = useContext(FilterContext);
  const [isOpen, setIsOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");

  const closeArchitecture = () => {
    setIsOpen(false);
    onClose(name);
  };

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    updateFilter({ status: value });
  };

  return (
    <div className={`architecture ${isOpen ? "open" : "closed"}`}>
      <div style={{ display: "flex" }} className="architecture-name">
        {/* <span>{name}</span> */}
        <div style={{ marginLeft: "1rem", display: "flex" }}>
          <h4 style={{ marginRight: "1vw", marginTop: ".25vh" }}>Status: </h4>
          <select
            style={{
              height: "3vh",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.2)",
            }}
            value={selectedOption}
            onChange={(e) => handleOptionChange(e.target.value)}
          >
            <option value="">Select Option</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <span
            style={{ margin: "3px", marginLeft: "0.5vw" }}
            onClick={closeArchitecture}
          >
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
      </div>
    </div>
  );
};

const ArchitectureOption3 = ({ name, onClose }) => {
  const { filter, updateFilter } = useContext(FilterContext);
  const [isOpen, setIsOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");

  const closeArchitecture = () => {
    setIsOpen(false);
    onClose(name);
  };

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    updateFilter({ type: value });
  };

  return (
    <div className={`architecture ${isOpen ? "open" : "closed"}`}>
      <div style={{ display: "flex" }} className="architecture-name">
        {/* <span>{name}</span> */}
        <div style={{ marginLeft: "1rem", display: "flex" }}>
          <h4 style={{ marginRight: "1vw", marginTop: ".25vh" }}>Type : </h4>
          <select
            style={{
              height: "3vh",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.2)",
            }}
            value={selectedOption}
            onChange={(e) => handleOptionChange(e.target.value)}
          >
            <option value="">Select Option</option>
            <option value="Active">Learn</option>
            <option value="Inactive">Live</option>
          </select>
          <span
            style={{ margin: "3px", marginLeft: "0.5vw" }}
            onClick={closeArchitecture}
          >
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
      </div>
    </div>
  );
};

const ArchitectureOption4 = ({ name, onClose }) => {
  const { filter, updateFilter } = useContext(FilterContext);
  const [isOpen, setIsOpen] = useState(true);
  const [selectedRank, setSelectedRank] = useState("");
  const [selectedProgress, setSelectedProgress] = useState("");

  const closeArchitecture = () => {
    setIsOpen(false);
    onClose(name);
  };

  const handleRankChange = (value) => {
    setSelectedRank(value);
    updateFilter({ rank: value });
  };

  const handleProgressChange = (value) => {
    setSelectedProgress(value);
    updateFilter({ progress: value });
  };

  return (
    <div className={`architecture ${isOpen ? "open" : "closed"}`}>
      <div
        style={{ display: "flex", overflow: "scroll" }}
        className="architecture-name"
      >
        <div style={{ marginLeft: "1rem", display: "flex" }}>
          <h4 style={{ marginRight: "1vw", marginTop: ".25vh" }}>
            Next_Rank:{" "}
          </h4>
          <select
            style={{
              height: "3vh",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.2)",
            }}
            value={selectedRank}
            onChange={(e) => handleRankChange(e.target.value)}
          >
            <option value="">Select Rank</option>
            <option value="Junior">Ruby</option>
            <option value="Senior">Gold</option>
            <option value="Senior">Platinium</option>
            <option value="Senior">Silver</option>
          </select>

          <h4
            style={{
              marginLeft: "1vw",
              marginRight: "1vw",
              marginTop: ".25vh",
            }}
          >
            Progress:{" "}
          </h4>
          <select
            style={{
              height: "3vh",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.2)",
            }}
            value={selectedProgress}
            onChange={(e) => handleProgressChange(e.target.value)}
          >
            <option value="">Select Progress</option>
            <option value="Learning">Less than 10%</option>
            <option value="Live">Betwenn 10 to 30%</option>
            <option value="Live">Betwenn 30 to 50%</option>
            <option value="Live">Betwenn 50 to 70%</option>
            <option value="Live">Betwenn 70 to 90%</option>
            <option value="Live">More than 90%</option>
          </select>

          <span
            style={{ margin: "3px", marginLeft: "0.5vw" }}
            onClick={closeArchitecture}
          >
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
      </div>
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
          color: isOpen ? "#6d06c6" : "inherit",
        }}
        className="Trans-Button"
        onClick={openModal}
      >
        <FontAwesomeIcon icon={faFilter} style={{ marginRight: "0.5rem" }} />
        Filters
      </div>
      {isOpen && (
        <modal
          className="modal"
          style={{
            position: "absolute",
            top: "30vh",
            left: "45vw",
            height: "40vh",
            width: "40vw",
            zIndex: 10,
          }}
        >
          <div className="modal-content" style={{ width: "30vw" }}>
            <span
              style={{ marginLeft: "1rem", cursor: "pointer" }}
              className="close"
              onClick={closeModal}
            >
              close
            </span>
            <h2 style={{ marginLeft: "1rem" }}>Advance Filters</h2>

            <div id="selectedArchitecture">{renderArchitectures()}</div>
            <div>
              <div
                style={{
                  color: "#828282",

                  marginLeft: "1rem",
                }}
              >
                {" "}
                choose a filter to add
              </div>
              <select
                className="dropbtn"
                style={{
                  margin: "1rem",
                  height: "3vh",
                  border: "none",
                  borderRadius: "10px",
                  boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.2)",
                }}
                onChange={(event) => selectOption(event.target.value)}
                // multiple
              >
                <option value="">Select</option>
                <option value="Option 1">LifeTime Rank</option>
                <option value="Option 2">status</option>
                <option value="Option 3">Type</option>
                <option value="Option 4">Next Rank</option>
              </select>
            </div>
            <div>
              <button
                style={{ marginLeft: "1rem" }}
                className="Smaller-Button"
                onClick={applyFilters}
              >
                Apply
              </button>
              <button onClick={resetFilters}>Reset All</button>
            </div>
          </div>
        </modal>
      )}
    </div>
  );
};

export default FilterModal;

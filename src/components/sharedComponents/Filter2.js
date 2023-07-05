import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faTable, faBars } from "@fortawesome/free-solid-svg-icons";
import FilterDropdown from "./filtersDropdown";
import CycleDropDown from "./cycle-dropdown";

function Filter() {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [displayMode, setDisplayMode] = useState("table");

  const handleFilterToggle = () => {
    setIsFilterActive(!isFilterActive);
  };

  const handleDisplayModeChange = (mode) => {
    setDisplayMode(mode);
  };

  return (
    <div className="Filters">
      <div className="left-Filter">
        <div style={{ marginTop: "3vh" }} className="root-filters">
          Show:
        </div>
        <div className="root-filters">
          <CycleDropDown />
        </div>
      </div>
      <div className="right-Filter">
        <div
          style={{
            paddingTop: "1vh",
            height: "3.5vh",
            marginTop: "1.5vh",
            color: isFilterActive ? "#5d01a2" : "black",
            cursor: "pointer",
          }}
          className="Trans-Button"
          onClick={handleFilterToggle}
        >
          <FontAwesomeIcon
            icon={faFilter}
            style={{
              marginRight: "0.5rem",
              color: isFilterActive ? "#5d01a2" : "black",
            }}
          />
          Filter
        </div>
        <div style={{ marginTop: "2.25vh" }} className="root-filters">
          Sort by:
        </div>
        <FilterDropdown />
      </div>
      <div
        style={{ marginTop: "4.5vh", cursor: "pointer" }}
        className="root-filters"
        onClick={() => handleDisplayModeChange("cards")}
      >
        <FontAwesomeIcon
          icon={faTable}
          style={{ color: displayMode === "cards" ? "#5d01a2" : "black" }}
        />
      </div>
      <div
        style={{ marginTop: "4.5vh", cursor: "pointer" }}
        className="root-filters"
        onClick={() => handleDisplayModeChange("table")}
      >
        <FontAwesomeIcon
          icon={faBars}
          style={{ color: displayMode === "table" ? "#5d01a2" : "black" }}
        />
      </div>
    </div>
  );
}

export default Filter;

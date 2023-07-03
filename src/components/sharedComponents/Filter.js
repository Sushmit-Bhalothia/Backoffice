import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faColumns } from "@fortawesome/free-solid-svg-icons";
import FilterDropdown from "./filtersDropdown";
import CycleDropDown from "./cycle-dropdown";

function Filter() {
  const [isFilterActive, setIsFilterActive] = useState(false);

  const handleFilterToggle = () => {
    setIsFilterActive(!isFilterActive);
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
            height: "4vh",
            marginTop: "1vh",
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
        <div className="root-filters">Sort by:</div>
        <FilterDropdown />
      </div>
      <div style={{ marginTop: "4.5vh" }} className="root-filters">
        <FontAwesomeIcon icon={faColumns} />
      </div>
    </div>
  );
}

export default Filter;

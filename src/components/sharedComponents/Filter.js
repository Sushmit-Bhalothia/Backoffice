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
        <div className="root-filters root-filters-text">Show:</div>
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
        <div style={{ marginTop: "1.85vh" }} className="root-filters ">
          Sort by:
        </div>
        <FilterDropdown />
        <div id="column-selector" className="root-filters">
          <FontAwesomeIcon icon={faColumns} />
        </div>
      </div>
    </div>
  );
}

export default Filter;

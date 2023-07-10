import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faTable, faBars } from "@fortawesome/free-solid-svg-icons";
import FilterDropdown from "./filtersDropdown";
import CycleDropDown from "./cycle-dropdown";
import { FilterContext } from "../contexts/FilterContext";
import FilterModal from "./FilterModal";

function Filter() {
  const { filter, updateFilter } = useContext(FilterContext);
  const [isFilterActive, setIsFilterActive] = useState(false);

  const handleFilterToggle = () => {
    setIsFilterActive(!isFilterActive);
  };

  const handleDisplayModeChange = (mode) => {
    updateFilter({ displayMode: mode });
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
        <FilterModal />
        <div style={{ marginTop: "2.25vh" }} className="root-filters">
          Sort by:
        </div>
        <FilterDropdown />
        <div
          style={{ marginTop: "2.0vh", cursor: "pointer" }}
          className="root-filters"
          onClick={() => handleDisplayModeChange("cards")}
        >
          <FontAwesomeIcon
            icon={faTable}
            style={{
              color: filter.displayMode === "cards" ? "#5d01a2" : "black",
            }}
          />
        </div>
        <div
          style={{ marginTop: "2vh", cursor: "pointer" }}
          className="root-filters"
          onClick={() => handleDisplayModeChange("table")}
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{
              color: filter.displayMode === "table" ? "#5d01a2" : "black",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;

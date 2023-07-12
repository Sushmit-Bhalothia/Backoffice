import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faColumns } from "@fortawesome/free-solid-svg-icons";
import FilterDropdown from "./filtersDropdown";
import CycleDropDown from "./cycle-dropdown";
import FilterModal from "./FilterModal";

function Filter() {
  const [isFilterActive, setIsFilterActive] = useState(false);

  const handleFilterToggle = () => {
    setIsFilterActive(!isFilterActive);
  };

  return (
    <div className="Filters">
      <div className="left-Filter">
        <div className="root-filters">
          <CycleDropDown />
        </div>
      </div>
      <div className="right-Filter">
        <FilterModal />

        <FilterDropdown />
        <div id="column-selector" className="root-filters">
          <FontAwesomeIcon icon={faColumns} />
        </div>
      </div>
    </div>
  );
}

export default Filter;

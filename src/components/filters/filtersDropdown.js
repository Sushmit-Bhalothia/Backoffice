import React, { useState, useContext } from "react";
import "../.././css/main.css";

import { FilterContext } from "../contexts/FilterContext";

const FilterDropdown = () => {
  const { filter, updateFilter } = useContext(FilterContext);
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleChange = (event) => {
    setSelectedFilter(event.target.value);
    updateFilter({ sort: event.target.value });
  };

  return (
    <div
      style={{
        marginTop: "1.5vh",
        paddingleft: "2vw",
        // paddingRight: "1vw",
        display: "flex",
        height: "4vh",
        marginRight: "1vw",
        marginLeft: "1vw",
        paddingTop: "0",
        width: "auto",
      }}
      className="Trans-Button"
    >
      <div style={{ marginTop: "1vh" }} className="root-filters">
        Sort:
      </div>
      <select
        id="select-filter"
        style={{
          border: "none",
          paddingTop: "2.25vh",
          fontSize: "18px",

          width: "auto",

          textAlign: "center",

          marginTop: "-2.0vh",
          marginRight: "4vw",

          // padding
        }}
        value={selectedFilter}
        onChange={handleChange}
      >
        <option value="">Alphabetic</option>
        <option value="id">ID</option>
        <option value="name">Name</option>
      </select>
    </div>
  );
};

export default FilterDropdown;

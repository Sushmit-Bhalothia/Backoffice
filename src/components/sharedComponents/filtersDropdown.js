import React, { useState } from "react";
import "../.././css/main.css";

const FilterDropdown = () => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  return (
    <div
      style={{ marginTop: "1vh", paddingleft: "2vw", paddingRight: "1vw" }}
      className="Trans-Button"
    >
      <select
        id="select-filter"
        style={{
          border: "none",
          paddingTop: "1vh",
          paddingRight: "0.5vw",
          // fontSize: "2vh",
          textAlign: "center",

          // padding
        }}
        value={selectedFilter}
        onChange={handleChange}
      >
        <option value="">Alphabetic</option>
        <option value="option1">ID</option>
        <option value="option2">Name</option>
      </select>
    </div>
  );
};

export default FilterDropdown;

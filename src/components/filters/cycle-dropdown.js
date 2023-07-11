import React, { useState } from "react";
import "../.././css/main.css";

const FilterDropdown = () => {
  const [selectedFilter, setSelectedFilter] = useState(
    "Cycle: 14 May to 15 June(2023)"
  );

  const handleChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginTop: "0.0vh" }} className="Trans-Button">
        <select
          style={{
            border: "none",
            paddingTop: "1vh",
            paddingRight: "0.5vw",
            fontSize: "medium",
            //width: "30vw",

            textAlign: "center",
          }}
          value={selectedFilter}
          onChange={handleChange}
        >
          <option value="Cycle: 14 May to 15 June(2022)">Cycle </option>
          <option value="Cycle 2: 14 June to 15 July(2022)">Cycle 2 </option>
          <option value="Cycle 3: 14 July to 15 August(2022)">Cycle 3</option>
        </select>
      </div>
      <div className="root-filters selected-cycle">{selectedFilter}</div>
    </div>
  );
};

export default FilterDropdown;

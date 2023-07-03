import React, { useState } from "react";
import "../../css/main.css";

const DateRangeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState("17 April");
  const [endDate, setEndDate] = useState("18 May (2023)");

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <button
          className="Trans-Button"
          style={{ backgroundColor: "white", color: "black", border: "none" }}
          onClick={handleDropdownClick}
        >
          Cycle
        </button>
        {isOpen && (
          <div className="dropdown-content">
            <div className="calendar">
              <div>
                <label htmlFor="start-date">Start Date:</label>
                <input
                  type="date"
                  id="start-date"
                  value={startDate}
                  onChange={handleStartDateChange}
                />
              </div>
              <div>
                <label htmlFor="end-date">End Date:</label>
              </div>
              <input
                type="date"
                id="end-date"
                value={endDate}
                onChange={handleEndDateChange}
              />
            </div>
          </div>
        )}
      </div>
      <div className="root-filters selected-cycle">
        Cycle: {startDate} to {endDate}
      </div>
    </div>
  );
};

export default DateRangeDropdown;

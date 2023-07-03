import React, { useState } from "react";
import "../css/auth-onboarding/index.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: "-2vh",
        marginLeft: "-10vw",
        // width: "30vw",
      }}
    >
      <input
        style={{ height: "5vh" }}
        className="Input"
        type="text"
        placeholder=" 🔍 Search by name or ID"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;

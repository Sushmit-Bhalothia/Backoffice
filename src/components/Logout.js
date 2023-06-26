import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic to handle logout
    navigate("/sign-in");
    console.log("User logged out");
  };

  return (
    <div onClick={handleLogout}>
      <span style={{ marginRight: "2vw" }}>Logout</span>
      <FontAwesomeIcon icon={faSignOutAlt} />
    </div>
  );
}

export default Logout;

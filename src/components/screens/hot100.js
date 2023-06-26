import "../../css/main.css";
import React, { useState } from "react";

import Embed from "../screens/embed";

const fetchGuestToken = async () => {
  // For now, manually giving the token
  return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImZpcnN0X25hbWUiOiJTdXNobWl0IiwidXNlcm5hbWUiOiJzdXNobWl0IiwibGFzdF9uYW1lIjoiQmhhbG90aGlhIn0sInJlc291cmNlcyI6W3siaWQiOiIzODMyNjZmMi04M2JkLTRhNmEtODQzMi1iZjIyY2YwODA2YjEiLCJ0eXBlIjoiZGFzaGJvYXJkIn1dLCJybHNfcnVsZXMiOltdLCJpYXQiOjE2ODczNDU2OTkuOTcxNTA2NCwiZXhwIjoxNjg3MzQ1OTk5Ljk3MTUwNjQsImF1ZCI6Imh0dHA6Ly8wLjAuMC4wOjgwODAvIiwidHlwZSI6Imd1ZXN0In0.4Cz7gxrAJrGys_M7xBjvMVRrdFsCl-nsZV2e1XNhyQk";
};
function Hot100() {
  const [activePage, setActivePage] = useState("2");

  let dashboardId;
  if (activePage === "1") {
    dashboardId = process.env.REACT_APP_ID; // Replace with the first dashboard ID
  } else {
    dashboardId = process.env.REACT_APP_ID2; // Replace with the second dashboard ID
  }

  return <div className="outer"></div>;
}
export default Hot100;

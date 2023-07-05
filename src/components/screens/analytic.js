import "../../css/main.css";
import React, { useState } from "react";
import OptionalSide from "../router/optionalsidebar";

function Analytic() {
  const [activePage, setActivePage] = useState("2");

  let dashboardId;
  if (activePage === "1") {
    dashboardId = process.env.REACT_APP_ID; // Replace with the first dashboard ID
  } else {
    dashboardId = process.env.REACT_APP_ID2; // Replace with the second dashboard ID
  }

  return (
    <div className="outer">
      {/* <Helmet>
        <style type="text/css">{`
          iframe {
            height: 65vh !important;
            width: 80vw !important
            margin-top: -17vh;
            border: none;
            padding-bottom: -20vh;
          }
          body {
            background-color: white;
          }
        `}</style>
      </Helmet> */}

      {/* <div id="dashboard">
        {" "}
        <Embed />
    //  </div> */}
      <OptionalSide />
      <div>
        <h1>Analytics</h1>
      </div>
    </div>
  );
}
export default Analytic;

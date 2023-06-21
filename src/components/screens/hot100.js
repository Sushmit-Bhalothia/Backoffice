import "../../css/main.css";
import React, { useState } from "react";

import Embed from "../screens/embed";

const fetchGuestToken = async () => {
  // For now, manually giving the token
  return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImZpcnN0X25hbWUiOiJTdXNobWl0IiwidXNlcm5hbWUiOiJzdXNobWl0IiwibGFzdF9uYW1lIjoiQmhhbG90aGlhIn0sInJlc291cmNlcyI6W3siaWQiOiIzODMyNjZmMi04M2JkLTRhNmEtODQzMi1iZjIyY2YwODA2YjEiLCJ0eXBlIjoiZGFzaGJvYXJkIn1dLCJybHNfcnVsZXMiOltdLCJpYXQiOjE2ODczNDU2OTkuOTcxNTA2NCwiZXhwIjoxNjg3MzQ1OTk5Ljk3MTUwNjQsImF1ZCI6Imh0dHA6Ly8wLjAuMC4wOjgwODAvIiwidHlwZSI6Imd1ZXN0In0.4Cz7gxrAJrGys_M7xBjvMVRrdFsCl-nsZV2e1XNhyQk";
};
function Hot100() {
  const [activePage, setActivePage] = useState("2");
  // useEffect(() => {
  //   const loadDashboard = async () => {
  //     const guestToken = await fetchGuestToken();

  //     embedDashboard({
  //       id: process.env.REACT_APP_ID,
  //       supersetDomain: process.env.REACT_APP_URL,
  //       mountPoint: document.getElementById("dashboard"),
  //       dashboardUiConfig: {
  //         hideTitle: true,
  //         hideChartControls: true,
  //         filters: {
  //           visible: false,
  //         },
  //       },
  //       iframeAttributes: {
  //         id: "my-test-frame",
  //         className: "my-test-frame-class",
  //       },
  //       fetchGuestToken: () => Promise.resolve(guestToken),
  //     });
  //   };

  //   loadDashboard();
  // }, []);
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
      <div className="navi">
        <div
          className={
            activePage === "1"
              ? "active side-nav-elements"
              : "side-nav-elements"
          }
          onClick={() => {
            setActivePage("1");
          }}
        >
          Top Enrollers
        </div>
        <div
          className={
            activePage === "2"
              ? "active side-nav-elements"
              : "side-nav-elements"
          }
          onClick={() => {
            setActivePage("2");
          }}
        >
          Top Producers
        </div>
        <div
          className={
            activePage === "3"
              ? "active side-nav-elements"
              : "side-nav-elements"
          }
          onClick={() => {
            setActivePage("3");
          }}
        >
          {" "}
          My Top Enroller
        </div>
        <div
          className={
            activePage === "4"
              ? "active side-nav-elements"
              : "side-nav-elements"
          }
          onClick={() => {
            setActivePage("4");
          }}
        >
          {" "}
          My Top Producers
        </div>
      </div>
      {/* <div id="dashboard">
        {" "}
        <Embed />
    //  </div> */}
      <div>
        <h1>Hot 100</h1>
      </div>
    </div>
  );
}
export default Hot100;

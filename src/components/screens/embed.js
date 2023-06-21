// import React, { useEffect } from "react";
// import { Helmet } from "react-helmet";
// import { embedDashboard } from "@superset-ui/embedded-sdk";
// import "../../css/main.css";
// const fetchGuestToken = async () => {
//   // For now, manually giving the token
//   return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImZpcnN0X25hbWUiOiJTdXNobWl0IiwidXNlcm5hbWUiOiJzdXNobWl0IiwibGFzdF9uYW1lIjoiQmhhbG90aGlhIn0sInJlc291cmNlcyI6W3siaWQiOiIzODMyNjZmMi04M2JkLTRhNmEtODQzMi1iZjIyY2YwODA2YjEiLCJ0eXBlIjoiZGFzaGJvYXJkIn1dLCJybHNfcnVsZXMiOltdLCJpYXQiOjE2ODczNDgzNjAuMTkwMTg2MywiZXhwIjoxNjg3MzQ4NjYwLjE5MDE4NjMsImF1ZCI6Imh0dHA6Ly8wLjAuMC4wOjgwODAvIiwidHlwZSI6Imd1ZXN0In0.sR_FMW9RnVbQI3lJBHaNw0lD-efqP6pZoSwfZ8zSGAo";
// };

// const IFrameLoader = () => {
//   useEffect(() => {
//     const loadDashboard = async () => {
//       const guestToken = await fetchGuestToken();

//       embedDashboard({
//         id: process.env.REACT_APP_ID,
//         supersetDomain: process.env.REACT_APP_URL,
//         mountPoint: document.getElementById("my-superset-containe"),
//         dashboardUiConfig: {
//           hideTitle: true,
//           hideChartControls: true,
//           filters: {
//             visible: false,
//           },
//         },
//         iframeAttributes: {
//           id: "my-test-frame",
//           className: "my-test-frame-class",
//           style: { height: "80vh", width: "100%" },
//         },
//         fetchGuestToken: () => Promise.resolve(guestToken),
//       });
//     };

//     loadDashboard();
//   }, []);

//   return <div id="my-superset-containe" style={{ width: "100vw" }}></div>;
// };

// export default IFrameLoader;

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { embedDashboard } from "@superset-ui/embedded-sdk";
import "../../css/main.css";

const fetchGuestToken = async () => {
  // For now, manually giving the token
  return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImZpcnN0X25hbWUiOiJTdXNobWl0IiwidXNlcm5hbWUiOiJzdXNobWl0IiwibGFzdF9uYW1lIjoiQmhhbG90aGlhIn0sInJlc291cmNlcyI6W3siaWQiOiIzODMyNjZmMi04M2JkLTRhNmEtODQzMi1iZjIyY2YwODA2YjEiLCJ0eXBlIjoiZGFzaGJvYXJkIn1dLCJybHNfcnVsZXMiOltdLCJpYXQiOjE2ODczNTkzNzQuMzI1NjE2MSwiZXhwIjoxNjg3MzU5Njc0LjMyNTYxNjEsImF1ZCI6Imh0dHA6Ly8wLjAuMC4wOjgwODAvIiwidHlwZSI6Imd1ZXN0In0.qHj1RyI1A6MIIP736_bhvFBCSYzPokS7BaPa9_GdRO8";
};

const IFrameLoader = ({ id }) => {
  useEffect(() => {
    const loadDashboard = async () => {
      const guestToken = await fetchGuestToken();

      embedDashboard({
        id,
        supersetDomain: process.env.REACT_APP_URL,
        mountPoint: document.getElementById("my-superset-container"),
        dashboardUiConfig: {
          hideTitle: true,
          hideChartControls: true,
          filters: {
            visible: false,
          },
        },
        iframeAttributes: {
          id: "my-test-frame",
          className: "my-test-frame-class",
          style: { height: "80vh", width: "100%" },
        },
        fetchGuestToken: () => Promise.resolve(guestToken),
      });
    };

    loadDashboard();
  }, [id]);

  return (
    <div>
      {/*  <Helmet>
        <style type="text/css">{`
          iframe {
            height: 120vh !important;
            width: 80vw !important;
            margin-top: -17vh;
            border: none;
            padding-bottom: -20vh;
          }
          body {
            background-color: white;
          }
        `}</style>
      </Helmet> */}
      <div id="my-superset-container" style={{ width: "100vw" }}></div>
    </div>
  );
};

export default IFrameLoader;

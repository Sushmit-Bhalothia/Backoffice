import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { embedDashboard } from "@superset-ui/embedded-sdk";

const fetchGuestTokn = async () => {
  //for now manually giving the token
  return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImZpcnN0X25hbWUiOiJTdXNobWl0IiwidXNlcm5hbWUiOiJzdXNobWl0IiwibGFzdF9uYW1lIjoiQmhhbG90aGlhIn0sInJlc291cmNlcyI6W3siaWQiOiIzODMyNjZmMi04M2JkLTRhNmEtODQzMi1iZjIyY2YwODA2YjEiLCJ0eXBlIjoiZGFzaGJvYXJkIn1dLCJybHNfcnVsZXMiOltdLCJpYXQiOjE2ODczMjk0NDIuMTM2NjgsImV4cCI6MTY4NzMyOTc0Mi4xMzY2OCwiYXVkIjoiaHR0cDovLzAuMC4wLjA6ODA4MC8iLCJ0eXBlIjoiZ3Vlc3QifQ.MjGu_CzINq5iv4ixMYmvCSefbm1Ub8DqtHVENOspBpc";
};

class IFrameLoader extends Component {
  componentDidMount() {
    embedDashboard({
      id: process.env.REACT_APP_ID,
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
        style: "height:80vh, width:100%;",
      },
      fetchGuestToken: () => fetchGuestTokn(),
    });
  }

  render() {
    return (
      <div>
        <Helmet>
          <style type="text/css">{`
          iframe {
            height: 90vh !important;
            width: 300vw !important;
            margin-top:-17vh;
            border:none;
           
            padding-bottom:-20vh;
          }
          body{
            background-color:"white"
          }
          `}</style>
        </Helmet>
        <div id="my-superset-container" style={{ width: "100vw" }}></div>
      </div>
    );
  }
}

export default IFrameLoader;

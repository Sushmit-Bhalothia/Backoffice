import "../../css/main.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileModal from "../sharedComponents/optionalprofilemodal";
import ReportBug from "../sharedComponents/ReportBug";

function OptionalSide() {
  const navigate = useNavigate();
  return (
    <div className="navi" style={{ width: "18vw", fontSize: "2.5vh" }}>
      <ProfileModal />
      <div
        style={{
          height: "0.25px",
          width: "95%",
          backgroundColor: "grey",
          margin: "auto",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "6vh",
          fontSize: "2.5vh",
          fontFamily: "Montserrat",
        }}
      >
        <div
          className={
            window.location.pathname.startsWith("/snapshot/1")
              ? "active each"
              : "each"
          }
          onClick={() => {
            navigate("/snapshot/1");
          }}
        >
          Active Customers
        </div>
        <div
          className={
            window.location.pathname.startsWith("/snapshot/2")
              ? "active each"
              : "each"
          }
          onClick={() => {
            navigate("/snapshot/2");
          }}
        >
          Inactive Customers
        </div>
        <div
          className={
            window.location.pathname.startsWith("/snapshot/3")
              ? "active each"
              : "each"
          }
          onClick={() => {
            navigate("/snapshot/3");
          }}
        >
          Active Subscribers
        </div>
        <div
          className={
            window.location.pathname.startsWith("/snapshot/4")
              ? "active each"
              : "each"
          }
          onClick={() => {
            navigate("/snapshot/4");
          }}
        >
          Team Ranks
        </div>
        <div
          className={
            window.location.pathname.startsWith("/snapshot/5")
              ? "active each"
              : "each"
          }
          onClick={() => {
            navigate("/snapshot/5");
          }}
        >
          {" "}
          Rank Progress
        </div>
      </div>
      <ReportBug />
    </div>
  );
}
export default OptionalSide;

import "../../css/headerFooter.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ae from "../../lib/Be_logo.png";
import Dropdown from "../sharedComponents/dropdown";
import { useNavigate } from "react-router-dom";
import ProfileModal from "./profilemodal";
function Navbar() {
  const navigate = useNavigate();
  const Name = "Sushmit"; //from database
  const [activePage, setActivePage] = useState("dash");
  return (
    <>
      <div className="Header">
        <div className="logoHeader"></div>
        <span
          className={activePage === "dash" ? "active headerText" : "headerText"}
          onClick={() => {
            setActivePage("dash");
            navigate("");
          }}
        >
          Dashboard
          <div
            className={activePage === "dash" ? "underline_a" : "headerText"}
          ></div>
        </span>
        <span
          className={activePage === "snap" ? "active headerText" : "headerText"}
          onClick={() => {
            setActivePage("snap");
            navigate("/snapshot");
          }}
        >
          SnapShot
          <div
            className={activePage === "snap" ? "underline_a" : "headerText"}
          ></div>
        </span>
        <span
          c
          className={activePage === "hot" ? "active headerText" : "headerText"}
          onClick={() => {
            setActivePage("hot");
            navigate("/hot-100");
          }}
        >
          Hot 100
          <div
            className={activePage === "hot" ? "underline_a" : "headerText"}
          ></div>
        </span>
        <span
          className={
            activePage === "analytics" ? "active headerText" : "headerText"
          }
          onClick={() => {
            setActivePage("analytics");
            navigate("/analytics");
          }}
        >
          Analytics
          <div
            className={
              activePage === "analytics" ? "underline_a" : "headerText"
            }
          ></div>
        </span>
        <span
          className={
            activePage === "hallFame" ? "active headerText" : "headerText"
          }
          onClick={() => {
            setActivePage("hallFame");
            navigate("/hall-of-fame");
          }}
        >
          Hall of Fame
          <div
            className={activePage === "hallFame" ? "underline_a" : "headerText"}
          ></div>
        </span>
        <span
          className={
            activePage === "Social" ? "active headerText" : "headerText"
          }
          onClick={() => {
            setActivePage("Social");
            navigate("/social");
          }}
        >
          Be Social
          <div
            className={activePage === "Social" ? "underline_a" : "headerText"}
          ></div>
        </span>

        <Dropdown />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="profile">
            {Name}

            <ProfileModal />
          </div>
        </div>
      </div>
      {/* <div className="MobileHeader">
        <div className="logoHeader"></div>
        <div className="SearchBar"></div>
        <div className="Navbar"></div>
      </div> */}
    </>
  );
}
export default Navbar;

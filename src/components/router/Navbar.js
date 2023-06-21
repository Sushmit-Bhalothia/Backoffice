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

  return (
    <>
      <div className="Header">
        <div className="logoHeader"></div>
        <span
          className={
            window.location.pathname === "/"
              ? "active headerText"
              : "headerText"
          }
          onClick={() => {
            //setActivePage("/");
            navigate("");
          }}
        >
          Dashboard
          <div
            className={
              window.location.pathname === "/" ? "underline_a" : "headerText"
            }
          ></div>
        </span>
        <span
          className={
            window.location.pathname === "/snapshot"
              ? "active headerText"
              : "headerText"
          }
          onClick={() => {
            //  setActivePage("/snapshot");
            navigate("/snapshot");
          }}
        >
          SnapShot
          <div
            className={
              window.location.pathname === "/snapshot"
                ? "underline_a"
                : "headerText"
            }
          ></div>
        </span>
        <span
          c
          className={
            window.location.pathname === "/hot-100"
              ? "active headerText"
              : "headerText"
          }
          onClick={() => {
            //setActivePage("/hot-100");
            navigate("/hot-100");
          }}
        >
          Hot 100
          <div
            className={
              window.location.pathname === "/hot-100"
                ? "underline_a"
                : "headerText"
            }
          ></div>
        </span>
        <span
          className={
            window.location.pathname === "/analytics"
              ? "active headerText"
              : "headerText"
          }
          onClick={() => {
            // setActivePage("analytics");
            navigate("/analytics");
          }}
        >
          Analytics
          <div
            className={
              window.location.pathname === "/analytics"
                ? "underline_a"
                : "headerText"
            }
          ></div>
        </span>
        <span
          className={
            window.location.pathname === "/hall-of-fame"
              ? "active headerText"
              : "headerText"
          }
          onClick={() => {
            // setActivePage("hallFame");
            navigate("/hall-of-fame");
          }}
        >
          Hall of Fame
          <div
            className={
              window.location.pathname === "/hall-of-fame"
                ? "underline_a"
                : "headerText"
            }
          ></div>
        </span>
        <span
          className={
            window.location.pathname === "/social"
              ? "active headerText"
              : "headerText"
          }
          onClick={() => {
            // setActivePage("Social");
            navigate("/social");
          }}
        >
          Be Social
          <div
            className={
              window.location.pathname === "/social"
                ? "underline_a"
                : "headerText"
            }
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

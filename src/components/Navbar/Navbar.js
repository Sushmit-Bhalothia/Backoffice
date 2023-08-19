import "../../css/headerFooter.css";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import ae from "../../lib/Be_logo.png";
import Dropdown from "../sharedComponents/dropdown";
import { useNavigate } from "react-router-dom";
import ProfileModal from "../sharedComponents/profilemodal";
import MobileNavbar from "./mobile-navbar-modal";
import SearchBar from "../filters/Searchbar";
function Navbar() {
  const navigate = useNavigate();

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
            window.location.pathname.startsWith("/snapshot")
              ? "active headerText"
              : "headerText"
          }
          onClick={() => {
            //  setActivePage("/snapshot");
            navigate("/snapshot/1");
          }}
        >
          SnapShot
          <div
            className={
              window.location.pathname.startsWith("/snapshot")
                ? "underline_a"
                : "headerText"
            }
          ></div>
        </span>
        <span
          c
          className={
            window.location.pathname.startsWith("/hot-100")
              ? "active headerText"
              : "headerText"
          }
          onClick={() => {
            //setActivePage("/hot-100");
            navigate("/hot-100/1");
          }}
        >
          Hot 100
          <div
            className={
              window.location.pathname.startsWith("/hot-100")
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
        <div id="lang-navbar">
          <Dropdown />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="profile">
            <ProfileModal />
          </div>
        </div>
        {/* <div id="mobile-nav-logo"></div> */}
        <div id="Nav-Searchbar">
          <SearchBar />
        </div>
        <MobileNavbar />
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

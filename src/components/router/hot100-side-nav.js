import "../../css/main.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Hot100_Sidebar() {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("2");
  return (
    <div className="navi">
      <div
        className={
          window.location.pathname.startsWith("/hot-100/1")
            ? "active side-nav-elements"
            : "side-nav-elements"
        }
        onClick={() => {
          navigate("/hot-100/1");
        }}
      >
        Top Enrollers
      </div>
      <div
        className={
          window.location.pathname.startsWith("/hot-100/2")
            ? "active side-nav-elements"
            : "side-nav-elements"
        }
        onClick={() => {
          navigate("/hot-100/2");
        }}
      >
        Top Producers
      </div>
      <div
        className={
          window.location.pathname.startsWith("/hot-100/3")
            ? "active side-nav-elements"
            : "side-nav-elements"
        }
        onClick={() => {
          navigate("/hot-100/3");
        }}
      >
        {" "}
        My Top Enroller
      </div>
      <div
        className={
          window.location.pathname.startsWith("/hot-100/4")
            ? "active side-nav-elements"
            : "side-nav-elements"
        }
        onClick={() => {
          navigate("/hot-100/4");
        }}
      >
        {" "}
        My Top Producers
      </div>
    </div>
  );
}
export default Hot100_Sidebar;

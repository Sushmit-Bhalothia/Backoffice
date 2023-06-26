import React, { useState } from "react";
import "../../css/headerFooter.css";
import ae from "../../lib/mobile-nav-icon.png";
import { useNavigate } from "react-router-dom";
import ProfileModal from "./profilemodal";
import Dropdown from "../sharedComponents/dropdown";
import aae from "../../lib/Be_logo.png";
import Logout from "../Logout";

export default function NavModal() {
  const navigate = useNavigate();
  const Name = "Sushmit"; //from database
  const [modal, setModal] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleSubMenu = (menuName) => {
    if (activeSubMenu === menuName) {
      setActiveSubMenu(null);
    } else {
      setActiveSubMenu(menuName);
    }
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <img
        id="mobile-nav-logo"
        style={{
          height: "6vh",
          widhth: "10vw",
          marginLeft: "0.5vw",
        }}
        src={ae}
        onClick={toggleModal}
      />

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="Nav-modal-content">
            <div
              id="mobile-profile"
              style={{
                marginBottom: "7vw",

                display: "flex",
                alignItems: "center",
                borderBottom: "solid grey 1px",
              }}
            >
              <div>
                <ProfileModal />
              </div>
              <Dropdown />
            </div>
            <div
              className="Nav-modal-Elements"
              onClick={() => toggleSubMenu("Dashboard")}
            >
              Dashboard
            </div>
            {activeSubMenu === "Dashboard" && (
              <>
                <div className="Sub-nav-elemnts">Sub-menu for Dashboard</div>
              </>
            )}

            <div
              className="Nav-modal-Elements"
              onClick={() => toggleSubMenu("SnapShot")}
            >
              SnapShot
            </div>
            {activeSubMenu === "SnapShot" && (
              <>
                <div
                  className={
                    window.location.pathname.startsWith("/snapshot/1")
                      ? "active Sub-nav-elements"
                      : "Sub-nav-elements"
                  }
                  onClick={() => navigate("/snapshot/1")}
                >
                  Total Active Personal Customers
                </div>

                <div
                  className={
                    window.location.pathname.startsWith("/snapshot/2")
                      ? "active Sub-nav-elements"
                      : "Sub-nav-elements"
                  }
                  onClick={() => navigate("/snapshot/2")}
                >
                  Inactive Enrollment Customers Last 30 days
                </div>
                <div
                  className={
                    window.location.pathname.startsWith("/snapshot/3")
                      ? "active Sub-nav-elements"
                      : "Sub-nav-elements"
                  }
                  onClick={() => navigate("/snapshot/3")}
                >
                  Active Subscribers in My Enrollment Tree{" "}
                </div>
                <div
                  className={
                    window.location.pathname.startsWith("/snapshot/4")
                      ? "active Sub-nav-elements"
                      : "Sub-nav-elements"
                  }
                  onClick={() => navigate("/snapshot/4")}
                >
                  New Promoted Team Ranks{" "}
                </div>
                <div
                  className={
                    window.location.pathname.startsWith("/snapshot/5")
                      ? "active Sub-nav-elements"
                      : "Sub-nav-elements"
                  }
                  onClick={() => navigate("/snapshot/5")}
                >
                  {" "}
                  Raising Ranks Progress
                </div>
              </>
            )}

            <div
              className="Nav-modal-Elements"
              onClick={() => toggleSubMenu("Hot 100")}
            >
              Hot 100
            </div>
            {activeSubMenu === "Hot 100" && (
              <>
                <div
                  className={
                    window.location.pathname.startsWith("/hot-100/1")
                      ? "active Sub-nav-elements"
                      : "Sub-nav-elements"
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
                      ? "active Sub-nav-elements"
                      : "Sub-nav-elements"
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
                      ? "active Sub-nav-elements"
                      : "Sub-nav-elements"
                  }
                  onClick={() => {
                    navigate("/hot-100/3");
                  }}
                >
                  My Top Enrollers
                </div>
                <div
                  className={
                    window.location.pathname.startsWith("/hot-100/4")
                      ? "active Sub-nav-elements"
                      : "Sub-nav-elements"
                  }
                  onClick={() => {
                    navigate("/hot-100/4");
                  }}
                >
                  {" "}
                  My Top Producers
                </div>
              </>
            )}

            <div
              className="Nav-modal-Elements"
              onClick={() => toggleSubMenu("Analytics")}
            >
              Analytics
            </div>
            {activeSubMenu === "Analytics" && (
              <>
                <div className="Sub-nav-elements">Sub-menu for Analytics</div>
              </>
            )}

            <div
              className="Nav-modal-Elements"
              onClick={() => {
                toggleSubMenu("Hall of Fame");
                navigate("hall-of-fame");
              }}
            >
              Hall of Fame
            </div>
            {/* {activeSubMenu === "Hall of Fame" && (
              <>
                <div className="Sub-nav-elements">
                  Sub-menu for Hall of Fame
                </div>
              </>
            )} */}

            <div
              className="Nav-modal-Elements"
              onClick={() => toggleSubMenu("Be Social")}
            >
              Be Social
            </div>
            {activeSubMenu === "Be Social" && (
              <>
                <div className="Sub-nav-elements">Sub-menu for Be Social</div>
              </>
            )}
            <Logout className="Nav-modal-Elements" />
          </div>
        </div>
      )}
    </>
  );
}

import React, { useState } from "react";
import "../../css/headerFooter.css";
import ae from "../../lib/mobile-nav-icon.png";
import ProfileModal from "./profilemodal";
import Dropdown from "../sharedComponents/dropdown";

export default function NavModal() {
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
            <div id="mobile-profile" style={{ marginRight: "10vw" }}>
              <div>
                <ProfileModal />
                {Name}
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
                <div className="Sub-nav-elements">
                  Total Active Personal Customers
                </div>
                <div className="Sub-nav-elements">
                  Inactive Enrollment Customers Last 30 days
                </div>
                <div className="Sub-nav-elements">
                  Active Subscribers in My Enrollment Tree{" "}
                </div>
                <div className="Sub-nav-elements">New Promoted Team Ranks </div>
                <div className="Sub-nav-elements"> Raising Ranks Progress</div>
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
                <div className="Sub-nav-elements">Top Enrollers</div>
                <div className="Sub-nav-elements">Top Producers</div>
                <div className="Sub-nav-elements">My Top Enrollers</div>
                <div className="Sub-nav-elements"> My Top Producers</div>
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
              onClick={() => toggleSubMenu("Hall of Fame")}
            >
              Hall of Fame
            </div>
            {activeSubMenu === "Hall of Fame" && (
              <>
                <div className="Sub-nav-elements">
                  Sub-menu for Hall of Fame
                </div>
              </>
            )}

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
          </div>
        </div>
      )}
    </>
  );
}

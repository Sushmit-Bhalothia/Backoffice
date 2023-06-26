import React, { useState } from "react";
import "../../css/headerFooter.css";
import ae from "../../lib/Be_logo.png";

export default function ProfileModal() {
  const Name = "Sushmit";
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      {/* <button onClick={toggleModal} className="btn-modal">
        Open
      </button> */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{
            height: "3.0vh",
            widhth: " 3wh",
            marginLeft: "0.5vw",
            borderRadius: "100%",
          }}
          src={ae}
          onClick={toggleModal}
        ></img>
        <span>{Name}</span>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="modal-Elements ">Account Settings</div>
            <div className="modal-Elements ">Kyc Verified</div>
            <div className="modal-Elements ">Subscription Management</div>
            <div className="modal-Elements ">My Portal</div>
            <div className="modal-Elements ">Return to Backoffice</div>
            <div className="modal-Elements ">Notification Preference</div>
          </div>
        </div>
      )}
    </>
  );
}

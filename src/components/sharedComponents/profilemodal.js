import React, { useState } from "react";
import "../../css/headerFooter.css";
import ae from "../../lib/profile.jpeg";

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
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img
          style={{
            objectFit: "cover",
            height: "40px",
            width: "40px",
            marginRight: "0.5vw",
            borderRadius: "50%",
          }}
          alt="profile"
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

import React, { useState } from "react";
import "../../css/headerFooter.css";
import ae from "../../lib/profile.jpeg";

export default function ProfileModal() {
  const Name = "Sushmit";
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    //setModal(!modal);
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
      <div style={{ marginTop: "-15vh", display: "flex", marginBottom: "2vh" }}>
        <img
          style={{
            //

            //widhth: " 10wh",
            height: "10vh",
            width: "5vw",
            //marginRight: "0.5vw",
            marginLeft: "2vw",

            borderRadius: "1000px",
          }}
          src={ae}
          onClick={toggleModal}
        ></img>
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",

            fontFamily: "Montserrat",
            marginTop: "3vh",
            marginLeft: "2vh",
          }}
        >
          {Name}
        </div>
      </div>

      {modal && (
        <div className="modal" style={{ zIndex: 1000}}>
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

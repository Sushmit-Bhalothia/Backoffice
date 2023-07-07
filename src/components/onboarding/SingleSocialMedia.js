import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../css/auth-onboarding/index.css";
import {
  faInstagram,
  faFacebook,
  faTelegram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const InstagramConnect = ({ name }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [username, setUsername] = useState("");

  const handleConnectClick = () => {
    setIsConnected(true);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleClearInput = () => {
    setUsername("");
    setIsConnected(false);
  };

  return (
    <div
      className="instagram-connect"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "2vh",
      }}
    >
      <div className="instagram-icon">
        <FontAwesomeIcon
          icon={
            name === "Instagram"
              ? faInstagram
              : name === "Telegram"
              ? faTelegram
              : name === "Linkedin"
              ? faLinkedin
              : faFacebook
          }
        />
        <span
          className="Sub-heading"
          style={{ margin: "2vh", fontWeight: "500" }}
        >
          {name}
        </span>
      </div>
      {/* ... */}

      {!isConnected ? (
        <div className="connect-section">
          <button className="Smaller-Button" onClick={handleConnectClick}>
            Connect
          </button>
        </div>
      ) : (
        <div className="connected-section">
          <div className="input-container">
            <input
              className="t-Input"
              type="text"
              placeholder="write"
              value={username}
              onChange={handleUsernameChange}
            />
            <span className="clickable" onClick={handleClearInput}>
              &times;
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstagramConnect;

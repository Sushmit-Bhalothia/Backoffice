import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug } from "@fortawesome/free-solid-svg-icons";

const BugReportModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [bugDescription, setBugDescription] = useState("");
  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setBugDescription("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your bug report submission logic here
    console.log("Bug Description:", bugDescription);
    handleCloseModal();
  };

  return (
    <div
      style={{
        position: "absolute",
        bottom: "-20vh",
        left: "5vw",
        fontFamily: "Monsterrat",
      }}
    >
      <div
        onClick={handleOpenModal}
        style={{
          boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.1)",
          backgroundColor: "white",
          border: "none",
          textAlign: "center",
          justifyContent: "center",
          textJustify: "center",
          display: "flex",
          padding: "0.25vw",
          borderRadius: "5px",
        }}
      >
        <FontAwesomeIcon icon={faBug} color="#6d06c6" size="2x" />
        <div style={{ marginLeft: "1vw", paddingTop: "0.4vh" }}>
          Report A Bug
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Bug Report Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            position: "absolute",
            top: "20vh",
            left: "70vh",
            borderRadius: "8px",
            boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            fontFamily: "Montserrat",

            border: "none",
            height: "45vh",
            width: "25vw",

            backgroundColor: "white",
            padding: "20px",
          },
        }}
      >
        <h2>Feedback Form</h2>
        <p style={{ color: "grey", width: "90%", margin: "auto" }}>
          {" "}
          We value your feedback in improving our services. Feel free to write
          your thoughts
        </p>
        <select
          style={{
            height: "3vh",
            border: "none",
            borderRadius: "10px",
            width: "90%",
            margin: "3vh",
            boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.2)",
          }}
          value={selectedOption}
          onChange={(e) => handleOptionChange(e.target.value)}
        >
          <option value="">Select Option</option>
          <option value="Active">Report A bug</option>
          <option value="Inactive">Get support</option>
          <option value="Inactive">Feature Request</option>
          <option value="Inactive">Other</option>
        </select>

        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="bugDescription">Bug Description:</label> */}
          <textarea
            style={{
              display: "block",
              width: "85%",
              margin: "auto",
              marginBottom: "1vh",
            }}
            id="bugDescription"
            rows="8"
            // cols="30"
            value={bugDescription}
            onChange={(e) => setBugDescription(e.target.value)}
          />
          <input
            style={{ margin: "1vh", fontFamily: "Montserrat" }}
            type="file"
          ></input>
          <button className="Button" type="submit">
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default BugReportModal;

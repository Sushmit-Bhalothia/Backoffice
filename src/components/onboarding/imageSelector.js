import React, { useState, useRef } from "react";

const DragAndDrop = () => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    handleImageUpload(e.dataTransfer.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileInputChange = (e) => {
    handleImageUpload(e.target.files);
  };

  const handleImageUpload = (files) => {
    const file = files[0];
    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageChange = () => {
    setImage(null);
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="drop-container"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {image ? (
        <>
          <div>
            <img
              style={{ height: "15vh", margin: "auto" }}
              src={image}
              alt="Uploaded"
              className="uploaded-image"
            />
          </div>
          <div>
            <span className="clickable-button" onClick={handleImageChange}>
              Change Image
            </span>
          </div>
        </>
      ) : (
        <div>
          <div className="file-input-container">
            <p className="FormText">Drag and drop an image (PNG or JPG) here</p>
            <input
              type="file"
              accept=".png,.jpg,.jpeg"
              onChange={handleFileInputChange}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
            <button className="Small-Button" onClick={handleUploadButtonClick}>
              Upload
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DragAndDrop;

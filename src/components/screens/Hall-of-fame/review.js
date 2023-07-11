import React from "react";

const ReviewComponent = ({ rating }) => {
  return (
    <div
      className="review-component"
      style={{
        //color: "white",
        display: "flex",
        alignitems: "center",

        padding: "0.25vh",
        height: "2.5vh",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "1.5vw",
          paddingRight: "0.5vw",
          textAlign: "center",
          //border: "solid black 2px",
          borderRadius: "100%",
          height: "100%",
          boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.1)",
          justifyContent: "center",
          fontWeight: 600,
        }}
      >
        {rating}
      </div>
      <div
        className="rating-display"
        style={{
          backgroundColor: "#6d06c6",
          padding: "0.25vh",

          borderRadius: "5px",
        }}
      >
        {Array.from({ length: rating }, (_, index) => (
          <span
            key={index}
            role="img"
            aria-label="star"
            style={{ fontSize: "small" }}
          >
            ⭐️
          </span>
        ))}
      </div>
    </div>
  );
};

export default ReviewComponent;

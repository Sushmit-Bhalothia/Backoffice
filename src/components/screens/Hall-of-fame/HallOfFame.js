import React, { useEffect, useState, useCallback } from "react";
import "../../../css/main.css";
import SearchBar from "../../filters/Searchbar";
import Card from "./hall-of-fame_Card";

function HallFame() {
  const [cardsData, setCardsData] = useState([
    "ram",
    "shyam",
    "john",
    "jane",
    "max",
    "john",
    "jane",
    "max",
    "ram",
    "jane",
    "shyam",
    "john",
    "jane",
    "max",
    "john",
    "jane",
    "max",
  ]);
  const [cardsPerRow, setCardsPerRow] = useState(1);

  const updateCardsPerRow = useCallback(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1050) {
      setCardsPerRow(3);
    } else if (screenWidth >= 600) {
      setCardsPerRow(2);
    } else {
      setCardsPerRow(1);
    }
  }, []);

  useEffect(() => {
    updateCardsPerRow();
    window.addEventListener("resize", updateCardsPerRow);
    return () => {
      window.removeEventListener("resize", updateCardsPerRow);
    };
  }, [updateCardsPerRow]);

  const renderCards = () => {
    const rows = [];
    const totalCards = cardsData.length;

    for (let i = 0; i < totalCards; i += cardsPerRow) {
      const row = cardsData
        .slice(i, i + cardsPerRow)
        .map((card, index) => <Card key={index} data={card} />);
      rows.push(
        <div className="card-row" key={i}>
          {row}
        </div>
      );
    }

    return rows;
  };

  return (
    <div id="hall-of-fame">
      <div className="content-heading">
        <h1>Hall of fame</h1>
        <SearchBar style={{ width: "40vw" }} />
      </div>
      <div className="content-subheading">
        This page contains little description of the page
      </div>
      <div className="card-container">{renderCards()}</div>
    </div>
  );
}

export default HallFame;

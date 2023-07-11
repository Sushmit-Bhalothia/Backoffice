import React, { useEffect, useState, useCallback } from "react";
import "../../../css/main.css";
import Table from "../../Table/Hot100_table";
import Filter from "../../filters/Filter2";
import SearchBar from "../../filters/Searchbar";
import Card from "./hot100_card";
import TopCard from "./Hot100_TopCard";

function Hot100_1() {
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
    const cardRankings = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    ];

    const rows = [];
    const totalCards = cardRankings.length;

    for (let i = 0; i < totalCards; i += cardsPerRow) {
      const row = cardRankings.slice(i, i + cardsPerRow).map((ranking) => {
        if (i === 0 && ranking <= 3) {
          return <TopCard key={ranking} ranking={ranking} />;
        } else {
          return <Card key={ranking} ranking={ranking} />;
        }
      });
      rows.push(
        <div className="card-row" key={i}>
          {row}
        </div>
      );
    }

    return rows;
  };

  return (
    <div>
      <div className="content-heading">
        <h2> Top Enrollers</h2>
        <div id="BodyFilter">
          <SearchBar />
        </div>
      </div>
      <div className="content-subheading">
        Some description of the page. Here is a list of my top enrollers.
      </div>
      <Filter />
      <div className="card-container" style={{ marginTop: "8vh" }}>
        {renderCards()}
      </div>
    </div>
  );
}

export default Hot100_1;

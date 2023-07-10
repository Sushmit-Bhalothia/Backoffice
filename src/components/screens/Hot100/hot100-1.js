import React, { useEffect, useState, useCallback, useContext } from "react";
import "../../../css/main.css";
import Table from "../../Table/Hot100_table";
import Filter from "../../filters/Filter2";
import SearchBar from "../../filters/Searchbar";
import Card from "./hot100_card";
import TopCard from "./Hot100_TopCard";

import { FilterContext } from "../../contexts/FilterContext";

function Hot100_1() {
  const { filter } = useContext(FilterContext);
  const data = [
    {
      customerId: 1,
      name: "John",
      achievedRank: ["Gold", "silver"],
      directSponsor: "Jane",
      enrollmentLevel: 2,
    },
    {
      customerId: 2,
      name: "John",
      achievedRank: "Gold",
      directSponsor: "Jane",
      enrollmentLevel: 2,
    },
    {
      customerId: 3,
      name: "John",
      achievedRank: "Gold",
      directSponsor: "Jane",
      enrollmentLevel: 2,
    },
    {
      customerId: 4,
      name: "John",
      achievedRank: "Gold",
      directSponsor: "Jane",
      enrollmentLevel: 2,
    },
    {
      customerId: 5,
      name: "John",
      achievedRank: "Gold",
      directSponsor: "Jane",
      enrollmentLevel: 2,
    },
    {
      customerId: 6,
      name: "John",
      achievedRank: "Gold",
      directSponsor: "Jane",
      enrollmentLevel: 2,
    },
    {
      customerId: 7,
      name: "John",
      achievedRank: "Gold",
      directSponsor: "Jane",
      enrollmentLevel: 2,
    },
    {
      customerId: 8,
      name: "John",
      achievedRank: "Gold",
      directSponsor: "Jane",
      enrollmentLevel: 2,
    },
    {
      customerId: 9,
      name: "John",
      achievedRank: "Gold",
      directSponsor: "Jane",
      enrollmentLevel: 2,
    },
    {
      customerId: 10,
      name: "John",
      achievedRank: "Gold",
      directSponsor: "Jane",
      enrollmentLevel: 2,
    },
    {
      customerId: 11,
      name: "John",
      achievedRank: "Gold",
      directSponsor: "Jane",
      enrollmentLevel: 12,
    },
    {
      customerId: 12,
      name: "John",
      achievedRank: "Gold",
      directSponsor: "Jane",
      enrollmentLevel: 2,
    },
    {
      customerId: 13,
      name: "John",
      achievedRank: "Gold",
      directSponsor: "Jane",
      enrollmentLevel: 2,
    },
    {
      customerId: 14,
      name: "John",
      achievedRank: "Gold",
      directSponsor: "Jane",
      enrollmentLevel: 2,
    },

    {
      customerId: 15,
      name: "John",
      achievedRank: "Gold",
      directSponsor: "Jane",
      enrollmentLevel: 2,
    },
    {
      customerId: 16,
      name: "John",
      achievedRank: "Gold",
      directSponsor: "Jane",
      enrollmentLevel: 2,
    },
    {
      customerId: 17,
      name: "John",
      achievedRank: "Gold",
      directSponsor: "Jane",
      enrollmentLevel: 2,
    },
    {
      customerId: 18,
      name: "John",
      achievedRank: "Gold",
      directSponsor: "Jane",
      enrollmentLevel: 2,
    },
    {
      customerId: 19,
      name: "John",
      achievedRank: "Gold",
      directSponsor: "Jane",
      enrollmentLevel: 2,
    },
    {
      customerId: 20,
      name: "John",
      achievedRank: "Gold",
      directSponsor: "Jane",
      enrollmentLevel: 2,
    },
    {
      customerId: 21,
      name: "John",
      achievedRank: "Gold",
      directSponsor: "Jane",
      enrollmentLevel: 2,
    },
    {
      customerId: 22,
      name: "John",
      achievedRank: "Gold",
      directSponsor: "Jane",
      enrollmentLevel: 2,
    },
    {
      customerId: 23,
      name: "John",
      achievedRank: "Gold",
      directSponsor: "Jane",
      enrollmentLevel: 2,
    },
    {
      customerId: 24,
      name: "John",
      achievedRank: "Gold",
      directSponsor: "Jane",
      enrollmentLevel: 2,
    },
    {
      customerId: 35,
      name: "John",
      achievedRank: "Gold",
      directSponsor: "Jane",
      enrollmentLevel: 2,
    },
    {
      customerId: 26,
      name: "John",
      achievedRank: "Gold",
      directSponsor: "Jane",
      enrollmentLevel: 12,
    },
    {
      customerId: 27,
      name: "John",
      achievedRank: "Gold",
      directSponsor: "Jane",
      enrollmentLevel: 2,
    },
    {
      customerId: 28,
      name: "John",
      achievedRank: ["Gold", "silver"],
      directSponsor: "Jane",
      enrollmentLevel: 2,
    },

    // Additional data entries...
  ];

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
        <h3> Top Enrollers</h3>
        <SearchBar style={{ width: "40vw" }} />
      </div>
      <div className="content-subheading">
        Some discription of the page here is list my top enrollers
      </div>
      <Filter />
      {filter.displayMode === "table" ? (
        <Table data={data} />
      ) : (
        <div className="card-container" style={{ marginTop: "8vh" }}>
          {renderCards()}
        </div>
      )}
    </div>
  );
}
export default Hot100_1;

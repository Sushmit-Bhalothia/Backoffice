import "../../../css/main.css";
import SearchBar from "../../filters/Searchbar";
import { Directus } from "@directus/sdk";

import TableComponent from "../../Table/TableComponenet";
import Filter from "../../filters/Filter";
import { useState, useEffect, useContext } from "react";
import React from "react";
import { FilterContext } from "../../contexts/FilterContext";

// Other imports...

function Snapshot4() {
  const [publicdata, setPublicData] = useState([]);
  const { filter, updateFilter } = useContext(FilterContext);

  let filterId = parseInt(filter.name, 10);

  filterId = isNaN(filterId) ? -1 : filterId;

  const [data, setData] = useState([]);
  const tableName = "TemporaryRanksTable"; // Replace this with your actual table name

  useEffect(() => {
    fetchData(tableName);
  }, [filter]);

  const fetchData = async (tableName) => {
    try {
      const response = await fetch(
        `http://localhost:8055/demo/hello?start_date=2023-01-01%2000:00:00.000&end_date=2023-04-27%2023:59:59.000`
      );
      const jsonData = await response.json();
      jsonData.sort((a, b) => {
        const valueA = a[filter.sort];
        const valueB = b[filter.sort];

        // Check if both values are numbers
        if (!isNaN(valueA) && !isNaN(valueB)) {
          return parseFloat(valueA) - parseFloat(valueB);
        }

        // If one or both values are strings, use localeCompare for string comparison
        return valueA.toString().localeCompare(valueB.toString());
      });
      setData(jsonData);
      console.log(filter.sort);

      // sorting;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // console.log(state.num);
  console.log(data[0]);

  return (
    <div>
      <div className="content-heading">
        <div style={{ marginTop: "20px" }}> New Promoted Team Ranks</div>
        <div id="BodyFilter">
          <SearchBar />
        </div>
      </div>
      <div className="content-subheading">
        This report contains your team ranks info or your enrolment tree
        organisation newly promoted ranks on the current cycle. You can use the
        filter or additional column to fetch granular data.
      </div>

      <Filter />

      {/* {publicdata.length > 0 ? ( */}
      <TableComponent data={data} />
      {/* ) : (
        <div>No data Found ...</div>
      )} */}
    </div>
  );
}

export default Snapshot4;
// const data = [
//   {
//     customerId: 1,
//     name: "John",
//     achievedRank: ["Gold"],
//     directSponsor: "Jane",
//     enrollmentLevel: 2,
//   },
//   {
//     customerId: 2,
//     name: "John",
//     achievedRank: "Gold",
//     directSponsor: "Jane",
//     enrollmentLevel: 2,
//   },
//   {
//     customerId: 3,
//     name: "John",
//     achievedRank: "Gold",
//     directSponsor: "Jane",
//     enrollmentLevel: 2,
//   },
//   {
//     customerId: 4,
//     name: "John",
//     achievedRank: "Gold",
//     directSponsor: "Jane",
//     enrollmentLevel: 2,
//   },
//   {
//     customerId: 5,
//     name: "John",
//     achievedRank: "Gold",
//     directSponsor: "Jane",
//     enrollmentLevel: 2,
//   },
//   {
//     customerId: 6,
//     name: "John",
//     achievedRank: "Gold",
//     directSponsor: "Jane",
//     enrollmentLevel: 2,
//   },
//   {
//     customerId: 7,
//     name: "John",
//     achievedRank: "Gold",
//     directSponsor: "Jane",
//     enrollmentLevel: 2,
//   },
//   {
//     customerId: 8,
//     name: "John",
//     achievedRank: "Gold",
//     directSponsor: "Jane",
//     enrollmentLevel: 2,
//   },
//   {
//     customerId: 9,
//     name: "John",
//     achievedRank: "Gold",
//     directSponsor: "Jane",
//     enrollmentLevel: 2,
//   },
//   {
//     customerId: 10,
//     name: "John",
//     achievedRank: "Gold",
//     directSponsor: "Jane",
//     enrollmentLevel: 2,
//   },
//   {
//     customerId: 11,
//     name: "John",
//     achievedRank: "Gold",
//     directSponsor: "Jane",
//     enrollmentLevel: 12,
//   },
//   {
//     customerId: 12,
//     name: "John",
//     achievedRank: "Gold",
//     directSponsor: "Jane",
//     enrollmentLevel: 2,
//   },
//   {
//     customerId: 13,
//     name: "John",
//     achievedRank: "Gold",
//     directSponsor: "Jane",
//     enrollmentLevel: 2,
//   },
//   {
//     customerId: 14,
//     name: "John",
//     achievedRank: "Gold",
//     directSponsor: "Jane",
//     enrollmentLevel: 2,
//   },

//   {
//     customerId: 15,
//     name: "John",
//     achievedRank: "Gold",
//     directSponsor: "Jane",
//     enrollmentLevel: 2,
//   },
//   {
//     customerId: 16,
//     name: "John",
//     achievedRank: "Gold",
//     directSponsor: "Jane",
//     enrollmentLevel: 2,
//   },
//   {
//     customerId: 17,
//     name: "John",
//     achievedRank: "Gold",
//     directSponsor: "Jane",
//     enrollmentLevel: 2,
//   },
//   {
//     customerId: 18,
//     name: "John",
//     achievedRank: "Gold",
//     directSponsor: "Jane",
//     enrollmentLevel: 2,
//   },
//   {
//     customerId: 19,
//     name: "John",
//     achievedRank: "Gold",
//     directSponsor: "Jane",
//     enrollmentLevel: 2,
//   },
//   {
//     customerId: 20,
//     name: "John",
//     achievedRank: "Gold",
//     directSponsor: "Jane",
//     enrollmentLevel: 2,
//   },
//   {
//     customerId: 21,
//     name: "John",
//     achievedRank: "Gold",
//     directSponsor: "Jane",
//     enrollmentLevel: 2,
//   },
//   {
//     customerId: 22,
//     name: "John",
//     achievedRank: "Gold",
//     directSponsor: "Jane",
//     enrollmentLevel: 2,
//   },
//   {
//     customerId: 23,
//     name: "John",
//     achievedRank: "Gold",
//     directSponsor: "Jane",
//     enrollmentLevel: 2,
//   },
//   {
//     customerId: 24,
//     name: "John",
//     achievedRank: "Gold",
//     directSponsor: "Jane",
//     enrollmentLevel: 2,
//   },
//   {
//     customerId: 35,
//     name: "John",
//     achievedRank: "Gold",
//     directSponsor: "Jane",
//     enrollmentLevel: 2,
//   },
//   {
//     customerId: 26,
//     name: "John",
//     achievedRank: "Gold",
//     directSponsor: "Jane",
//     enrollmentLevel: 12,
//   },
//   {
//     customerId: 27,
//     name: "John",
//     achievedRank: "Gold",
//     directSponsor: "Jane",
//     enrollmentLevel: 2,
//   },
//   {
//     customerId: 28,
//     name: "John",
//     achievedRank: "Gold",
//     directSponsor: "Jane",
//     enrollmentLevel: 2,
//   },

//   // Additional data entries...
// ];

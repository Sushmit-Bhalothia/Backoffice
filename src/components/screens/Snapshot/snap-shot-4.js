import "../../../css/main.css";
import SearchBar from "../../Searchbar";
import { Directus } from "@directus/sdk";

import TableComponent from "../../sharedComponents/TableComponenet";
import Filter from "../../sharedComponents/Filter";
function Snapshot4() {
  let publicdata;
  async function publicData() {
    try {
      const directus = new Directus("https://directus.bebackoffice.com");
      let p = await directus.items("Team_Ranks").readByQuery({ sort: ["id"] });
      publicdata = p.data;

      // console.log(publicdata[0]);
      publicdata.forEach((item) => {
        console.log(item.name);
      });
    } catch (error) {
      console.error("An error occurred while fetching public data:", error);
    }
  }
  publicData();

  return (
    <div>
      <div className="content-heading">
        <h3> New Promoted Team Ranks</h3>
        <SearchBar style={{ width: "40vw" }} />
      </div>
      <div className="content-subheading">
        This report contains your team ranks info or your enrolment tree
        organisation newly promoted ranks on the current cycle. You can use the
        filter or additional column to fetch granular data
      </div>

      <Filter />

      <TableComponent data={publicdata} />
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

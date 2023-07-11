import "../../../css/main.css";
import Table from "../../Table/Hot100_table";
import Filter from "../../filters/Filter2";
import SearchBar from "../../filters/Searchbar";
import Addfilter from "../../filters/additionalFilter";
function Hot100_1() {
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
  return (
    <div>
      <div className="content-heading">
        <h2> Top Enrollers</h2>
        <div id="BodyFilter">
          <SearchBar style={{ width: "40vw" }} />
        </div>
      </div>
      <div className="content-subheading">
        Some discription of the page here is list my top enrollers
      </div>
      <Filter />
      <Addfilter />
      <Table data={data} />
    </div>
  );
}
export default Hot100_1;

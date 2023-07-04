import "../../../css/main.css";
import Table from "../../sharedComponents/Hot100_table";
import Filter from "../../sharedComponents/Filter2";
import SearchBar from "../../Searchbar";
import Card from "./hot100_card";
import TopCard from "./Hot100_TopCard";
function Hot100_1() {
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
      <div style={{ display: "flex", marginTop: "8vh" }}>
        <TopCard ranking={1} />
        <TopCard ranking={2} />
        <TopCard ranking={3} />
      </div>
      <div style={{ display: "flex" }}>
        <Card ranking={4} />
        <Card ranking={5} />
        <Card ranking={6} />
      </div>
      <div style={{ display: "flex" }}>
        <Card ranking={7} />
        <Card ranking={8} />
        <Card ranking={9} />
      </div>
      <div style={{ display: "flex" }}>
        <Card ranking={10} />
        <Card ranking={11} />
        <Card ranking={12} />
      </div>
      <div style={{ display: "flex" }}>
        <Card ranking={13} />
        <Card ranking={14} />
        <Card ranking={15} />
      </div>
      <div style={{ display: "flex" }}>
        <Card ranking={16} />
        <Card ranking={17} />
        <Card ranking={18} />
      </div>
      <div style={{ display: "flex" }}>
        <Card ranking={19} />
        <Card ranking={20} />
        <Card ranking={21} />
      </div>
    </div>
  );
}
export default Hot100_1;

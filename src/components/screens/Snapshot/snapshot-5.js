import "../../../css/main.css";
import SearchBar from "../../filters/Searchbar";

import TableComponent from "../../Table/hybridTable";
import Filter from "../../filters/Filter";
function Snapshot1() {
  const data = [
    {
      customerId: "1",
      name: "john",
      type: ["learn"],
      subscription: ["gold"],
      enrollmentDate: ["15 Jan 2023"],
      expiringIn: ["16 Feb 2023"],
      autoRenewal: ["OFF"],
      email: ["janegreat@gamil.com"],
    },
    {
      customerId: "2",
      name: "john",
      type: ["live"],
      subscription: ["gold"],
      enrollmentDate: ["15 Jan 2023"],
      expiringIn: ["16 Feb 2023"],
      autoRenewal: ["OFF"],
      email: ["janegreat@gamil.com"],
    },
    {
      customerId: "3",
      name: "john",
      type: ["learn", "live"],
      subscription: ["gold", "silver"],
      enrollmentDate: ["15 Jan 2023", "15  Feb 2023"],
      expiringIn: ["16 Feb 2023", "16  Mar 2023"],
      autoRenewal: ["OFF", "ON"],
      email: ["janegreat@gamil.com"],
    },
    {
      customerId: "4",
      name: "john",
      type: ["live"],
      subscription: ["gold"],
      enrollmentDate: ["15 Jan 2023"],
      expiringIn: ["16 Feb 2023"],
      autoRenewal: ["OFF"],
      email: ["janegreat@gamil.com"],
    },
    {
      customerId: "5",
      name: "john",
      type: ["live"],
      subscription: ["gold"],
      enrollmentDate: ["15 Jan 2023"],
      expiringIn: ["16 Feb 2023"],
      autoRenewal: ["OFF"],
      email: ["janegreat@gamil.com"],
    },
    {
      customerId: "6",
      name: "john",
      type: ["learn", "live", "live"],
      subscription: ["gold", "silver", "gold"],
      enrollmentDate: ["15 Jan 2023", "15  Feb 2023", "15 April 2023"],
      expiringIn: ["16 Feb 2023", "15 April 2023", "16  Aug 2023"],
      autoRenewal: ["OFF", "ON", "OFF"],
      email: ["janegreat@gamil.com"],
    },
    {
      customerId: "7",
      name: "jane",
      type: ["learn"],
      subscription: ["gold"],
      enrollmentDate: ["15 jan 2023"],
      expiringIn: ["16 Feb 2023"],
      autoRenewal: ["OFF"],
      email: ["janegreat@gamil.com"],
    },
    {
      customerId: "8",
      name: "jane",
      type: ["live"],
      subscription: ["gold"],
      enrollmentDate: ["15 jan 2023"],
      expiringIn: ["16 Feb 2023"],
      autoRenewal: ["OFF"],
      email: ["janegreat@gamil.com"],
    },
    {
      customerId: "9",
      name: "jane",
      type: ["learn", "live"],
      subscription: ["gold", "silver"],
      enrollmentDate: ["15 jan 2023", "15  Feb 2023"],
      expiringIn: ["16 Feb 2023", "16  Mar 2023"],
      autoRenewal: ["OFF", "ON"],
      email: ["janegreat@gamil.com"],
    },
    {
      customerId: "10",
      name: "jane",
      type: ["live"],
      subscription: ["gold"],
      enrollmentDate: ["15 jan 2023"],
      expiringIn: ["16 Feb 2023"],
      autoRenewal: ["OFF"],
      email: ["janegreat@gamil.com"],
    },
    {
      customerId: "11",
      name: "jane",
      type: ["live"],
      subscription: ["gold"],
      enrollmentDate: ["15 jan 2023"],
      expiringIn: ["16 Feb 2023"],
      autoRenewal: ["OFF"],
      email: ["janegreat@gamil.com"],
    },
    {
      customerId: "12",
      name: "jane",
      type: ["learn", "live", "live"],
      subscription: ["gold", "silver", "gold"],
      enrollmentDate: ["15 jan 2023", "15  Feb 2023", "15 april 2023"],
      expiringIn: ["16 Feb 2023", "15 april 2023", "16  aug 2023"],
      autoRenewal: ["OFF", "ON", "OFF"],
      email: ["janegreat@gamil.com"],
    },
    // Additional data entries...
  ];
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

      <Filter />

      <TableComponent data={data} />
    </div>
  );
}
export default Snapshot1;

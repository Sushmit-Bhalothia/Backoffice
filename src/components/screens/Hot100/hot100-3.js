import Embed from "../../screens/embed";
import "../../../css/main.css";
function Hot100_1() {
  return (
    <div id="dashboard">
      {" "}
      <Embed id={process.env.REACT_APP_ID} />
    </div>
  );
}
export default Hot100_1;

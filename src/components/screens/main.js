import Embed from "../screens/embed";
import Carousel from "../sharedComponents/Carousel";
function Main() {
  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          width: "95%",
          margin: "auto",

          // height: "50px",
          paddingTop: "20px",
          paddingBottom: "20px",
          fontFamily: "Montserrat",
          color: "red",
        }}
      >
        The Current Commission period will close on: Friday 11:59 PM CST \ The
        current commission Cycle will close on 15/07/2023 00:00:00 CST
      </div>
      <Carousel />

      {/* <div
        style={{
          width: "100%",
          margin: "auto",
          height: "25vh",

          backgroundColor: "orange",
          fontSize: "245px",
        }}
      >
        {" "}
        Second bannner
      </div> */}
    </div>
  );
}
export default Main;

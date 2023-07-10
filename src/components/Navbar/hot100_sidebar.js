import "../../css/main.css";

import { useNavigate } from "react-router-dom";
import ProfileModal from "../sharedComponents/optionalprofilemodal";
import ReportBug from "../sharedComponents/ReportBug";

function OptionalSide() {
  const navigate = useNavigate();
  return (
    <div className="navi" style={{ width: "18vw" }}>
      <ProfileModal />
      <div
        style={{
          height: "0.25px",
          width: "95%",
          backgroundColor: "grey",
          margin: "auto",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "6vh",
          fontSize: "2.5vh",
          fontFamily: "Montserrat",
        }}
      >
        <div
          className={
            window.location.pathname.startsWith("/hot-100/1")
              ? "active each"
              : "each"
          }
          onClick={() => {
            navigate("/hot-100/1");
          }}
        >
          Top Enrollers
        </div>
        <div
          className={
            window.location.pathname.startsWith("/hot-100/2")
              ? "active each"
              : "each"
          }
          onClick={() => {
            navigate("/hot-100/2");
          }}
        >
          Top Producers
        </div>
        <div
          className={
            window.location.pathname.startsWith("/hot-100/3")
              ? "active each"
              : "each"
          }
          onClick={() => {
            navigate("/hot-100/3");
          }}
        >
          My Top Enrollers
        </div>
        <div
          className={
            window.location.pathname.startsWith("/hot-100/4")
              ? "active each"
              : "each"
          }
          onClick={() => {
            navigate("/hot-100/4");
          }}
        >
          My Top Producers
        </div>
      </div>
      <ReportBug />
    </div>
  );
}
export default OptionalSide;

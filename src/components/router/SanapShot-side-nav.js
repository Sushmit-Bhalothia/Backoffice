import "../../css/headerFooter.css";
import { useNavigate } from "react-router-dom";

function SideNav() {
  const navigate = useNavigate();

  return (
    <div className="navi">
      <div
        className={
          window.location.pathname.startsWith("/snapshot/1")
            ? "active side-nav-elements"
            : "side-nav-elements"
        }
        onClick={() => {
          navigate("/snapshot/1");
        }}
      >
        Total active Personals Customers
      </div>
      <div
        className={
          window.location.pathname.startsWith("/snapshot/2")
            ? "active side-nav-elements"
            : "side-nav-elements"
        }
        onClick={() => {
          navigate("/snapshot/2");
        }}
      >
        Inactive Enrollment Customers Last 30 Days
      </div>
      <div
        className={
          window.location.pathname.startsWith("/snapshot/3")
            ? "active side-nav-elements"
            : "side-nav-elements"
        }
        onClick={() => {
          navigate("/snapshot/3");
        }}
      >
        {" "}
        Active Subscribers In My Enrollment Tree
      </div>
      <div
        className={
          window.location.pathname.startsWith("/snapshot/4")
            ? "active side-nav-elements"
            : "side-nav-elements"
        }
        onClick={() => {
          navigate("/snapshot/4");
        }}
      >
        {" "}
        New Promoted Team Ranks
      </div>
      <div
        className={
          window.location.pathname.startsWith("/snapshot/5")
            ? "active side-nav-elements"
            : "side-nav-elements"
        }
        onClick={() => {
          navigate("/snapshot/5");
        }}
      >
        raising rank progress
      </div>
    </div>
  );
}
export default SideNav;

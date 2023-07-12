import "../../../css/main.css";
import ae from "../../../lib/profile.jpeg";
import first from "../../../lib/top1.png";
import second from "../../../lib/top2.png";
import third from "../../../lib/top3.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";

function Card({ ranking }) {
  const rating = Math.floor(Math.random() * 4) + 2;
  let imageSource;
  if (ranking == "1") {
    imageSource = first;
  } else if (ranking === 2) {
    imageSource = second;
  } else if (ranking === 3) {
    imageSource = third;
  }
  return (
    <div className="hot100-Top-card">
      <div style={{ paddingLeft: "1vw" }}>
        <div
          style={{
            marginTop: "0vh",
            padding: "0",
            // marginLeft: "-7vw",
            position: "relative",
          }}
        >
          <img
            id="hot100-Top-card-img1"
            src={imageSource}
            style={{
              width: "3vw",
              height: "5vh",
              zIndex: "2",
              color: "#5d01a2",

              position: "absolute",
              //   top: "vh",
            }}
          />

          <img
            id="hot100-Top-card-img"
            src={ae}
            alt="Profile"
            style={{ zIndex: "1" }}
          />
        </div>
        <div>ID #34567</div>
      </div>
      <div className="hot100-card-details">
        <div style={{ marginBottom: "2vh" }}>
          <h3 style={{ margin: 0 }}>Jack Patrick Daniels</h3>
          <span> 🇻🇬 British</span>
        </div>

        <div>
          <p style={{ margin: 0 }}>Paid Rank: Presidential</p>
          <p style={{ margin: 0, paddingBottom: "2vh" }}>Diamond</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

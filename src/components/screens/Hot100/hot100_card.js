import "../../../css/main.css";
import ae from "../../../lib/profile.jpeg";

function Card({ ranking }) {
  return (
    <div className="hot100-card">
      <div style={{ paddingLeft: "1vw" }}>
        <div className="hot100-card-img-above">#{ranking}</div>
        <img id="hot100-card-img" src={ae} alt="Profile"></img>
        <div className="hot100-card-img-above">ID #3456786</div>
      </div>
      <div className="hot100-card-details">
        <div style={{ marginBottom: "2vh" }}>
          <h3 style={{ margin: 0, paddingTop: "3vh" }}>Jack Patrick Daniels</h3>
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

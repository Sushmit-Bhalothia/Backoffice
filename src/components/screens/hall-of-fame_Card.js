import "../../css/main.css";
import ae from "../../lib/profile.jpeg";
import Review from "./review";
function Card() {
  const rating = Math.floor(Math.random() * 4) + 2;
  return (
    <div className="card">
      <img id="card-img" src={ae}></img>
      <div className="card-details">
        <div className="card-heading">
          <h3 style={{ marginBottom: "0" }}>Jack Patrick Daniels</h3>
          <span> 🇻🇬 British</span>
        </div>
        <div className="card-position">
          <Review rating={rating} />
          Presidential Diamond
        </div>
        <div className="card-date">
          <p style={{ marginBottom: "0" }}>Hall of Fame</p>
          <p style={{ marginTop: "0" }}>Join Date : 12 jan 2017 </p>
        </div>
      </div>
    </div>
  );
}
export default Card;

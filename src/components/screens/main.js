import Embed from "../screens/embed";
import Carousel from "../sharedComponents/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faRocket,
  faBook,
  faBroadcastTower,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTelegram,
  //faPlay,
  // faBook,
  // faNews,
  // faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import bannerimage from "../../lib/secondbanner.png";
// import secondBanner from "";
function Main() {
  return (
    <div>
      <div
        style={{
          width: "95%",
          margin: "auto",
          fontFamily: "Montserrat",
          // height: "50px",
          paddingTop: "20px",
          paddingBottom: "20px",

          color: "red",
        }}
      >
        The Current Commission period will close on: Friday 11:59 PM CST \ The
        current commission Cycle will close on 15/07/2023 00:00:00 CST
      </div>
      <Carousel />
      <div style={{ display: "flex" }}>
        {/* <div id="second-banner"> </div> */}
        <img id="second-banner" src={bannerimage} />
        <div
          style={{
            backgroundColor: "#5832a8",
            height: "180px",
            width: "13vw",
            marginTop: "2.1vh",
            color: "white",
            fontFamily: "Montserrat",
            padding: "20px",
          }}
        >
          <div style={{ fontWeight: "600" }}>Stay Notified</div>
          <div className="divider"></div>
          <div className="social-media">
            {" "}
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ marginRight: "10px" }}
            />
            Facebook
          </div>
          <div className="social-media">
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ marginRight: "10px" }}
            />
            Instagram
          </div>
          <div className="social-media">
            {" "}
            <FontAwesomeIcon
              icon={faTelegram}
              style={{ marginRight: "10px" }}
            />
            Telegram
          </div>
          <div className="social-media">
            {" "}
            <FontAwesomeIcon icon={faTwitter} style={{ marginRight: "10px" }} />
            Twitter
          </div>
          <div className="social-media">
            <FontAwesomeIcon icon={faYoutube} style={{ marginRight: "10px" }} />
            Youtube
          </div>
        </div>
      </div>
      <div>
        <div id="root-category">
          <div className="category">
            <div className="category-title">
              <h3 style={{ margin: 0 }}>
                {" "}
                <FontAwesomeIcon icon={faRocket} className="category-icon" />
                Getting Started
              </h3>
            </div>

            {/* Content for the "Getting Started" category */}
            <div style={{ marginTop: "10px" }}>
              <div className="category-data">Product and Services</div>
              <div className="category-data">Manage Subsiption</div>
              <div className="category-data"> upgrade/Renew Services</div>
              <div className="category-data">Annual packages</div>
            </div>
          </div>

          <div className="category">
            <div className="category-title">
              <h3 style={{ margin: 0 }}>
                {" "}
                <FontAwesomeIcon icon={faBook} className="category-icon" />
                Marketing Resources
              </h3>
              {/* Content for the "Marketing Resources" category */}
            </div>
            <div style={{ marginTop: "10px" }}>
              <div className="category-data">Getting Started with BE</div>
              <div className="category-data">Brand Publisher Resources</div>
              <div className="category-data">Affiliate Central Portal</div>
            </div>
          </div>

          <div className="category">
            <div className="category-title">
              <h3 style={{ margin: 0 }}>
                {" "}
                <FontAwesomeIcon
                  icon={faBroadcastTower}
                  className="category-icon"
                />
                News & Media
              </h3>
            </div>
            <div style={{ marginTop: "10px" }}>
              <div className="category-data">
                BE Recognized As Global Leader
              </div>
              <div className="category-data">BE Disrupt LATAM Convention</div>
              <div className="category-data">BE Disrupt LATAM 2023</div>
            </div>
          </div>
        </div>
      </div>
      <div id="message">
        Dear Yafe
        <br />
        <br /> Please renew your Publisher's license to continue benefiting from
        the BE compensation plan and to remain commission active. Note that your
        account will be “commission inactive”, and you will not benefit from the
        BE compensation plan if you don't renew your license as soon as
        possible. Renew your Publisher's license HERE
      </div>
    </div>
  );
}
export default Main;

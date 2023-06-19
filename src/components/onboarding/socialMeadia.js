import "../../css/auth-onboarding/index.css";
import Logo from "../router/logo";
import { useNavigate } from "react-router-dom";
import Dropdown from "../sharedComponents/dropdown";
import ImageSelector from "./imageSelector";
import Comp from "../onboarding/comp";

function SocialMedia() {
  const navigate = useNavigate();
  return (
    <div className="Backoffice_Log-in">
      <Logo />

      <div
        className="outer"
        style={{
          // margin: "auto",
          // marginLeft: "10vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <div id="mobile-logo" style={{ height: "25vh" }}>
          {/* //{" "}
            here is the content */}
        </div>

        <div
          id="my-superset-container"
          style={{ height: "90vh", marginTop: "8vh" }}
          className="Rectangle-1092"
        >
          <div class="overlay-span-1">
            <img src="" alt=" " />
            <Dropdown />
          </div>

          <span class="overlay-span-2">Contact Support</span>

          <div className="signInConponents ">
            <div class="Welcome-back ">Almost there!</div>

            <p className="FormText">
              {" "}
              Please provide the following info for us to provide better
              customer experience:
            </p>
          </div>
          <div class="Sub-heading">Upload a Photo</div>
          {/* <input className="File" type="file" id="imageUpload" name="image" /> */}
          <ImageSelector />
          <div class="Sub-heading">Your Social Media</div>
          <Comp name={"Facebook"} />
          <Comp name={"Instagram"} />

          <Comp name={"Telegram"} />

          <Comp name={"LinkedIn"} />

          <label className="Label" htmlFor="phone">
            Phone number
          </label>
          <input
            placeholder="+971 55 234 7505 "
            className="Input"
            type="number"
            id="phone"
          />

          <div className="signInConponents " style={{ display: "flex" }}>
            <span
              style={{ cursor: "pointer", fontSize: "2vh" }}
              onClick={() => {
                navigate("/welcome");
              }}
            >
              {" "}
              Go Back
            </span>
            <button
              className="Button"
              onClick={() => {
                navigate("/success");
              }}
            >
              Next
            </button>
          </div>
        </div>
        <div className="Lower" style={{ paddingTop: "4vh" }}>
          <div className="Agreements-Section">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
          </div>
          <div>
            <div className="Agreements-Section2">
              Be Backoffice ™ 2021. All rights reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SocialMedia;

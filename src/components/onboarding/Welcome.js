import "../../css/auth-onboarding/index.css";

// import SignInForm from "./signinform";
import { useNavigate } from "react-router-dom";
import Dropdown from "../sharedComponents/dropdown";
import RightsAgree from "../auth/RightsAgreement";
import PolicySection from "../auth/PolicySection";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="Backoffice_Log-in">
      <div className="Rectangle-1082">
        <div class="be-2"></div>

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

      <div
        className="outer"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div id="mobile-logo" style={{ height: "25vh" }}></div>
        <div class="overlay-span-1">
          <Dropdown />
        </div>
        <span class="overlay-span-2">Contact Support</span>
        {/* <SignInForm /> */}
        <div className="Rectangle-1092">
          <div className="signInConponents">
            <div class="Welcome-back ">
              {" "}
              Welcome to the beta version of your Be backoffice reporting CRM!
            </div>
            <p className="FormText">
              {" "}
              The application is still in development and we will continue add
              new cool features as we progress!
            </p>
          </div>
          <div className="signInConponents " style={{ display: "flex" }}>
            <span
              style={{ cursor: "pointer", marginTop: "4.5vh" }}
              onClick={() => {
                navigate("/setup-profile");
              }}
            >
              {" "}
              Go Back
            </span>
            <button
              style={{ marginTop: "3vh", marginRight: "-3vw" }}
              className="Button"
              onClick={() => {
                navigate("/social-media");
              }}
            >
              Next
            </button>
          </div>
        </div>
        <div className="Lower" style={{ paddingTop: "4vh" }}>
          <PolicySection />
          <div>
            <RightsAgree />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Welcome;

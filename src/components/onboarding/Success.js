import "../../css/auth-onboarding/index.css";

// import SignInForm from "./signinform";
import { useNavigate } from "react-router-dom";
import Dropdown from "../sharedComponents/dropdown";
import RightsAgree from "../auth/RightsAgreement";
import PolicySection from "../auth/PolicySection";

function Success() {
  const navigate = useNavigate();

  return (
    <div className="Backoffice_Log-in">
      <div className="Rectangle-1082">
        <div class="be-2"></div>
        {/* <image src="../../lib/Be_logo.png"></image> */}
        <div className="Agreements-Section">
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
        </div>
        <div>
          <div className="Agreements-Section2">
            Be Backoffice ™ 2023. All rights reserved
          </div>
        </div>
      </div>
      {/* <div> */}
      {/* <span className=".top-span">contat support</span>
      <span className=".top-span"> drop down</span> */}

      {/* <Suspense> */}
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
        <div class="overlay-span-1">
          {/* <img src="" alt=" " /> */}
          <Dropdown />
        </div>
        <span class="overlay-span-2">Contact Support</span>
        {/* <SignInForm /> */}
        <div className="Rectangle-1092">
          <div className="signInConponents">
            <h2 class="Welcome-back "> Thank you!</h2>
            <p className="FormText">
              {" "}
              You are all done and ready to explore the beta version of the app.
              Please keep sending us feedback to improve the platform
            </p>
          </div>
          <div className="signInConponents " style={{ display: "flex" }}>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/social-media");
              }}
            >
              {" "}
              Go Back
            </span>
            <button
              className="Button"
              onClick={() => {
                navigate("/");
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
      {/* </Suspense> */}
      {/* </div> */}
    </div>
  );
}
export default Success;

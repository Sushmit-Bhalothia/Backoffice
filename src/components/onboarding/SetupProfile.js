import "../../css/auth-onboarding/index.css";
import Logo from "../Navbar/logo";
import { useNavigate } from "react-router-dom";
import Dropdown from "../sharedComponents/dropdown";
import RightsAgree from "../auth/RightsAgreement";
import PolicySection from "../auth/PolicySection";

function SetUpProfile() {
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
          // id="my-superset-container"

          style={{ height: "83vh" }}
          className="Rectangle-1092"
        >
          <div class="overlay-span-1">
            {/* <img src="" alt=" " /> */}
            <Dropdown />
          </div>

          <span class="overlay-span-2">Contact Support</span>

          <div className="signInConponents ">
            <h2 class="Welcome-back ">Set Up Profile!</h2>

            <p className="FormText">
              Select your preferred language to continue
            </p>

            <label className="Label" htmlFor="lang">
              Language
            </label>
            <select id="lang" className="Input" name="lang">
              <option value="option1">English</option>
              <option value="option2">Italy</option>
              <option value="option3">Portugues</option>
            </select>
            <label className="Label" htmlFor="country">
              Country
            </label>
            <select id="lang" className="Input" name="lang">
              <option value="option1">UAE</option>
              <option value="option2">UK</option>
              <option value="option3">USA</option>
            </select>
            <label className="Label" htmlFor="Name">
              Full Name
            </label>
            <input
              placeholder="Alan Walker"
              className="Input"
              type="text"
              id="Name"
            />
            <label className="Label" htmlFor="IBI-ID">
              IBI ID
            </label>
            <input
              placeholder="#47874839 "
              className="Input"
              type="text"
              id="IBI-ID"
            />
            <label className="Label" htmlFor="Email">
              Email
            </label>
            <input
              placeholder=" email@gmail.com"
              className="Input"
              type="text"
              id="Email"
            />
            <label className="Label" htmlFor="phone">
              Phone number
            </label>
            <input
              placeholder="+971 55 234 7505 "
              className="Input"
              type="number"
              id="phone"
            />
          </div>
          <div className="signInConponents FormText">
            If any of the info are incorrect above, please -
            <span style={{ marginBottom: "1vh" }} class="clickable">
              click here
            </span>
          </div>
          <div className="signInConponents " style={{ display: "flex" }}>
            <button
              className="Button"
              onClick={() => {
                navigate("/welcome");
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
export default SetUpProfile;

import "../../css/auth-onboarding/index.css";
import Logo from "../router/logo";
import { Suspense } from "react";
// import ForgotPasswordForm from "../screens/forgotpasswordform";
import EmailSentModal from "./EmailSentModal";
import Dropdown from "../sharedComponents/dropdown";
function EmailSent() {
  return (
    <div className="Backoffice_Log-in">
      <Logo />
      <Suspense>
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
            <img src="" alt=" " />
            <Dropdown />
          </div>
          <span class="overlay-span-2">Contact Support</span>
          <EmailSentModal />
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
      </Suspense>
    </div>
  );
}
export default EmailSent;

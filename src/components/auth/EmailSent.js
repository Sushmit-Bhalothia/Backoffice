import "../../css/auth-onboarding/index.css";
import Logo from "../router/logo";
import { Suspense } from "react";
import RightsAgree from "./RightsAgreement";
import PolicySection from "./PolicySection";
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
          <EmailSentModal />
          <div className="Lower" style={{ paddingTop: "4vh" }}>
            <PolicySection />
            <div>
              <RightsAgree />
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
}
export default EmailSent;

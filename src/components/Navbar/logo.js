import "../../css/auth-onboarding/index.css";
import RightsAgree from "../auth/RightsAgreement";
import PolicySection from "../auth/PolicySection";
function Left() {
  return (
    <div className="Rectangle-1082">
      <div class="be-2"></div>

      <PolicySection />
      <div>
        <RightsAgree />
      </div>
    </div>
  );
}
export default Left;

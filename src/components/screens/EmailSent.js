import "../../css/index.css";
import Logo from "../screens/logo";
import { Suspense } from "react";
// import ForgotPasswordForm from "../screens/forgotpasswordform";
import EmailSentModal from "../screens/EmailSentModal";
import Dropdown from "../sharedComponents/dropdown";
function EmailSent() {
  return (
    <div className="Backoffice_Log-in">
      <Logo />
      <Suspense>
        <div class="overlay-span-1">
          <img src="" alt=" " />
          <Dropdown />
        </div>
        <span class="overlay-span-2">Contact Support</span>
        <EmailSentModal />
      </Suspense>
    </div>
  );
}
export default EmailSent;

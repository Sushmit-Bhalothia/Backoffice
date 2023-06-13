import "../../css/index.css";
import { Suspense } from "react";
import SignInForm from "./signinform";
function Signin() {
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
      {/* <div> */}
      {/* <span className=".top-span">contat support</span>
      <span className=".top-span"> drop down</span> */}

      <Suspense>
        <SignInForm />
      </Suspense>
      {/* </div> */}
    </div>
  );
}
export default Signin;

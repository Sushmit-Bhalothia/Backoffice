import "../../css/index.css";
import { Suspense } from "react";
import SignInForm from "./signinform";
import Dropdown from "../sharedComponents/dropdown";

function Signin() {
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
            Be Backoffice ™ 2021. All rights reserved
          </div>
        </div>
      </div>
      {/* <div> */}
      {/* <span className=".top-span">contat support</span>
      <span className=".top-span"> drop down</span> */}

      <Suspense>
        <div class="overlay-span-1">
          <img src="" alt=" " />
          <Dropdown />
        </div>
        <span class="overlay-span-2">Contact Support</span>
        <SignInForm />
      </Suspense>
      {/* </div> */}
    </div>
  );
}
export default Signin;

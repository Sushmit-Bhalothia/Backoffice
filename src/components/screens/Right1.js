import "../../css/index.css";
import { Suspense } from "react";
import SignInForm from "./signinform";
import Dropdown from "../sharedComponents/dropdown";
function Right1() {
  return (
    <Suspense>
      <div class="overlay-span-1">
        <img src="" alt=" " />
        <Dropdown />
      </div>
      <span class="overlay-span-2">Contact Support</span>
      <SignInForm />
    </Suspense>
  );
}
export default Right1;

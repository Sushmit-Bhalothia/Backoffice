import "../../css/auth-onboarding/index.css";
import { useNavigate } from "react-router-dom";

function EmailSentModal() {
  const navigate = useNavigate();
  return (
    <div className="Rectangle-1092">
      <div className="signInConponents">
        <div class="Welcome-back  " style={{ marginTop: "5vh" }}>
          Email Sent !
        </div>
        <p className="FormText">
          {" "}
          Please, enter the email address you used to create your Be account and
          you will receive a password recovery link{" "}
        </p>

        {/* <label className="Label" htmlFor="loginId">
          Login ID
        </label>

        <input
          placeholder="User Name or Email"
          className="Input"
          type="text"
          id="loginId"
        /> */}

        {/* <label className="Label" htmlFor="password">
          Password
        </label> */}
        {/* <input
          placeholder="Your Password Here "
          className="Input"
          type="password"
          id="password"
        /> */}
      </div>
      <div className="signInConponents " style={{ display: "flex" }}>
        <button
          className="Button"
          style={{ margin: "auto" }}
          onClick={() => {
            navigate("/sign-in");
          }}
        >
          Great !
        </button>
        {/* <span
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/forgot-password");
          }}
        >
          {" "}
          Cancel
        </span> */}
      </div>
    </div>
  );
}
export default EmailSentModal;

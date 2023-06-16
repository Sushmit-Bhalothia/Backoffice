import "../../css/index.css";
import { useNavigate } from "react-router-dom";

function ForgotForm() {
  const navigate = useNavigate();
  return (
    <div className="Rectangle-1092">
      <div className="signInConponents">
        <div class="Welcome-back " style={{ marginTop: "5vh" }}>
          Forgot Password ?
        </div>
        <p className="FormText" style={{ marginBottom: "5vh" }}>
          Please, enter the email address you used to create your Be account and
        </p>

        <label className="Label" htmlFor="loginId">
          Login ID
        </label>

        <input
          placeholder="User Name or Email"
          className="Input"
          type="text"
          id="loginId"
        />

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
          onClick={() => {
            navigate("/Email-sent");
          }}
        >
          Send
        </button>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/sign-in");
          }}
        >
          {" "}
          Cancel
        </span>
      </div>
    </div>
  );
}
export default ForgotForm;

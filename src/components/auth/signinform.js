import "../../css/auth-onboarding/index.css";
import { useNavigate } from "react-router-dom";

function SignInForm() {
  const navigate = useNavigate();
  return (
    <div className="Rectangle-1092">
      <div className="signInConponents">
        <h2 class="Welcome-back " style={{ marginTop: "5vh" }}>
          Welcome back!
        </h2>

        <label className="Label" htmlFor="loginId">
          Login ID
        </label>
        <input
          placeholder="User Name or Email"
          className="Input"
          type="text"
          id="loginId"
        />

        <label className="Label" htmlFor="password">
          Password
        </label>
        <input
          placeholder="Your Password Here "
          className="Input"
          type="password"
          id="password"
        />
      </div>
      <div className="signInConponents " style={{ display: "flex" }}>
        <button
          className="Button"
          onClick={() => {
            navigate("/setup-profile");
          }}
        >
          Sign In
        </button>
        <span
          style={{ cursor: "pointer", fontSize: "2vh", marginTop: "1vh" }}
          onClick={() => {
            navigate("/forgot-password");
          }}
        >
          {" "}
          Forgot password
        </span>
      </div>
    </div>
  );
}
export default SignInForm;

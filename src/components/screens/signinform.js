import "../../css/index.css";
function SignInForm() {
  return (
    <div className="Rectangle-1092">
      <div className="signInConponents">
        <div class="Welcome-back ">Welcome back!</div>

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
      <div className="signInConponents">
        <button
          className="Button"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Sign In
        </button>
        <span
          onClick={() => {
            console.log("clicked");
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

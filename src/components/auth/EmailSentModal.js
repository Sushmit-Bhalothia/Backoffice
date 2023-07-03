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
      </div>
    </div>
  );
}
export default EmailSentModal;

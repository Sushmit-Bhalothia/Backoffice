import "../../css/headerFooter.css";
function footer() {
  return (
    <div className="Footer">
      <div className="Policy">
        <span>Privacy Policy</span>
        <span>Policies and Procedures </span>
        <span>GDPR Policy</span>
      </div>
      <div className="Policy">
        <span>Terms of Use</span>
        <span>IBP Agreement</span>
        <span style={{ visibility: "hidden" }}>GDPRs POlicy</span>
      </div>
      <div className="Be-Backoffice-2023">
        Be Backoffice ™ 2021. All rights reserved
      </div>
    </div>
  );
}
export default footer;

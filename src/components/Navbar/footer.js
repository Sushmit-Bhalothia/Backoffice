import "../../css/headerFooter.css";
function footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="Footer">
      <div className="  FooterText Policy ">
        <span>Privacy Policy</span>
        <span>Policies and Procedures </span>
        <span>GDPR Policy</span>
      </div>
      <div className=" FooterText Policy">
        <span>Terms of Use</span>
        <span>IBP Agreement</span>
        <span style={{ visibility: "hidden" }}>GDPRs POlicy</span>
      </div>
      <div className=" FooterText Be-Backoffice-2023">
        Be Backoffice ™ {currentYear}. All rights reserved
      </div>
    </div>
  );
}
export default footer;

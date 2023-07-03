import "../../css/auth-onboarding/index.css";
import React from "react";

function RightsAgree() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="Agreements-Section2">
      Be Backoffice ™ {currentYear}. All rights reserved
    </div>
  );
}

export default RightsAgree;

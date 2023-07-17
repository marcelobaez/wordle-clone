import React from "react";

function WinAlert(props) {
  return <div className="happy banner">
  <p>
    <strong>Congratulations!</strong> Got it in {` `}
    <strong>{props.attempts} guesses</strong>.
  </p>
</div>;
}

export default WinAlert;

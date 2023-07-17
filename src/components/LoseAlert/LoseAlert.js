import React from "react";

function LoseAlert(props) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{props.answer}</strong>.
      </p>
      <button onClick={props.handleRestart}>Restart</button>
    </div>
  );
}

export default LoseAlert;

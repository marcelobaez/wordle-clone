import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess(props) {
  const guessSlots = range(5);

  return (
    <p className="guess">
      {guessSlots.map((slot, index) => {
        const guessword = props.guessWord;
        const guessLetter = guessword ? guessword.value.split("")[index] : "";
        const letterClasses = guessword
          ? checkGuess(guessword.value, props.answer)
          : [];
        return (
          <span
            key={index}
            className={`cell ${guessLetter ? letterClasses[index].status : ""}`}
          >
            {guessLetter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;

import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";

function GuessResults(props) {
  const guessRows = range(NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {guessRows.map((row, wordIdx) => (
        <Guess key={wordIdx} guessWord={props.guesses[wordIdx]} answer={props.answer}/>
      ))}
    </div>
  );
}

export default GuessResults;

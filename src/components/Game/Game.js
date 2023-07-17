import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import WinAlert from "../WinAlert/WinAlert";
import LoseAlert from "../LoseAlert/LoseAlert";

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [hasWon, setHasWon] = React.useState(false);
  const [hasLost, setHasLost] = React.useState(false);
  const [answer, setAnswer] = React.useState(sample(WORDS));
  console.log(answer);

  const handleSubmit = (guess) => {
    setGuesses((prevGuesses) => [
      ...prevGuesses,
      { key: crypto.randomUUID(), value: guess },
    ]);
    if (guess === answer) {
      setHasWon(true);
      return;
    }
    if (guesses.length >= 5) {
      setHasLost(true);
      return;
    }
  };

  const handleRestart = () => {
    setGuesses([]);
    setHasWon(false);
    setHasLost(false);
    setAnswer(sample(WORDS));
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      {hasWon && <WinAlert attempts={guesses.length} />}
      {hasLost && <LoseAlert answer={answer} handleRestart={handleRestart} />}
      <GuessInput onSubmit={handleSubmit} disabled={hasLost} />
    </>
  );
}

export default Game;

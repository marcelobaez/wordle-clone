import React from "react";

function GuessInput(props) {
  const [guess, setGuess] = React.useState('');

  const onSubmit = e => {
    e.preventDefault();
    const lastValue = guess;
    console.log(lastValue);
    props.onSubmit(lastValue);
    setGuess('');
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="guess">Guess a word:</label>
      <input disabled={props.hasLost} minLength={5} maxLength={5} required value={guess} onChange={e => {
        setGuess(e.target.value.toUpperCase());
        }} id="guess" type="text" />
      <button type="submit">Guess</button>
    </form>
  );
}

export default GuessInput;

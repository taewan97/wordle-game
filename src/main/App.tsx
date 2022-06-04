import { useState } from "react";
import logo from "./logo.svg";
import "../styles/App.css";
import { InputZone } from "./inputs/InputZone";
import { KeyboardZone } from "./inputs/keyboardZone";
import { WORDS } from "./wordlist";

function App() {
  const getRandomAnswer = () => {
    return Math.floor(Math.random() * 38696) % 38696;
  };

  const newAnswer = getRandomAnswer();
  let answer: string;
  if (typeof WORDS.get(newAnswer) === "string") {
    answer = WORDS.get(newAnswer);
  }
  //const answer : string = typeof WORDS.get(newAnswer) !== 'undefined' ? WORDS.get(newAnswer) : "";

  return (
    <div>
      <InputZone answer={answer} />
    </div>
  );
}

export default App;

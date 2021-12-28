import "./App.css";
import GameBoard from "./GameBoard";
import Instructions from "./Instructions";
import { useState } from "react";

function Game(props) {
  const [start, setStart] = useState(false);

  const handleStart = () => {
    setStart(true);
    console.log(start);
  };

  if (start) {
    return <GameBoard />;
  } else {
    return <Instructions handleStart={handleStart} />;
  }
}

export default Game;

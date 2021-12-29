import "./App.css";
import GameBoard from "./GameBoard";
import Instructions from "./Instructions";
import { useState } from "react";

function Game(props) {
  const [start, setStart] = useState(false);
  const [charactersLeft, setCharactersLeft] = useState(3);

  const handleStart = () => {
    setStart(true);
    console.log(start);
  };

  if (start) {
    return (
      <GameBoard
        charactersLeft={charactersLeft}
        setCharactersLeft={setCharactersLeft}
      />
    );
  } else {
    return <Instructions handleStart={handleStart} />;
  }
}

export default Game;

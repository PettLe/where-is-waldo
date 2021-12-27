import "./App.css";
import waldo1 from "../waldo1.jpeg";
import { useState, useEffect } from "react";

function GameBoard() {
  useEffect(() => {
    console.log("Here starts the timer!");
  });

  return (
    <div className="GameBoard">
      <img src={waldo1} alt="Where's Waldo Game" />
    </div>
  );
}

export default GameBoard;

import "./App.css";
import waldo1 from "../waldo1.jpeg";
import { useState, useEffect } from "react";

function GameBoard() {
  const [coord, setCoord] = useState({ x: 0, y: 0 });
  const [answerStyles, setAnswerStyles] = useState({
    position: "absolute",
    top: coord.y,
    left: coord.x,
    display: "none",
  });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    console.log("Here starts the timer!");
  });

  const onMouseMove = (e) => {
    setCoord({ x: e.clientX, y: e.clientY });
    console.log(coord);
  };

  const openAnswers = () => {
    if (!clicked) {
      console.log(answerStyles.top);
      console.log(answerStyles.left);
      setClicked(!clicked);
      setAnswerStyles({
        ...answerStyles,
        top: coord.y,
        left: coord.x,
        display: "block",
      });
    } else {
      setClicked(!clicked);
      setAnswerStyles({
        ...answerStyles,
        top: coord.y,
        left: coord.x,
        display: "none",
      });
    }
  };

  return (
    <div className="GameBoard">
      <img
        onMouseMove={onMouseMove}
        onClick={openAnswers}
        src={waldo1}
        alt="Where's Waldo Game"
      />
      <div style={answerStyles} className="answerBox">
        <p className="answerOption">Waldo</p>
        <p className="answerOption">Wizard</p>
        <p className="answerOption">joku emt</p>
      </div>
    </div>
  );
}

export default GameBoard;

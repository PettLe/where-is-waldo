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
    setCoord({ x: e.pageX, y: e.pageY });
    console.log(coord);
  };

  const openAnswers = (e) => {
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

  //Array of coordinates just to test a concept
  const coordsX = [1071, 1107];
  const coordsY = [485, 544];

  const answers = [
    { character: "waldo", topX: 1071, topY: 485, bottomX: 1107, bottomY: 544 },
  ];

  const checkClick = (e) => {
    // console.log(answers[0].character);
    // console.log(e.target.dataset.id);
    if (
      answerStyles.left >= answers[0].topX &&
      answerStyles.left <= answers[0].bottomX
    ) {
      if (
        answerStyles.top >= answers[0].topY &&
        answerStyles.top <= answers[0].bottomY
      ) {
        if (answers[0].character === e.target.dataset.id) {
          return console.log("OIKEA ALUE!");
        }
      }
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
        <ul>
          <li className="answerOption" onClick={checkClick} data-id="waldo">
            Waldo
          </li>
          <li className="answerOption" onClick={checkClick} value="wizard">
            Wizard
          </li>
          <li className="answerOption" onClick={checkClick} value="antiwaldo">
            joku emt
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GameBoard;

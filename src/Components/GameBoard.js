import "./App.css";
import waldo1 from "../waldo1.jpeg";
import { useState, useEffect } from "react";

function GameBoard(props) {
  const [coord, setCoord] = useState({ x: 0, y: 0 });
  const [answerStyles, setAnswerStyles] = useState({
    position: "absolute",
    top: coord.y,
    left: coord.x,
    display: "none",
  });
  const [clicked, setClicked] = useState(false);

  const { charactersLeft, setCharactersLeft } = props;

  //Here start the timer
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

  //Array of objects / coordinates just to test a concept
  const answers = [
    { character: "waldo", topX: 1071, topY: 485, bottomX: 1107, bottomY: 544 },
    { character: "odlaw", topX: 749, topY: 783, bottomX: 783, bottomY: 831 },
    {
      character: "wizard",
      topX: 1596,
      topY: 1070,
      bottomX: 1672,
      bottomY: 1172,
    },
  ];

  const checkClick = (e) => {
    for (let i = 0; i < 3; i++) {
      if (
        answerStyles.left >= answers[i].topX &&
        answerStyles.left <= answers[i].bottomX
      ) {
        if (
          answerStyles.top >= answers[i].topY &&
          answerStyles.top <= answers[i].bottomY
        ) {
          if (answers[i].character === e.target.dataset.id) {
            setCharactersLeft(charactersLeft - 1);
            return console.log("OIKEIN! Se on " + answers[i].character);
          }
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
          <li className="charactersLeft">Characters left: {charactersLeft}</li>
          <li className="answerOption" onClick={checkClick} data-id="waldo">
            Waldo
          </li>
          <li className="answerOption" onClick={checkClick} data-id="odlaw">
            Odlaw
          </li>
          <li className="answerOption" onClick={checkClick} data-id="wizard">
            Wizard
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GameBoard;

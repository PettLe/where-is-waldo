import "./App.css";
import waldo1 from "../waldo1.jpeg";
import { useState, useEffect } from "react";
import { getCoordinates, time } from "./firebase.js";

function GameBoard(props) {
  const [coord, setCoord] = useState({ x: 0, y: 0 });
  const [answerStyles, setAnswerStyles] = useState({
    position: "absolute",
    top: coord.y,
    left: coord.x,
    display: "none",
  });
  const [clicked, setClicked] = useState(false);
  const [timer, setTimer] = useState(0);
  const [answerCoordinates, setAnswerCoordinates] = useState(getCoordinates());
  const [serverTimer, setServerTimer] = useState({
    start: 0,
    end: 0,
  });
  const [score, setScore] = useState(0);
  const { charactersLeft, setCharactersLeft } = props;

  //Here start the timer
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTimer(() => timer + 1);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [timer]);

  useEffect(() => {
    setServerTimer({ ...serverTimer, start: time() });
  }, []);

  useEffect(() => {
    console.log("end time is " + serverTimer.end);
    console.log("final score is " + (serverTimer.end - serverTimer.start));
    setScore(serverTimer.end - serverTimer.start);
  }, [serverTimer.end]);

  const onMouseMove = (e) => {
    setCoord({ x: e.pageX, y: e.pageY });
  };

  const openAnswers = (e) => {
    if (!clicked) {
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

  const checkClick = (e) => {
    for (let i = 0; i < 3; i++) {
      if (
        answerStyles.left >= answerCoordinates[i].topX &&
        answerStyles.left <= answerCoordinates[i].bottomX
      ) {
        if (
          answerStyles.top >= answerCoordinates[i].topY &&
          answerStyles.top <= answerCoordinates[i].bottomY
        ) {
          if (answerCoordinates[i].character === e.target.dataset.id) {
            setCharactersLeft(charactersLeft - 1);
            if (charactersLeft > 1) {
              e.target.style.backgroundColor = "lightgreen";
              return console.log(
                "OIKEIN! Se on " + answerCoordinates[i].character
              );
            } else {
              setTimer(timer);
              setServerTimer({ ...serverTimer, end: time() });
              alert("You won! Your time was " + score);
              //console.log(serverTimer);
              console.log("end time was " + serverTimer.end);
            }
          }
        }
      }
    }
  };

  return (
    <div className="GameBoard">
      <div className="timer">Time: {timer}</div>
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

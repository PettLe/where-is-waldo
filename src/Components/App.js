import react from "react";
import "./App.css";
import { time, getCoordinates, getHiscores } from "./firebase.js";
import { useState } from "react";

function App() {
  const [scoreBoardStyles, setScoreBoardStyles] = useState({
    display: "none",
  });
  const [hiScores, setHiScores] = useState(getHiscores());

  const openScores = (e) => {
    setScoreBoardStyles({
      ...scoreBoardStyles,
      display: "block",
    });
  };

  const closeScores = (e) => {
    setScoreBoardStyles({
      ...scoreBoardStyles,
      display: "none",
    });
  };

  return (
    <div className="App">
      <h1>Find Waldo!</h1>
      <button onClick={openScores}>Hi-Scores</button>
      <div className="scoreBoard" style={scoreBoardStyles}>
        <h2>Hi-scores:</h2>
        <div className="scoreWrapper">
          <div className="score">
            <p>Player:</p>
            <p>Time:</p>
          </div>
          {hiScores.map((score) => (
            <div className="singleScore" key={score.id}>
              <p>{score.name}</p>
              <p>{score.score}</p>
            </div>
          ))}
        </div>
        <button onClick={closeScores}>Close</button>
      </div>
    </div>
  );
}

export default App;

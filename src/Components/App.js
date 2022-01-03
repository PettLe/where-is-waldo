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

  console.log(hiScores);
  console.log(time());
  console.log(getCoordinates());

  return (
    <div className="App">
      <h1>Find Waldo!</h1>
      <button onClick={openScores}>Hi-Scores</button>
      <div className="scoreBoard" style={scoreBoardStyles}>
        <h2>Hi-scores:</h2>
        {hiScores.map((score) => (
          <div className="score">
            <p>Player: {score.name}</p>
            <p>Time: {score.score}</p>
          </div>
        ))}
        <button onClick={closeScores}>Close</button>
      </div>
    </div>
  );
}

export default App;

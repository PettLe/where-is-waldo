import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import Game from "./Components/Game";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Game start={false} />
  </React.StrictMode>,
  document.getElementById("root")
);

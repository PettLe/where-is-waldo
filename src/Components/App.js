import "./App.css";
import { info, time, getCoordinates } from "./firebase.js";

function App() {
  info();
  time();
  console.log(getCoordinates());

  return (
    <div className="App">
      <h1>Find Waldo!</h1>
    </div>
  );
}

export default App;

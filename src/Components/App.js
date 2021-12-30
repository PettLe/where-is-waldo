import "./App.css";
import { info, getCoordinates } from "./firebase.js";

function App() {
  info();
  console.log(getCoordinates());

  return (
    <div className="App">
      <h1>Find Waldo!</h1>
    </div>
  );
}

export default App;

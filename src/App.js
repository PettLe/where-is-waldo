import "./App.css";
import info from "./firebase.js";

function App() {
  info();
  console.log("Olemme vihdoin saavuttaneet (pienen) erävoiton.");
  console.log("Kenties yhden isommankin");
  return (
    <div className="App">
      <h1>Tämä on App</h1>
    </div>
  );
}

export default App;

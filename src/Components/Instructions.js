import "./App.css";
import odwaldo from "../waldood.jpg";
import wizard from "../wizard.jpeg";

function Instructions(props) {
  const { handleStart } = props;

  return (
    <div className="Instructions">
      <p>Find these characters and then click the image!</p>
      <div className="instructionImages">
        <img src={odwaldo} alt="waldo and odlaw" />
        <img src={wizard} alt="wizard whitebeard" />
      </div>
      <button onClick={handleStart}>START!</button>
    </div>
  );
}

export default Instructions;

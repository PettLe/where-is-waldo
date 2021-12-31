import "./App.css";
import odwaldo from "../waldood.jpg";
import wizard from "../wizard.jpeg";

function Instructions(props) {
  const { handleStart } = props;

  return (
    <div className="Instructions">
      <p>
        Find these characters! Clicking the image opens up a box with character
        names. <br />
        If you found the right one, the slot will turn green!
      </p>
      <br />
      <div className="instructionImages">
        <img src={odwaldo} alt="waldo and odlaw" />
        <img src={wizard} alt="wizard whitebeard" />
      </div>
      <br />
      <button onClick={handleStart}>START!</button>
    </div>
  );
}

export default Instructions;

import "./App.css";

function Instructions(props) {
  const { handleStart } = props;

  return (
    <div className="Instructions">
      <p>Find these characters and then click the image!</p>
      <button onClick={handleStart}>START!</button>
    </div>
  );
}

export default Instructions;

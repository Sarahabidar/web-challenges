import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Button color="green" disabled={false} text="Submit!" />
      <Button color="red" disabled={false} text="Error!" />
      <Button color="yellow" disabled={true} text="Again!" />
    </div>
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      disabled={disabled}
      style={{ backgroundColor: color }}
      onClick={() => console.log(text)}
    >
      {text}
    </button>
  );
}

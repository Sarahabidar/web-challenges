import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click Me!</Button>
      <Button color="green">Submit</Button>
      <Button color="red">Cancel</Button>
      <Button color="blue">More Info</Button>
    </main>
  );
}

function Button({ children, color }) {
  return (
    <button className="button" type="button" style={{ color: color }}>
      {children}
    </button>
  );
}

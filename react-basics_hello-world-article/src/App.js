import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}
function HelloWorldArticle() {
  return (
    <article>
      <h1> React </h1>
      <p>Hi everyone!</p>
    </article>
  );
}

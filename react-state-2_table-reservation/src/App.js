import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(0);
  console.log(people);
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        addPerson={() => setPeople(people + 1)}
        deletePerson={() => setPeople(people - 1)}
      />

      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}

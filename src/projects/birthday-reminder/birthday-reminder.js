import React, { useState } from "react";

import "./index.css";

import data from "./data";

import List from "./list";

const BirthdayReminder = () => {
  document.title = "Birthday Reminder";
  const [people, setPeople] = useState(data);

  return (
    <>
      <h1>Birthday Reminder</h1>
      <main>
        <section className="container">
          <h3>{people.length} Birthdays Today</h3>
          <List people={people} />
          {people.length > 0 ? (
            <button onClick={() => setPeople([])}>Clear All</button>
          ) : (
            <button onClick={() => setPeople(data)}>Undo</button>
          )}
        </section>
      </main>
    </>
  );
};

export default BirthdayReminder;

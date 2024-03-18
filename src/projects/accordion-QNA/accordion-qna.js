import React, { useState } from "react";

import "./index.css";
import data from "./data";

import SingleQuestion from "./question";

const AccordionQNA = () => {
  const [questions, setQuestions] = useState(data);
  document.title = "Accordion Q & A";
  return (
    <main>
      <div className="container">
        <h3>Questions and Answers about Login</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default AccordionQNA;

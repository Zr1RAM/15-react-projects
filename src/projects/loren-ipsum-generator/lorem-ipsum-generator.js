import React, { useState } from "react";

import data from "./data";

import "./index.css";

const Lorem_ipsum_generator = () => {
  document.title = "lorem ipsum generator";
  const [paragraphCount, setParagraphCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setText(data.slice(0, paragraphCount));
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max={data.length}
          value={paragraphCount}
          onChange={(e) => setParagraphCount(parseInt(e.target.value))}
        />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((eachText, index) => {
          return <p key={index}>{eachText}</p>;
        })}
      </article>
    </section>
  );
};

export default Lorem_ipsum_generator;

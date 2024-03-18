import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import { FaQuoteRight } from "react-icons/fa";

import data from "./data";

// import "./indexFinal.css";
import "./index.css";

const Slider = () => {
  document.title = "Slider";
  const [people, setPeople] = useState(data);
  const [currentPersonIndex, setCurrentPersonIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (currentPersonIndex < 0) {
      setCurrentPersonIndex(lastIndex);
    }
    if (currentPersonIndex > people.length - 1) {
      setCurrentPersonIndex(0);
    }
  }, [currentPersonIndex, people]);

  useEffect(() => {
    const autoSlider = setInterval(() => {
      setCurrentPersonIndex(currentPersonIndex + 1);
    }, 3000);
    return () => clearInterval(autoSlider);
  }, [currentPersonIndex]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, index) => {
          const { id, name, image, title, quote } = person;
          let position = "nextSlide";
          if (index === currentPersonIndex) {
            position = "activeSlide";
          }
          if (
            index === currentPersonIndex - 1 ||
            (currentPersonIndex === 0 && index === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button
          className="prev"
          onClick={() => setCurrentPersonIndex(currentPersonIndex - 1)}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={() => setCurrentPersonIndex(currentPersonIndex + 1)}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Slider;

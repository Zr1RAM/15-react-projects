import React, { useState } from "react";

import reviewsData from "./data";

import { FaChevronRight, FaChevronLeft, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, job, image, text, name } = reviewsData[index];
  const checkNumber = (number) => {
    if (number > reviewsData.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviewsData.length - 1;
    }
    return number;
  };
  const prevPerson = () => {
    setIndex((index) => {
      index += 1;
      return checkNumber(index);
    });
  };
  const nextPerson = () => {
    setIndex((index) => {
      index -= 1;
      return checkNumber(index);
    });
  };
  const randomPerson = () => {
    console.log("testing");
    let randomNumber = Math.floor(Math.random() * reviewsData.length);
    if (randomNumber === index) {
      randomNumber += 1;
    }
    console.log(randomNumber);
    setIndex(checkNumber(randomNumber));
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Surprise me
      </button>
    </article>
  );
};

export default Review;

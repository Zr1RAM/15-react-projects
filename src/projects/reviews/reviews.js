import React from "react";
import "./index.css";
import Review from "./review";

const Reviews = () => {
  document.title = "reviews";
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
};

export default Reviews;

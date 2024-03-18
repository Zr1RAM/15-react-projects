import React from "react";

import TourCard from "./tour-card";

const TourCards = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline" />
      </div>
      {/* <div className="tours"> */}
      <div>
        {tours.map((tour) => {
          return <TourCard key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default TourCards;

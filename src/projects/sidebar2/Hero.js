import React from "react";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { toggleSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={() => toggleSubmenu(false)}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all size-frmo startups to fortune 500s-use
            Stripe's software and APIs to accept payments, send payount, and
            manage their business online
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img
            src="https://raw.githubusercontent.com/john-smilga/react-projects/a7607537821a58e3569a4e4d8eb029ae63fe405d/13-stripe-submenus/setup/src/images/phone.svg"
            alt="phone"
            className="phone-img"
          />
        </article>
      </div>
    </section>
  );
};

export default Hero;

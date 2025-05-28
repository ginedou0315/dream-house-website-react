import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section
      data-name="hero"
      data-file="components/Hero.js"
      className="hero-section d-flex align-items-center justify-content-center text-white"
    >
      <div className="text-center">
        <h1 data-name="hero-title" className="fw-bold mt-5 pt-5 mb-4">
          Your Dream House Awaits
        </h1>
        <p data-name="hero-subtitle" className="lead fs-2 mb-3">
          Experience luxury living with breathtaking sea views
        </p>
        <a
          href="#features"
          data-name="cta-button"
          className="btn btn-light btn-lg px-4 py-2 rounded-pill fw-semibold mb-5"
        >
          Explore Now
        </a>
      </div>
    </section>
  );
}

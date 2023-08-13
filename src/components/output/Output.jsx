import React from "react";
import "./output.css";

const Output = () => {
  return (
    <section className="results-container">
      <h2 className="result">
        <span>{"--"}</span>Years
      </h2>
      <h2 className="result">
        <span>{"--"}</span>Months
      </h2>
      <h2 className="result">
        <span>{"--"}</span>Days
      </h2>
    </section>
  );
};

export default Output;

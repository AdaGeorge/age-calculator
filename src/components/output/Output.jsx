import React from "react";
import "./output.css";

const Output = () => {
  return (
    <section className="results-container">
      <h2 className="result">
        <span>{"38"}</span>Years
      </h2>
      <h2 className="result">
        <span>{"3"}</span>Months
      </h2>
      <h2 className="result">
        <span>{"26"}</span>Days
      </h2>
    </section>
  );
};

export default Output;

import React from "react";
import "./output.css";

const Output = ({ date }) => {
  const { years, months, days } = date;
  return (
    <section className="results-container">
      <h2 className="result">
        <span>{years}</span>Years
      </h2>
      <h2 className="result">
        <span>{months}</span>Months
      </h2>
      <h2 className="result">
        <span>{days}</span>Days
      </h2>
    </section>
  );
};

export default Output;

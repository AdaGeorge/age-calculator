import { useState } from "react";
import "./App.css";
import Form from "./components/form/Form";
import Output from "./components/output/Output";

function App() {
  const [time, setTime] = useState({
    years: "--",
    months: "--",
    days: "--",
  });
  return (
    <div className="App">
      <main className="card-ages">
        <Form setTime={setTime} />
        <Output date={time} />
      </main>
    </div>
  );
}

export default App;

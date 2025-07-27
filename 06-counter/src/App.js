import { useEffect, useState } from "react";
import "./Counter.css";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [step, setStep] = useState(1);

  const [count, setCount] = useState(0);

  const [date, setDate] = useState(new Date().toDateString());

  const [dayCounter, setDayCounter] = useState(0);

  useEffect(() => {
    const updatedDate = new Date();
    updatedDate.setDate(updatedDate.getDate() + step * count);
    setDate(updatedDate.toDateString());
    setDayCounter(step * count);
  }, [step, count]);

  const reset = () => {
    setStep(1);
    setCount(0);
  };

  return (
    // <div className="counter-container">
    //   <div className="counter-row">
    //     <button onClick={() => setStep((s) => (s > 1 ? s - 1 : s))}>-</button>
    //     <h2 className="animated">Step: {step}</h2>
    //     <button onClick={() => setStep((s) => s + 1)}>+</button>
    //   </div>

    //   <div className="counter-row">
    //     <button onClick={() => setCount((c) => c - 1)}>-</button>
    //     <h2 className="animated">Count: {count}</h2>
    //     <button onClick={() => setCount((c) => c + 1)}>+</button>
    //   </div>

    //   <DateString dayCounter={dayCounter} date={date} />

    //   <button className="reset-button" onClick={reset}>
    //     Reset
    //   </button>
    // </div>

    <div className="counter-container">
      <div className="counter-row">
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        {step}
      </div>

      <div className="counter-row">
        <button onClick={() => setCount((c) => Number(c) - 1)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => Number(c) + 1)}>+</button>
      </div>

      <DateString dayCounter={dayCounter} date={date} />

      <button className="reset-button" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

function DateString({ dayCounter, date }) {
  let dateString;
  if (dayCounter === 0) {
    dateString = `Today is ${date}`;
  } else if (dayCounter > 0) {
    dateString = `${dayCounter} days from today is ${date}`;
  } else {
    dateString = `${dayCounter * -1} days ago was today is ${date}`;
  }

  return <h2>{dateString}</h2>;
}

import { useState } from "react";
import "./index.css";

export default function App() {
  return <TipCalculator />;
}

function TipCalculator() {
  const [bill, setBill] = useState(0);

  const [percent1, setPercent1] = useState(0);

  const [percent2, setPercent2] = useState(0);

  const tip = bill * ((percent1 + percent2) / 2 / 100);

  function handleReset() {
    setBill(0);
    setPercent1(0);
    setPercent2(0);
  }

  return (
    <div className="App">
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercent percent={percent1} setPercent={setPercent1}>
        How did you like the service?
      </SelectPercent>

      <SelectPercent percent={percent2} setPercent={setPercent2}>
        How did your friend like the service?
      </SelectPercent>

      {bill > 0 && (
        <>
          <BillOutput bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, setBill }) {
  return (
    <div className="bill">
      <label>How much was the bill? </label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

function SelectPercent({ percent, setPercent, children }) {
  return (
    <div>
      <label>{children} </label>
      <select
        value={percent}
        onChange={(e) => setPercent(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="10">It was okay (5%)</option>
        <option value="15">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function BillOutput({ bill, tip }) {
  return (
    <h2>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h2>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

import { useState } from "react";
import "./index.css";

export default function App() {
  const [billAmount, setBillAmount] = useState(0);

  const [userRating, setUserRating] = useState("dissatisfied");

  const [userFriendRating, setUserFriendRating] = useState("dissatisfied");

  const [tipAmount, setTipAmount] = useState(0);

  function handleBillInput(amount) {
    setBillAmount(amount);
    calculateTip(amount, userRating, userFriendRating);
  }

  function handleUserRatingChange(rating) {
    setUserRating(rating);
    calculateTip(billAmount, rating, userFriendRating);
  }

  function handleFriendRatingChange(rating) {
    setUserFriendRating(rating);
    calculateTip(billAmount, userRating, rating);
  }

  function calculateTip(
    newBillAmount = billAmount,
    newUserRating = userRating,
    newFriendRating = userFriendRating
  ) {
    const tipPercent =
      (getTipPercent(newUserRating) + getTipPercent(newFriendRating)) / 2;

    const tip = newBillAmount * (tipPercent / 100);

    setTipAmount(newBillAmount > 0 ? tip : 0);
  }

  function getTipPercent(rating) {
    if (rating === "dissatisfied") {
      return 0;
    } else if (rating === "okay") {
      return 5;
    } else if (rating === "good") {
      return 10;
    } else return 20;
  }

  function handleReset() {
    setBillAmount(0);
    setUserRating("dissatisfied");
    setUserFriendRating("dissatisfied");
    setTipAmount(0);
  }
  return (
    <div className="App">
      <BillInput billAmount={billAmount} onBillInput={handleBillInput} />
      <div className="rating">
        <h3>How did you like the service?</h3>
        <SelectPercent
          key={1}
          rating={userRating}
          onRatingChange={handleUserRatingChange}
        />
      </div>
      <div className="rating">
        <h3>How did your friend like the service?</h3>
        <SelectPercent
          key={2}
          rating={userFriendRating}
          onRatingChange={handleFriendRatingChange}
        />
      </div>
      <BillOutput billAmount={billAmount} tipAmount={tipAmount} />
      <Reset onReset={handleReset} />
    </div>
  );
}

function BillInput({ billAmount, onBillInput }) {
  return (
    <div className="bill">
      <h3>How much was the bill?</h3>
      <input
        type="text"
        id="billAmount"
        value={billAmount}
        onChange={(e) => onBillInput(Number(e.target.value))}
      ></input>
    </div>
  );
}

function SelectPercent({ rating, onRatingChange }) {
  return (
    <div>
      <select value={rating} onChange={(e) => onRatingChange(e.target.value)}>
        <option value="dissatisfied">Dissatisfied (0%)</option>
        <option value="okay">It was okay (5%)</option>
        <option value="good">It was good (10%)</option>
        <option value="amazing">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function BillOutput({ billAmount, tipAmount }) {
  return (
    <h2>
      You pay ${billAmount} (${billAmount} + ${tipAmount} tip)
    </h2>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

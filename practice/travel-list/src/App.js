import { useState } from "react";

import "./index.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleDeleteItem(id) {
    setItems((items) => items.filter((i) => i.id !== id));
  }

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleItemPacking(id, checked) {
    setItems((items) =>
      items.map((i) => (i.id === id ? { ...i, packed: checked } : i))
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onCheckboxChange={handleItemPacking}
      />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ FAR AWAY 🧳</h1>;
}

function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (description.length === 0) return;
    const item = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItem(item);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <p>What do you need for your 😍 trip? </p>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>ADD</button>
    </form>
  );
}

function PackingList({ items, onDeleteItem, onCheckboxChange }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onCheckboxChange={onCheckboxChange}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onCheckboxChange }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={(e) => onCheckboxChange(item.id, e.target.checked)}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      You have X items on your list, and you already packed X (X%)
    </footer>
  );
}

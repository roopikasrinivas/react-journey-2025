import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

//Header
function Header() {
  //   const headerStyle = {
  //     color: "red",
  //     fontSize: "48px",
  //     textTransform: "uppercase",
  //   };
  const headerStyle = {};
  return (
    <header className="header">
      <h1 style={headerStyle}>Roca Pizzeria</h1>
    </header>
  );
}
//Menu
function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        image="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        image="pizzas/funghi.jpg"
        price={13}
      />
    </main>
  );
}
//Footer
function Footer() {
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We're currently open
    </footer>
  );
}

function Pizza(pizza) {
  return (
    <div className="pizza">
      <img src={pizza.image} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.price + "$"}</span>
      </div>
    </div>
  );
}
// React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));

//Strict Mode renders the components twice and React checks for outdated usages
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

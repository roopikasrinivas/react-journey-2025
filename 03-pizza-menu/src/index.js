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
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  console.log(pizzas);
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {/* always have a true false value, never have integer */}
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza data={pizza} />
          ))}
        </ul>
      ) : (
        <p style={{ color: "red" }}>
          <b>Sold Out!</b>
        </p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/funghi.jpg"
        price={13}
      /> */}
    </main>
  );
}
//Footer
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p style={{ color: "red" }}>
            We're currently open until {closeHour}:00. Come visit us or order
            online
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <div className="order">
          <p style={{ color: "red" }}>
            We're happy to welcome you between {openHour}:00 am and {closeHour}
            :00 pm
          </p>
        </div>
      )}
    </footer>
  );
}

function Pizza(pizza) {
  return (
    <li className="pizza">
      <img src={pizza.data.photoName} alt={pizza.data.name} />
      <div>
        <h3>{pizza.data.name}</h3>
        <p>{pizza.data.ingredients}</p>
        <span>{pizza.data.price + "$"}</span>
      </div>
    </li>
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

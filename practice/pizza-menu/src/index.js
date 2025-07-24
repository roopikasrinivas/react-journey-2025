import React from "react";
import { createRoot } from "react-dom/client";
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

function Header() {
  const style = {
    // color: "Green",
    // fontSize: "32px",
    // textTransform: "uppercase",
  };
  return (
    <header className="header">
      <h1>Autumn Pizzeria</h1>
    </header>
  );
}

function Menu() {
  //   const pizzas = [];
  const pizzas = pizzaData;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {/* Conditional Rendering using short circuting && */}
      {/* {pizzas.length > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizza={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}

      {/* Conditional Rendering terneray operatory */}
      {pizzas.length > 0 ? (
        // React fragments lets us render two elements separately without leaving trace in html dom
        <React.Fragment>
          <p>
            Authentic Italian cuisine. 6 creative dishes to chose from. All from
            our stone oven, all organic, all delicious.{" "}
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizza={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

//Desctructuring props
function Pizza({ pizza }) {
  //   Conditional Rendering using multiple returns
  //   if (pizza.soldOut) return null;

  return (
    <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={pizza.photoName} alt={pizza.photoName} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        {/* {pizza.soldOut ? <span>SOLD OUT</span> : <span>{pizza.price}</span>} */}
        <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const openHour = 10;
  const closeHour = 22;
  const hour = new Date().getHours();
  const isOpen = hour >= openHour && hour <= closeHour;

  //   if (!isOpen)
  //     return (
  //       <footer className="footer">
  //         We're happy to welcome you between {openHour}:00 and {closeHour}:00.
  //       </footer>
  //     );

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
      {/* {new Date().toLocaleDateString()} We're currently open! */}
    </footer>
  );
}

function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

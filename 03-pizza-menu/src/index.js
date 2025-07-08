import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    id: 1,
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    id: 2,
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    id: 3,
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    id: 4,
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    id: 5,
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    id: 6,
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
  const numPizzas = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {/* always have a true false value, never have integer */}
      {numPizzas > 0 ? (
        // React fragments: helps us group element without a trace in the DOM
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to chose from. All from
            our stone oven, all organic, all delicious.{" "}
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza key={pizza.id} data={pizza} />
            ))}
          </ul>
        </>
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
  const openHour = 12;
  const closeHour = 22;
  return (
    <footer className="footer">
      <Order closeHour={closeHour} openHour={openHour} />
    </footer>
  );
}

function Pizza({ data }) {
  console.log(data);
  //multiple returns. USe if condition when you want to return an entrire component
  // if (data.soldOut) return null;
  return (
    <li className={`pizza ${data.soldOut ? "sold-out" : ""}`}>
      <img src={data.photoName} alt={data.name} />
      <div>
        <h3>{data.name}</h3>
        <p>{data.ingredients}</p>
        <span>{data.soldOut ? "SOLD OUT" : data.price + "$"}</span>
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

// Destructuring props needs curly braces: more efficient, and widely used
function Order({ openHour, closeHour }) {
  const hour = new Date().getHours();
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <div className="order">
      {/* = Use Ternery Operator when you want to return some piece of jsx differently */}
      {isOpen ? (
        <>
          <p style={{ color: "red" }}>
            We're currently open from {openHour}:00 to {closeHour}:00. Come
            visit us or order online
          </p>
          <button className="btn">Order</button>
        </>
      ) : (
        <p style={{ color: "red" }}>
          We're happy to welcome you between {openHour}:00 am and {closeHour}
          :00 pm
        </p>
      )}
    </div>
  );
}

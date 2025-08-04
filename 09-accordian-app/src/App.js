import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  function handleToggle(num) {
    if (curOpen === num) setCurOpen(null);
    else setCurOpen(num);
  }

  return (
    <div className="accordion">
      <ul>
        {data.map((item, i) => (
          <AccordionItem
            key={i}
            num={i}
            title={item.title}
            curOpen={curOpen}
            onToggle={handleToggle}
          >
            {item.text}
          </AccordionItem>
        ))}

        <AccordionItem
          key={22}
          num={22}
          title={`Test 22`}
          curOpen={curOpen}
          onToggle={handleToggle}
        >
          <p>Allows React developers to:</p>
          <ul>
            <li>Break up UI into components</li>
            <li>Make compoents reusable</li>
            <li>Place state efficiently</li>
          </ul>
        </AccordionItem>
      </ul>
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onToggle, children }) {
  const isOpen = curOpen === num;
  return (
    <li
      className={`item ${isOpen ? "open" : ""}`}
      onClick={(e) => onToggle(num)}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </li>
  );
}

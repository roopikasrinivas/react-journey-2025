import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const userData = [
  {
    name: "Roopika Srinivas",
    description:
      " I’m a Software Engineer (Full Stack) with 8+ years of experience in developing Cloud and Enterprise software",
    photo: "users/roopika.jpeg",
  },
  {
    name: "Arjun Mehta",
    description:
      "I’m a DevOps Engineer with 6+ years of experience in automating CI/CD pipelines and managing scalable cloud infrastructure.",
    photo: "users/arjun.png",
  },
  {
    name: "Sara Lim",
    description:
      "I’m a Frontend Developer specializing in React and design systems, passionate about crafting accessible and performant user interfaces.",
    photo: "users/sara.png",
  },
  {
    name: "Devanshi Patel",
    description:
      "I’m a Data Scientist with a strong background in Python, machine learning, and building AI models for real-world applications.",
    photo: "users/devanshi.png",
  },
  {
    name: "Carlos Rivera",
    description:
      "I’m a Full Stack Developer with experience in MERN stack, RESTful APIs, and building modern web applications from concept to deployment.",
    photo: "users/carlos.png",
  },
];

function App() {
  return (
    <ul>
      {userData.map((user) => (
        <UserCard data={user} />
      ))}
    </ul>
  );
}

function UserCard(props) {
  return (
    <li className="card">
      <Avatar image={props.data.photo} name={props.data.name} />
      <Profile user={props.data} />
    </li>
  );
}

function Avatar(props) {
  return <img className="avatar" src={props.image} alt={props.name}></img>;
}

function Profile(props) {
  return (
    <div className="data">
      <div>
        <h1>{props.user.name}</h1>
        <p>{props.user.description}</p>
      </div>
      <SkillsList />
    </div>
  );
}

function Skill(skill) {
  return (
    <div className="skill" style={{ backgroundColor: skill.color }}>
      <span>
        {skill.name} {skill.icon}
      </span>
      {/* <icon>{skill.icon}</icon> */}
    </div>
  );
}

function SkillsList() {
  return (
    <div className="skill-list">
      <Skill name="JavaScript" color="orange" icon="💛" />
      <Skill name="HTML" color="green" icon="📄" />
      <Skill name="CSS" color="aqua" icon="🎨" />
      <Skill name="GitHub" color="grey" icon="🐙" />
      <Skill name="React" color="skyblue" icon="⚛️" />
      {/* <Skill name="Node.js" color="lightgreen" icon="🌿" />
      <Skill name="MongoDB" color="seagreen" icon="🍃" />
      <Skill name="PostgreSQL" color="dodgerblue" icon="🐘" />
      <Skill name="Docker" color="deepskyblue" icon="🐳" />
      <Skill name="AWS" color="gold" icon="☁️" />
      <Skill name="Git" color="crimson" icon="🔧" /> */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

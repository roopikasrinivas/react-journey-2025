import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="card">
      <Avatar image="profilepic.jpeg" name="Roopika Srinivas" />
      <Profile name="Roopika Srinivas" />
    </div>
  );
}

function Avatar(props) {
  return <img className="avatar" src={props.image} alt={props.name}></img>;
}

function Profile(props) {
  return (
    <div className="data">
      <div>
        <h1>{props.name}</h1>
        <p>
          I’m a Software Engineer (Full Stack) with 8+ years of experience in
          developing Cloud and Enterprise software.
        </p>
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
      <Skill name="Node.js" color="lightgreen" icon="🌿" />
      <Skill name="MongoDB" color="seagreen" icon="🍃" />
      <Skill name="PostgreSQL" color="dodgerblue" icon="🐘" />
      <Skill name="Docker" color="deepskyblue" icon="🐳" />
      <Skill name="AWS" color="gold" icon="☁️" />
      <Skill name="Git" color="crimson" icon="🔧" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

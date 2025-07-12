import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const skills = [
  { id: 1, name: "HTML+CSS", level: "advanced", color: "orange" },
  { id: 2, name: "JavaScript", level: "advanced", color: "green" },
  { id: 3, name: "Web Design", level: "advanced", color: "aqua" },
  { id: 4, name: "Git and GitHub", level: "intermediate", color: "pink" },
  { id: 5, name: "React", level: "advanced", color: "yellow" },
  { id: 6, name: "Svelte", level: "beginner", color: "olive" },
];
const userData = [
  {
    id: 1,
    name: "Roopika Srinivas",
    description:
      " I’m a Software Engineer (Full Stack) with 8+ years of experience in developing Cloud and Enterprise software",
    photo: "users/roopika.jpeg",
  },
  {
    id: 2,
    name: "Arjun Mehta",
    description:
      "I’m a DevOps Engineer with 6+ years of experience in automating CI/CD pipelines and managing scalable cloud infrastructure.",
    photo: "users/arjun.png",
  },
  {
    id: 3,
    name: "Sara Lim",
    description:
      "I’m a Frontend Developer specializing in React and design systems, passionate about crafting accessible and performant user interfaces.",
    photo: "users/sara.png",
  },
  {
    id: 4,
    name: "Devanshi Patel",
    description:
      "I’m a Data Scientist with a strong background in Python, machine learning, and building AI models for real-world applications.",
    photo: "users/devanshi.png",
  },
  {
    id: 5,
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
        <UserCard key={user.id} data={user} />
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

function Skill({ skill }) {
  console.log(skill);
  const level = skill.level;
  const icon =
    level === "advanced" ? "💪" : level === "intermediate" ? "👍" : "🧒";
  return (
    <li className="skill" style={{ backgroundColor: skill.color }}>
      <span>
        {skill.name} {skill.icon}
      </span>
      {/* <icon>{skill.icon}</icon> */}
      <icon>{icon}</icon>
    </li>
  );
}

function SkillsList() {
  return (
    <div className="skill-list">
      {/* // return Skill list from skills // Return emoji based on condition advanced intermediate or beginner */}

      {skills.map((skill) => {
        return <Skill key={skill.id} skill={skill} />;
      })}
      {/* <Skill name="JavaScript" color="orange" icon="💛" />
      <Skill name="HTML" color="green" icon="📄" />
      <Skill name="CSS" color="aqua" icon="🎨" />
      <Skill name="GitHub" color="grey" icon="🐙" />
      <Skill name="React" color="skyblue" icon="⚛️" /> 
      <Skill name="Node.js" color="lightgreen" icon="🌿" />
      <Skill name="MongoDB" color="seagreen" icon="🍃" />
      <Skill name="PostgreSQL" color="dodgerblue" icon="🐘" />
      <Skill name="Docker" color="deepskyblue" icon="🐳" />
      <Skill name="AWS" color="gold" icon="☁️" />
      <Skill name="Git" color="crimson" icon="🔧" />  */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

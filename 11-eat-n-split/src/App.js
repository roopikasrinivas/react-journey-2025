import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);

  function handleAddFriends(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        <FormAddFriend onAddFriends={handleAddFriends} />

        <Button>Add friend</Button>
      </div>
      <div>
        <FormSplitBill />
      </div>
    </div>
  );
}

function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance === 0 ? (
        <p>You and {friend.name} are even</p>
      ) : friend.balance >= 0 ? (
        <p className="green">
          {friend.name} owes you {friend.balance}$
        </p>
      ) : (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}

      <Button>Select</Button>
    </li>
  );
}

function FormAddFriend({ onAddFriends }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newFriend = {
      id: Date.now(),
      name,
      image,
      balance: 0,
    };
    setName("");
    setImage("");
    onAddFriends(newFriend);
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label id="name">🧑‍🤝‍🧑Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label id="image">👩Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

function Button({ children }) {
  return <button className="button">{children}</button>;
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <label>💲Bill Value</label>
      <input type="text"></input>

      <label>💛Your expense</label>
      <input type="text"></input>

      <label>💜Friend's expense</label>
      <input type="text"></input>

      <label>🔆Who is paying the bill</label>
      <select>
        <option value="0">You</option>
        <option value="1">Friend</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

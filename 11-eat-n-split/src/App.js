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

function Button({ onClick, children }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [showSplitBill, setShowSplitBill] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((showAddFriend) => !showAddFriend);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    handleShowAddFriend();
  }

  function handleOpenSplitBill(friend) {
    if (showSplitBill === false) setShowSplitBill(true);
    // setShowSplitBill((showSplitBill) => !showSplitBill);
    setSelectedFriend(friend);
  }

  function handleSplitBill(friendID, amount) {
    const newFriends = friends.map((friend) => {
      if (friend.id === friendID) {
        const newFriend = { ...friend, balance: friend.balance + amount };
        return newFriend;
      } else {
        return friend;
      }
    });

    setFriends(newFriends);
    setShowSplitBill(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} onSelectFriend={handleOpenSplitBill} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {showSplitBill && (
        <div>
          <FormSplitBill
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
          />
        </div>
      )}
    </div>
  );
}

function FriendsList({ friends, onSelectFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelectFriend={onSelectFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelectFriend }) {
  function handleSelectFriend() {
    onSelectFriend(friend);
  }

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

      <Button onClick={(e) => handleSelectFriend()}>Select</Button>
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    const id = crypto.randomUUID();
    const newFriend = {
      id: id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    setName("");
    setImage("https://i.pravatar.cc/48");
    onAddFriend(newFriend);
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

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const [paysBill, setPaysBill] = useState(0);

  const friendsExpense = bill - yourExpense;

  function handleSubmit(e) {
    e.preventDefault();
    const amount = paysBill === 0 ? friendsExpense : -1 * friendsExpense;
    onSplitBill(selectedFriend.id, amount);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>SPLIT A BILL WITH {selectedFriend.name}</h2>
      <label>💲Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />

      <label>💛Your expense</label>
      <input
        type="text"
        value={yourExpense}
        onChange={(e) => setYourExpense(e.target.value)}
      />

      <label>💜Friend's expense</label>
      <input type="text" value={friendsExpense} contentEditable="false"></input>

      <label>🔆Who is paying the bill</label>
      <select value={paysBill} onChange={(e) => setPaysBill(e.target.value)}>
        <option value="0">You</option>
        <option value="1">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

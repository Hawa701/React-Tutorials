import React, { useState } from "react";

const Content = () => {
  const [name, setName] = useState("User");
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["Japu", "Saba", "Dinich"];
    const index = Math.floor(Math.random() * 3);
    return names[index];
  };

  const handleClick = () => {
    setName(handleNameChange);
    setCount(count + 1);
  };

  return (
    <main>
      <p>Welcome {name}!</p>
      <button onClick={handleClick}>Generate Random User</button>
      <p className="clickedTimes">You have clicked the button {count} times!</p>
    </main>
  );
};

export default Content;

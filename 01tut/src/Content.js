import React from "react";

const Content = () => {
  const handleNameChange = () => {
    const name = ["Japu", "Saba", "Dinich"];
    const index = Math.floor(Math.random() * 3);
    return name[index];
  };

  return (
    <main>
      <h3>Welcome {handleNameChange()}!</h3>
    </main>
  );
};

export default Content;

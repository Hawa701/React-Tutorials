import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  const [items, setItems] = useState([
    { id: 1, checked: false, name: "Salt" },
    { id: 2, checked: false, name: "Soap" },
    { id: 3, checked: false, name: "Toilet Paper" },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem = ("grocerylist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(listItems);
    localStorage.setItem = ("grocerylist", JSON.stringify(listItems));
  };

  return (
    <>
      <Header title="Shopping List" />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </>
  );
}

export default App;

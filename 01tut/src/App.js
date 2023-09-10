import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  const savedItems = localStorage.getItem("shoppinglist");
  console.log(savedItems);
  const initialItems = savedItems ? JSON.parse(savedItems) : [];

  //State Hooks
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  //Functions
  const setAndSaveItem = (listItems) => {
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 0;
    const myNewItem = { id, checked: false, name: item };
    const listItems = [...items, myNewItem];
    setAndSaveItem(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    console.log(newItem);
    setNewItem("");
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItem(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => {
      return item.id !== id;
    });
    setAndSaveItem(listItems);
  };

  return (
    <>
      <Header title="Shopping List" />
      <Content
        search={search}
        setSearch={setSearch}
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        items={items.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  //API
  const API_URL = "http://localhost:3500/items";

  //State Hooks
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //Effect Hooks
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Didn't recieve expected data!");
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000);
  }, []);

  //Functions
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 0;
    const myNewItem = { id, checked: false, name: item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(listItems);
  };

  return (
    <>
      <Header title="Shopping List" />
      <main>
        {isLoading && <p className="loadingMessage">Loading Items...</p>}
        {fetchError && <p className="errorMessage">Error: {fetchError}</p>}

        {!fetchError && !isLoading && (
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
        )}
      </main>
      <Footer length={items.length} />
    </>
  );
}

export default App;

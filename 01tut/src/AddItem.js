import React from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add item</label>
      <div className="inputs">
        <input
          type="text"
          id="addItem"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit" aria-label="Add Item" onClick={handleSubmit}>
          <FaPlus />
        </button>
      </div>
    </form>
  );
};

export default AddItem;

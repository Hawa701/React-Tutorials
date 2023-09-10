import React, { useRef } from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();

  return (
    <form className="addItem" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add item</label>
      <div className="inputs">
        <input
          type="text"
          ref={inputRef}
          id="addItem"
          placeholder="Enter item"
          maxLength={50}
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button
          type="submit"
          aria-label="Add Item"
          onClick={() => inputRef.current.focus()}
        >
          <FaPlus />
        </button>
      </div>
    </form>
  );
};

export default AddItem;

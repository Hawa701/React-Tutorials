import React from "react";
import { FaTrash } from "react-icons/fa";

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li
      className={item.checked === true ? "item checked" : "item"}
      key={item.id}
    >
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleCheck(item.id)}
      />
      <label onDoubleClick={() => handleCheck(item.id)}>{item.name}</label>
      <FaTrash
        role="button"
        tabIndex={0}
        aria-label={`Delete ${item.name}`}
        onClick={() => handleDelete(item.id)}
      />
    </li>
  );
};

export default LineItem;

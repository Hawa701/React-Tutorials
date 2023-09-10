import React from "react";

const SearchItem = ({ search, setSearch }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="searchInput">Search</label>
      <input
        type="text"
        id="searchInput"
        placeholder="Search items here..."
        maxLength={50}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;

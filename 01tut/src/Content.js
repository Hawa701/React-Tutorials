import ItemList from "./ItemList";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

const Content = ({
  search,
  setSearch,
  newItem,
  setNewItem,
  handleSubmit,
  items,
  handleCheck,
  handleDelete,
}) => {
  return (
    <main>
      <SearchItem search={search} setSearch={setSearch} />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p className="noResult">No items available!</p>
      )}
    </main>
  );
};

export default Content;

import ItemList from "./ItemList";
import AddItem from "./AddItem";

const Content = ({
  newItem,
  setNewItem,
  handleSubmit,
  items,
  handleCheck,
  handleDelete,
}) => {
  return (
    <main>
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

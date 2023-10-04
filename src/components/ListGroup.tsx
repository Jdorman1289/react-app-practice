function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const getItemsMessage = () => {
    return items.length === 0 && <p>No items found</p>;
  };

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {getItemsMessage()}
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

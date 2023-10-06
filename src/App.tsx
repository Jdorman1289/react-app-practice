import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
      <br />
      <br />
      <ListGroup items={["Cake", "Pie", "Pancakes"]} heading="food" />
    </div>
  );
}

export default App;

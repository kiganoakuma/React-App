import { useState } from "react";
import ListGroup from "./ListGroup";
import styled from "styled-components";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const items = ["New York", "Los Angeles", "San Francisco"];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        heading="Miami"
        items={items}
        onSelectItem={handleSelectedItem}
      ></ListGroup>
    </div>
  );
}

export default App;

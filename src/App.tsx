import { useState } from "react";
import ExpandableText from "./components/ExpandableText";

const App = () => {
  const handleClick = () => {};

  return (
    <div>
      <ExpandableText maxChars={100}>HEllo world</ExpandableText>
    </div>
  );
};

export default App;

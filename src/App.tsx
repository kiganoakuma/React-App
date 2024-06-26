import { useState } from "react";
import produce from "immer";
import Button from "./components/Button/Button";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    setBugs(
      produce((draft) => {
        const bug1 = draft.find((bug) => bug.id === 1);
        const bug2 = draft.find((bug) => bug.id === 2);
        if (bug1) bug1.fixed = true;
        if (bug2) bug2.fixed = true;
      })
    );
  };
  return (
    <div>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Fixed" : "new"}
        </p>
      ))}
      <Button onClick={handleClick}>Click Me!</Button>
    </div>
  );
}

export default App;

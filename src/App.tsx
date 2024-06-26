import { useState } from "react";

const App = () => {
  interface Props {}

  const Cart = ({}: Props) => {
    const [game, setGame] = useState({
      id: 1,
      player: {
        name: "John",
      },
    });

    const handleClick = () => {
      setGame({ ...game, player: { ...game.player, name: "Bob" } });
    };

    return <div></div>;
  };
};

export default App;

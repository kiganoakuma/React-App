import { useState } from "react";
import produce from "immer";
import NavBar from "./components/navBar";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  return (
    <div>
      <NavBar cartItemsCount={cartItems.length}></NavBar>
      <Cart onClear={() => setCartItems([])} cartItems={cartItems}></Cart>
    </div>
  );
}

export default App;

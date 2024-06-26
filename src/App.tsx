import Like from "./components/Like/Like";

function App() {
  return (
    <div>
      <Like onClick={() => console.log("clicked")}></Like>
    </div>
  );
}

export default App;

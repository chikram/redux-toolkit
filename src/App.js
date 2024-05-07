import "./App.css";
import Add from "./components/Add";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="container">
      <h1>redux tool-kit</h1>
      <Add />
      <Todos />
    </div>
  );
}

export default App;

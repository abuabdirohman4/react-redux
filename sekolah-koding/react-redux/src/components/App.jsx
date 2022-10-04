import "../App.css";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTodo />
        <Todos />
      </header>
    </div>
  );
}

export default App;

import { useState } from "react";
import store from "./redux/store";
import "./App.css";
import Todo from "./pages/Todo";
import AddTodo from "./pages/AddTodo";
function App() {
  return (
    <div className="m-div">
      <AddTodo />
    </div>
  );
}

export default App;

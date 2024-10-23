import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoslice";
import Todo from "./Todo";
import "./AddTodo.css";

const AddTodo = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (task) {
      dispatch(addTodo(task));
      setTask("");
    }
  };
  return (
    <div className="todo">
      <div>
        <div className="f-div">
          <div className="h1-txt">
            <h1 style={{ color: "yellow" }}>To</h1>
            <h1 style={{ color: "blue" }}>Do</h1>
          </div>
          <form className="form" onSubmit={addTodoHandler}>
            <input
              type="text"
              className="task-inpt"
              value={task}
              placeholder="Enter your tasks"
              onChange={(e) => setTask(e.target.value)}
            />
            <button className="add-btn">Add</button>
          </form>
        </div>
      </div>
      <div className="todo-list">
        <Todo />
      </div>
    </div>
  );
};

export default AddTodo;

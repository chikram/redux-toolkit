import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Todos</h1>

      {todos.map((todo) => (
        <li
          className="rounded bg-secondary px-0 p-2 mt-2"
          key={todo.id}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span className="ms-2 text-white">{todo.text}</span>
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            type="button"
            className="btn btn-danger btn-sm "
          >
            X
          </button>
        </li>
      ))}
    </div>
  );
}

export default Todos;

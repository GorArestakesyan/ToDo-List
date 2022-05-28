import React from "react";

function Todo({ todo, handleToggle, removeTodo }) {
  return (
    <div className="item-todo">
      <div
        className={todo.complited ? "strike" : "item-text"}
        onClick={(e) => {
          e.preventDefault();
          handleToggle(todo.id);
        }}
      >
        <h3>{todo.task}</h3>
      </div>
      <div
        className="item-delete"
        onClick={() => {
          removeTodo(todo.id);
        }}
      >
        X
      </div>
    </div>
  );
}

export default Todo;

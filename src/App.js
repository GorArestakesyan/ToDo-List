import "./App.css";
import { useState } from "react";
import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./todo";
export const mycontext = React.createContext();
function App() {
  const [todos, setTodos] = useState([]);
  const RemoveTodo = (id) =>
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  const AddTodo = (userInput) => {
    if (userInput) {
      const newTodo = {};
      return setTodos([...todos, { newTodo }]);
    }
  };
  const HandleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complited: true } : todo
      ),
    ]);
  };
  return (
    <div className="App">
      <header>
        <h1>MY TODO {todos.length}</h1>

        <TodoForm
          AddTodo={(userInput) => {
            setTodos([
              ...todos,
              {
                id: Math.random().toString(),
                complited: false,
                task: userInput,
              },
            ]);
          }}
        />
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              handleToggle={HandleToggle}
              todo={todo}
              removeTodo={RemoveTodo}
            />
          );
        })}

        <div className="footer">
          <button
            onClick={(e) => {
              e.preventDefault();
              setTodos([...todos.filter((todo) => todo.complited !== true)]);
            }}
          >
            Clear complited
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setTodos([]);
            }}
          >
            Clear All
          </button>
        </div>
      </header>
    </div>
  );
}
export default App;

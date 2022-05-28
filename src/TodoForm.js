import React, { useRef, useState } from "react";
function TodoForm({ AddTodo }) {
  const [userInput, setUserInput] = useState("");
  const InputRef = useRef();
  return (
    <form>
      <input
        type="text"
        ref={InputRef}
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
        placeholder="Type ToDo"
      />

      <button
        onClick={(e) => {
          e.preventDefault();
          AddTodo(userInput);
          InputRef.current.value = "";
          setUserInput("");
        }}
      >
        ADD
      </button>
    </form>
  );
}

export default TodoForm;

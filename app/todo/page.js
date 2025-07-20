"use client";
import { useState } from "react";

export default function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  function addNewTodo() {
    setTodos((prev) => [...prev, text]);
  }

  return (
    <div>
      <h1>Todo</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addNewTodo}>ekle</button>

      {todos.length > 0 &&
        todos.map((item, index) => <li key={index}>{item}</li>)}
    </div>
  );
}

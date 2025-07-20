"use client";
import { useState } from "react";
import styles from "./todo.module.css";
import Link from "next/link";

export default function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  function addNewTodo() {
    if (text.trim() !== "") {
      setTodos((prev) => [...prev, text]);
      setText("");
    }
    console.log("merhaba");
  }

  return (
    <div className={styles.container}>
      <Link href="/">Ana ekrana dön</Link>
      <h1 className={styles.title}>Todo</h1>
      <input
        className={styles.input}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className={text.trim() === "" ? styles.disabledButton : styles.button}
        onClick={addNewTodo}
        disabled={text.trim() === ""}
      >
        Kaydet
      </button>

      <ul className={styles.list}>
        {todos.length > 0 &&
          todos.map((item, index) => (
            <li className={styles.listItem} key={index}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}

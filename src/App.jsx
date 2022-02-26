import React, { useState } from "react";

export default function App() {
  const [val, setVal] = useState("");
  const [todos, setTodos] = useState(["挼na", "戏孃", "操母"]);
  const handleAdd = () => {
    setTodos([...todos, val]);
    setVal("");
  };
  return (
    <div>
      <h1>{val}</h1>
      <input
        type="text"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      <button onClick={handleAdd}> 添加</button>
      <ul>
        {todos.map((todo, id) => (
          <li key={todo.title}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

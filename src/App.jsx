// src/App.jsx
import React, { useState } from "react";
import TodosList from "./TodosList";
import UserData from "./UserData";

function App() {
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div>
      <h1>Todos App</h1>

      <UserData />

      {showTodos && <TodosList />}

      <button onClick={() => setShowTodos(false)}>
        Unmount Todos
      </button>
    </div>
  );
}

export default App;




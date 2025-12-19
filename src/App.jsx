import React, { useState } from "react";
import TodosList from "./TodosList";

function App() {
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div>
      <h1>Todos App</h1>

      {showTodos && <TodosList />}

      <button onClick={() => setShowTodos(false)}>
        Unmount Todos
      </button>
    </div>
  );
}

export default App;



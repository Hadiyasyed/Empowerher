import React, { useEffect, useState } from "react";
import TodoCard from "./TodoCard";

function TodosList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // fetch on initial render
    const fetchTodos = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setTodos(data.slice(0, 15)); // first 15 todos
    };

    fetchTodos();

    // cleanup: runs when TodosList unmounts
    return () => {
      alert("cleanup worked");
    };
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          userId={todo.userId}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default TodosList;

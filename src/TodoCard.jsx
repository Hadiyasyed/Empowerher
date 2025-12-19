import React from "react";

function TodoCard({ userId, title, completed }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "8px 0",
        padding: "8px",
      }}
    >
      <p>User: {userId}</p>
      <p>Title: {title}</p>
      <p>Status: {completed ? "Completed" : "Pending"}</p>
    </div>
  );
}

export default TodoCard;

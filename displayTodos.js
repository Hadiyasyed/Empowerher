
export function displayTodos(data) {
  const container = document.getElementById("todos-container");
  container.innerHTML = "";

  data.forEach((todo) => {
    const div = document.createElement("div");
    div.className = "todo-card";

    div.innerHTML = `
      <h3>${todo.title}</h3>
      <p>Status: ${todo.completed ? "Completed" : "Pending"}</p>
      <p>User ID: ${todo.userId}</p>
    `;

    container.appendChild(div);
  });
}

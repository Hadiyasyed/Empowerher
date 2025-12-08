const TODO_KEY = "todos";
const listEl = document.getElementById("todo-list");
const emptyMsgEl = document.getElementById("empty-message");

window.addEventListener("DOMContentLoaded", () => {
  const stored = localStorage.getItem(TODO_KEY);
  if (!stored) {
    fetchAndStoreTodos();
  } else {
    renderTodos();
  }
});

function fetchAndStoreTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => {
      const firstTwenty = data.slice(0, 20);
      localStorage.setItem(TODO_KEY, JSON.stringify(firstTwenty));
      renderTodos();
    })
    .catch((err) => console.error("Fetch error:", err));
}

function getTodosFromStorage() {
  const stored = localStorage.getItem(TODO_KEY);
  return stored ? JSON.parse(stored) : [];
}


function saveTodosToStorage(todos) {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}


function renderTodos() {
  const todos = getTodosFromStorage();
  listEl.innerHTML = "";

  if (todos.length === 0) {
    emptyMsgEl.style.display = "block";
    return;
  } else {
    emptyMsgEl.style.display = "none";
  }

  todos.forEach((todo) => {
    const li = document.createElement("li");

    const titleSpan = document.createElement("span");
    titleSpan.textContent = todo.title + " ";
    if (todo.completed) {
      titleSpan.classList.add("completed");
    }
    li.appendChild(titleSpan);

    const statusSpan = document.createElement("span");
    statusSpan.textContent = todo.completed ? "[Completed]" : "[Pending]";
    li.appendChild(statusSpan);

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Mark Complete";
    toggleBtn.addEventListener("click", () => toggleComplete(todo.id));
    li.appendChild(toggleBtn);

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => deleteTodo(todo.id));
    li.appendChild(delBtn);

    listEl.appendChild(li);
  });
}

function deleteTodo(id) {
  const todos = getTodosFromStorage();
  const updated = todos.filter((t) => t.id !== id);
  saveTodosToStorage(updated);
  renderTodos();
}


function toggleComplete(id) {
  const todos = getTodosFromStorage();
  const updated = todos.map((t) =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );
  saveTodosToStorage(updated);
  renderTodos();
}

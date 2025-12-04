const TASKS_KEY = "tasks";

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const searchInput = document.getElementById("searchInput");
const taskList = document.getElementById("taskList");

function loadTasks() {
  const data = localStorage.getItem(TASKS_KEY);
  return data ? JSON.parse(data) : [];
}

function saveTasks(tasks) {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

function renderTasks(filterText = "") {
  const tasks = loadTasks();
  taskList.innerHTML = "";

  const lowerFilter = filterText.toLowerCase();

  tasks
    .filter(task => task.text.toLowerCase().includes(lowerFilter))
    .forEach(task => {
      const li = document.createElement("li");
      li.className = "task-item";

      const left = document.createElement("div");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;

      const span = document.createElement("span");
      span.className = "task-text";
      if (task.completed) span.classList.add("completed");
      span.textContent = task.text;

      left.appendChild(checkbox);
      left.appendChild(span);

      const delBtn = document.createElement("button");
      delBtn.textContent = "Delete";

      li.appendChild(left);
      li.appendChild(delBtn);
      taskList.appendChild(li);

      checkbox.addEventListener("change", () => {
        const tasksNow = loadTasks();
        const t = tasksNow.find(t => t.id === task.id);
        if (t) {
          t.completed = checkbox.checked;
          saveTasks(tasksNow);
          renderTasks(searchInput.value);
        }
      });

      delBtn.addEventListener("click", () => {
        const tasksNow = loadTasks().filter(t => t.id !== task.id);
        saveTasks(tasksNow);
        renderTasks(searchInput.value);
      });
    });
}

addBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (text === "") return;

  const tasks = loadTasks();
  const newTask = {
    id: Date.now(),      // unique id
    text,
    completed: false
  };

  tasks.push(newTask);
  saveTasks(tasks);
  taskInput.value = "";
  renderTasks(searchInput.value);
});

taskInput.addEventListener("keydown", e => {
  if (e.key === "Enter") addBtn.click();
});

searchInput.addEventListener("input", () => {
  renderTasks(searchInput.value);
});

renderTasks();

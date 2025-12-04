const NOTES_KEY = "userNotes";

const noteArea = document.getElementById("noteArea");
const saveBtn = document.getElementById("saveBtn");
const loadBtn = document.getElementById("loadBtn");
const clearBtn = document.getElementById("clearBtn");
const message = document.getElementById("message");

window.addEventListener("load", () => {
  const savedNotes = localStorage.getItem(NOTES_KEY);
  if (savedNotes !== null) {
    noteArea.value = savedNotes;
  }
});

// Save notes with validation
saveBtn.addEventListener("click", () => {
  const text = noteArea.value.trim();

  if (text === "") {
    message.style.color = "red";
    message.textContent = "Cannot save empty notes.";
    return;
  }

  localStorage.setItem(NOTES_KEY, text);
  message.style.color = "green";
  message.textContent = "Notes saved successfully.";
});


loadBtn.addEventListener("click", () => {
  const savedNotes = localStorage.getItem(NOTES_KEY);

  if (savedNotes === null) {
    message.style.color = "red";
    message.textContent = "No saved notes to load.";
    return;
  }

  noteArea.value = savedNotes;
  message.style.color = "green";
  message.textContent = "Notes loaded.";
});

clearBtn.addEventListener("click", () => {
  localStorage.removeItem(NOTES_KEY);
  noteArea.value = "";
  message.style.color = "green";
  message.textContent = "Notes cleared.";
});

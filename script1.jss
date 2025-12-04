const addBtn = document.getElementById("add-btn");
const removeBtn = document.getElementById("remove-btn");
const container = document.getElementById("container");

// Add new paragraph
addBtn.addEventListener("click", function () {
  const p = document.createElement("p");        // createElement
  p.textContent = "This is a new paragraph.";
  container.appendChild(p);                    // appendChild
});

// Remove last paragraph
removeBtn.addEventListener("click", function () {
  const lastPara = container.lastElementChild;
  if (lastPara) {
    container.removeChild(lastPara);           // removeChild
  }
});

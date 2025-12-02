// Single image URL for all cards
const DEFAULT_IMAGE =
  "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg";

// Data store
let books = [];

// DOM elements
const bookForm = document.getElementById("bookForm");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const categorySelect = document.getElementById("category");
const booksContainer = document.getElementById("booksContainer");

const sortAZBtn = document.getElementById("sortAZ");
const sortZABtn = document.getElementById("sortZA");
const filterCategorySelect = document.getElementById("filterCategory");

// Add Book
bookForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const category = categorySelect.value;

  if (!title || !author || !category) return;

  const newBook = {
    id: Date.now(),
    title,
    author,
    category,
    imageUrl: DEFAULT_IMAGE,
  };

  books.push(newBook);
  bookForm.reset();
  renderBooks();
});

// Delete book by id
function deleteBook(id) {
  books = books.filter((book) => book.id !== id);
  renderBooks();
}

// Sort buttons
sortAZBtn.addEventListener("click", function () {
  books.sort((a, b) => a.title.localeCompare(b.title));
  renderBooks();
});

sortZABtn.addEventListener("click", function () {
  books.sort((a, b) => b.title.localeCompare(a.title));
  renderBooks();
});

// Filter by category
filterCategorySelect.addEventListener("change", function () {
  renderBooks();
});

// Render UI
function renderBooks() {
  booksContainer.innerHTML = "";

  const selectedCategory = filterCategorySelect.value;

  const visibleBooks =
    selectedCategory === "All"
      ? books
      : books.filter((book) => book.category === selectedCategory);

  visibleBooks.forEach((book) => {
    const card = document.createElement("div");
    card.className = "book-card";

    card.innerHTML = `
      <img src="${book.imageUrl}" alt="Book image" />
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Category:</strong> ${book.category}</p>
      <button class="delete-btn">Delete</button>
    `;

    card.querySelector(".delete-btn").addEventListener("click", function () {
      deleteBook(book.id);
    });

    booksContainer.appendChild(card);
  });
}

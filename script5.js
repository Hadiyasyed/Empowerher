import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const app = window.firebaseApp;
const db = getFirestore(app);

const addBookForm = document.getElementById("addBookForm");
const booksContainer = document.getElementById("booksContainer");

// Listen to realtime book list
const booksRef = collection(db, "books");
onSnapshot(booksRef, (snapshot) => {
  booksContainer.innerHTML = "";
  snapshot.forEach((d) => {
    const book = d.data();
    const card = document.createElement("div");
    card.className = "book-card";
    card.innerHTML = `
      <img src="${book.imageUrl}" alt="${book.title}">
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Price: ${book.price}</p>
      <button class="update-btn">Update Author</button>
      <button class="delete-btn">Delete</button>
      <button class="view-btn">View Details</button>
    `;
    booksContainer.appendChild(card);

    // Delete
    card.querySelector(".delete-btn").onclick = async () => {
      await deleteDoc(doc(db, "books", d.id));
    };

    // Update author
    card.querySelector(".update-btn").onclick = async () => {
      const newAuthor = prompt("New author name:", book.author);
      if (newAuthor) {
        await updateDoc(doc(db, "books", d.id), { author: newAuthor });
      }
    };

    // View details
    card.querySelector(".view-btn").onclick = () => {
      alert(`Title: ${book.title}\nAuthor: ${book.author}\nPrice: ${book.price}`);
    };
  });
});

// Add new book
addBookForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const price = Number(document.getElementById("price").value);
  const imageUrl = document.getElementById("imageUrl").value.trim();

  if (!title || !author || !imageUrl) return;

  await addDoc(booksRef, { title, author, price, imageUrl });
  addBookForm.reset();
});

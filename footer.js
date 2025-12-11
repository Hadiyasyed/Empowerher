
export function footer() {
  const year = new Date().getFullYear();
  return `
    <footer>
      <p>Todo App &copy; ${year}</p>
    </footer>
  `;
}

function evaluateEmployees(employees) {
  const filtered = employees.filter(e => e.tasksCompleted > 5);
  const mapped = filtered.map(e => {
    let level;
    if (e.rating > 4.5) level = "Excellent";
    else if (e.rating >= 3 && e.rating <= 4.5) level = "Good";
    else level = "Needs Improvement";
    return { name: e.name, performance: level };
  });
  const performanceOrder = { "Excellent": 3, "Good": 2, "Needs Improvement": 1 };
  mapped.sort((a, b) => performanceOrder[b.performance] - performanceOrder[a.performance]);
  return mapped;
}
const input = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  { name: "David", tasksCompleted: 10, rating: 4.9 },
  { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

console.log(evaluateEmployees(input));


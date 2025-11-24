function countCategories(arr) {
  const counts = arr.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});
  return counts;
}

function sortedCategories(arr) {
  const counts = countCategories(arr);
  const sorted = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([category]) => category);
  return sorted;
}
const input = [
  "electronics", "clothing", "electronics",
  "toys", "clothing", "toys", "toys"
];
console.log(countCategories(input));    

console.log(sortedCategories(input));    

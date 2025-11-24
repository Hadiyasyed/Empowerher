// a) Merge two arrays using the spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const mergedArr = [...arr1, ...arr2];
console.log(mergedArr); // [1, 2, 3, 4, 5]

// b) Function using rest operator to get sum
const sum = (...nums) => nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum(1, 2, 3, 4, 5)); // 15

// c) Multi-level destructuring
const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};

const { name, address: { city, pin } } = user;
console.log(name); // Alice
console.log(city); // Bangalore
console.log(pin);  // 560001

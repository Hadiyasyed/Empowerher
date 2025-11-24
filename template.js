// a) Template literals
const username = "Sam";
const course = "JavaScript";
console.log(`Hello ${username}, welcome to the ${course} course!`);

// b) Object shorthand syntax
const name = "Sam";
const age = 21;
const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};

// c) Arrow function shorthand
const getFullName = (first, last) => `${first} ${last}`;

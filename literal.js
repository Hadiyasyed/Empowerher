// 1. Template Literals + Expressions
console.log(`5 + 7 = ${5 + 7}`); // 1
const multiLine = `This is line one.\nThis is line two.\nThis is line three.`; // 2
console.log(multiLine); // 3
const firstName = "John"; // 4
const lastName = "Doe"; // 5
console.log(`Full name: ${firstName} ${lastName}`); // 6

// 2. Arrow Functions & this
const square = n => n * n; // 7
const obj = { value: 50, test: () => console.log(this.value) }; // 8
obj.test(); // 9 (undefined)
// 10
const obj2 = { value: 50, test: function() { console.log(this.value); } };
obj2.test();
obj2.test(); // 11 (50)

// 3. Rest, Spread & Copying Objects
const product = { name: "Pen", price: 10 }; // 12
const shallowCopy = { ...product }; // 13
const a = { x: 1 }; // 14
const b = { y: 2 }; // 15
const mergedObj = { ...a, ...b }; // 16
const maxValue = (...nums) => Math.max(...nums); // 17
console.log(maxValue(3, 8, 2)); // 18

// 4. Destructuring & Optional Chaining
const arr = [10, 20, 30]; // 19
const [a1, b1] = arr; // 20
const laptop = { brand: "Dell", ram: "8GB" }; // 21
const { brand } = laptop; // 22
const info = {}; // 23
console.log(info.user?.name); // 24

// 5. Scoping (let/var/const)
for (var i = 0; i < 3; i++) {} // 25
console.log(i); // 26 (prints 3)
for (let j = 0; j < 3; j++) {} // 27
// console.log(j); // 28 (ReferenceError)
const PI = 3.14159; // 29

// 6. Ternary Operator – Practice
let kmph = 70; // 30
let speed = kmph > 60 ? "Fast" : "Normal"; // 31
console.log(speed); // 32
const age = 17; // 33
const ageType = age >= 18 ? "Adult" : "Minor"; // 34
console.log(ageType); // 35
const num = 0; // 36
const numberType = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative"; // 37
console.log(numberType); // 38

// 7. Spread, Rest & Arrays
const nums = [1, 2, 3]; // 39
const newNums = [...nums, 4, 5]; // 40
console.log(newNums); // 41
const arrA = ["x", "y"]; // 42
const arrB = ["z"]; // 43
const combinedArr = [...arrA, ...arrB]; // 44
console.log(combinedArr); // 45
const printNames = (...args) => args; // 46
console.log(printNames("A", "B", "C")); // 47

// 8. Object Destructuring & Shorthand
const userObj = { id: 101, status: "active" }; // 48
const { id, status } = userObj; // 49
const role = "admin"; // 50
const shorthandUser = { id, role }; // 51
console.log(shorthandUser); // 52
const student = { id: 100, name: "Sam", greet() { console.log("Hello"); } }; // 53
student.greet(); // 54

// 9. Template Literals (More Practice)
console.log(`Today's date is: ${new Date().toDateString()}`); // 55
const name = "Alex";
const score = 85;
console.log(`Hello ${name}, your score is ${score}/100`); // 56

// 10. Arrow Function Shorthands
const add = (a, b) => a + b; // 57
const isAdult = age => age >= 18; // 58
const double = n => n * 2; // 59
console.log(double(5)); // 60

// 11. Spread Operator (Arrays & Objects)
const arrClone = [1, 2, 3];
const clone = [...arrClone]; // 61
console.log(clone); // 62
const withHundred = [100, ...arrClone]; // 63
console.log(withHundred); // 64
const obj1 = { a: 1 };
const obj2Extra = { b: 2 };
const merged = { ...obj1, ...obj2, a: 10 }; // 65
console.log(merged); // 66

// 12. Optional Chaining (More Practice)
const alex = { name: "Alex", address: { city: "Bangalore" } }; // 67
console.log(alex.address?.city); // 68
console.log(alex.job?.title); // 69
const info2 = {};
console.log(info2.job?.title); // 70

const people = [
  { name: "Alice", address: { city: "Vijayawada", street: { name: "onetown", number: 123 } } },
  { name: "Bob", address: { city: "Guntur", street: { name: "Naidupet", number: 456 } } }
];

const result = people.map(({ name, address: { city, street: { name: streetName } } }) =>
  `${name} lives in ${city} on ${streetName}`
);

console.log(result);

if (true) {
  let x = 10;
  var y = 20;
}
console.log(y); 
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile.user?.details?.email); 
console.log(profile.user?.details?.phone); 
const employee = {};
console.log(employee.info?.name); 

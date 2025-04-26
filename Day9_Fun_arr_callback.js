// Passing function as parameter
function greetUser(name) {
  console.log("Hello, " + name + "!");
}

function greetWithMessage(name, callback) {
  console.log("Getting ready to greet...");
  callback(name);
}

greetWithMessage("Aman", greetUser);


// Function returning another function
function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

let double = multiplier(2);
let triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(4)); // 12

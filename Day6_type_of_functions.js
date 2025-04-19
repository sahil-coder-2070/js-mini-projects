// This is a function
function greet(name) {
  console.log("Hello " + name + "!");
}

greet("Aman");  // Hello Aman!
greet("Zoya");  // Hello Zoya!

//Type of Functions 

//  - Basic function 
function sayHi() {
  console.log("Hi bro!");
}
sayHi();

// - Functions with parameter
function add(a, b) {
  console.log(a + b);
}
add(3, 5);  // Output: 8

// function with return 
function multiply(x, y) {
  return x * y;
}
let result = multiply(4, 6);
console.log(result);  // 24

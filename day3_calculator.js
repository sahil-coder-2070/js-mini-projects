//with the help of only functions

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return b !== 0 ? a / b : "Zero se divide nahi hota bhai";

}

let num1 = 10;
let num2 = 5;

console.log("Add: " + add(num1, num2));
console.log("Subtract: " + subtract(num1, num2));
console.log("Multiply: " + multiply(num1, num2));
console.log("Divide: " + divide(num1, num2));


// this is help of if else 

let num1 = Number(prompt("What is your num1?"));
let num2 = Number(prompt("What is your num2?"));
let operation = prompt("Enter '+' or '-' or '*' or '/'");

if (operation === "+") {
    console.log(num1 + num2);
} else if (operation === "-") {
    console.log(num1 - num2);
} else if (operation === "*") {
    console.log(num1 * num2);
} else if (operation === "/") {
    if (num2 !== 0) {
        console.log(num1 / num2);
    } else {
        console.log("Division by zero is not allowed.");
    }
} else {
    console.log("Invalid operation.");
}

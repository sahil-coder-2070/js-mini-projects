// Method | Kya karta hai
// push(item) | end me item add karta hai
// pop() | last item remove karta hai
// shift() | first item remove karta hai
// unshift(item) | beginning me add karta hai
// includes(item) | item exist karta hai ya nahi check
// indexOf(item) | item ki position batata hai
// length | total items


let fruits = ["apple", "banana"];

fruits.push("mango");      // ["apple", "banana", "mango"]
fruits.pop();              // ["apple", "banana"]
fruits.unshift("kiwi");    // ["kiwi", "apple", "banana"]
console.log(fruits.length); // 3


// loop + array

let numbers = [10, 20, 30, 40];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}

console.log("Total:", total);

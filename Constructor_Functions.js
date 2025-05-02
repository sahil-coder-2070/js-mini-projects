let user = {
  name: "Ravi",
  age: 25
};

function User(name, age) {
  this.name = name;
  this.age = age;
  this.introduce = function () {
    console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
  };
}
let user1 = new User("Aman", 24);
let user2 = new User("Zoya", 26);

user1.introduce();  // Hi, I'm Aman, 24 years old.
user2.introduce();  // Hi, I'm Zoya, 26 years old.


// product factory 
function Product(name, price) {
  this.name = name;
  this.price = price;
  this.details = function () {
    console.log(`${this.name} costs ₹${this.price}`);
  };
}

let p1 = new Product("Phone", 20000);
let p2 = new Product("Laptop", 70000);

let user = {
  name: "Aman",
  greet: function () {
    console.log("Hello, " + this.name);
  }
};

// Why this is important?

let car = {
  brand: "Tata",
  model: "Nexon",
  start: function () {
    console.log(`${this.brand} ${this.model} is starting...`);
  }
};

car.start(); // Tata Nexon is starting...

// Method
let person = {
  name: "Ravi",
  age: 24,
  introduce: function () {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  }
};

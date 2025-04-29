let students = [
  { name: "Aman", age: 21, marks: 85 },
  { name: "Zoya", age: 22, marks: 92 },
  { name: "Ravi", age: 20, marks: 78 }
];
console.log(students[0].name);    // Aman
console.log(students[1].marks);   // 92
for (let student of students) {
  console.log(student.name + " scored " + student.marks);
}

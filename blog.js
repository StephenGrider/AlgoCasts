function plusFive(num) {
  return num + 5;
}

//console.log(plusFive(3));
//always returns 8 when 3 is argument

//console.log(plusFive(5));
//always returns 10 when 5 is argument

student = {
  firstName: "Johnny",
  lastName: "Appleseed",
  grade: 2,
  age: 9
};

function moveUpGrade(student) {
  return { ...student, grade: student.grade + 1 };
}

console.log(moveUpGrade(student));
//{ firstName: 'Johnny', lastName: 'Appleseed', grade: 3, age: 9 }

console.log(student);
//{ firstName: 'Johnny', lastName: 'Appleseed', grade: 2, age: 9 }

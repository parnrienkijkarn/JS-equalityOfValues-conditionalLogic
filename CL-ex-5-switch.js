function calculateStudentGrade(score) {
  switch (true) {
    case score >= 0 && score <= 59:
     return (score = "F");
    case score >= 59 && score <= 69:
      return (score = "D");
    case score >= 70 && score <= 79:
      return (score = "C");
    case score >= 80 && score <= 89:
      return (score = "B");
    case score >= 90 && score <= 100:
      return (score = "A");
    default:
      score = "A";
  }
}

// Example case
let johnGrade = calculateStudentGrade(30);
let lisaGrade = calculateStudentGrade(73);
let janeGrade = calculateStudentGrade(80);
let jjGrade = calculateStudentGrade(60);
let alexGrade = calculateStudentGrade(90);

console.log(`John grade is ${johnGrade}`);
console.log(`Lisa grade is ${lisaGrade}`);
console.log(`Jane grade is ${janeGrade}`);
console.log(`JJ grade is ${jjGrade}`);
console.log(`Alex grade is ${alexGrade}`);

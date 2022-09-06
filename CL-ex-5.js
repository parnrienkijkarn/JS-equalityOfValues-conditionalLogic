function calculateStudentGrade(score) {
  // Start coding here
  // if (calculateStudentGrade >= 0 && calculateStudentGrade <= 59) {
  //   return calculateStudentGrade = "F";
  // } else if (calculateStudentGrade >= 60 && calculateStudentGrade <= 69) {
  //   return calculateStudentGrade = "D";
  // } else if (calculateStudentGrade >= 70 && calculateStudentGrade <= 79) {
  //   return calculateStudentGrade = "C";
  // } else if (calculateStudentGrade >= 80 && calculateStudentGrade <= 89) {
  //   return calculateStudentGrade = "B";
  // } else {
  //   return calculateStudentGrade = "A";
  // }

  // ทำจากล่างขึ้นบน
  if (score >= 0 && score <= 59) {
    return score = "F";
  } else if (score >= 60 && score <= 69) {
    return score = "D";
  } else if (score >= 70 && score <= 79) {
    return score = "C";
  } else if (score >= 80 && score <= 89) {
    return score = "B";
  } else {
    return score = "A";
  }

  // ทำจากบนลงล่าง
  // if (score <= 100 && score >= 90) {
  //   return (score = "A");
  // } else if (score <= 89 && score >= 80) {
  //   return (score = "B");
  // } else if (score <= 79 && score >= 70) {
  //   return (score = "C");
  // } else if (score <= 69 && score >= 60) {
  //   return (score = "D");
  // } else {
  //   return (score = "F");
  // }
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

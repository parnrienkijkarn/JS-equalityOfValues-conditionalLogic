console.log(Object.is("Twenty", 20)); // false
console.log(Object.is({ name: "John" }, { name: "John" })); // FALSE
console.log(Object.is(true, 1)); // false
console.log(NaN == NaN); // FALSE
console.log(10 == "10"); // true
console.log(true == 1);  // TRUE
console.log(0 === -0);  // TRUE
console.log(null === null); // TRUE
console.log(true === 1); // false
console.log(true == "true"); // FALSE
console.log(null == undefined); // true
console.log(0 != ""); // FALSE
console.log([1, 2] == "1,2"); // true

// got questions for number 2, 4, 8, 10, 12

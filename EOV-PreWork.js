console.log(Object.is("Twenty", 20)); // false
console.log(Object.is({ name: "John" }, { name: "John" })); // FALSE because values in objects are always not the same
console.log(Object.is(true, 1)); // false
console.log(NaN == NaN); // false
console.log(10 == "10"); // true
console.log(true == 1); // true
console.log(0 === -0); // true
console.log(null === null); // true
console.log(true === 1); // false
console.log(true == "true"); // FALSE because there's only one time conversion, thus 1 == string "true" is false
console.log(null == undefined); // true
console.log(0 != ""); // FALSE
console.log([1, 2] == "1,2"); // true

// got questions for number 2,4 

function isPlainObject(obj) {
  // อันนี้คืออันที่เคยทำกับพี่พันแต่เสือกจำไม่ได้ 55555
  return typeof(obj) === "object" && obj !== null && !Array.isArray(obj);
}

// อันนี้เอามาจากพี่หมูกับพี่จอช
// function isPlainObject(obj) {
// let a = (typeof(obj) === "object");
// let b =!Array.isArray(obj);
// let c = (obj !== null);
// let d = a && b && c;
// return a, b, c, d
// }


// Example case
let result1 = isPlainObject({ name: "John" });
let result2 = isPlainObject(null);
let result3 = isPlainObject(["apples", "oranges"]);



// ผลลัพธ์ควรที่ได้จาก Example case
console.log(result1); //true
console.log(result2); // false
console.log(result3); // false

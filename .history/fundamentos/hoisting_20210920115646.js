//O JavaScript apenas eleva (hoists) as declarações, não as inicializações.
console.log("a = ", a);
var a = 3;
console.log("a = ", a);

console.log("b = ", b);
let b = 2;
console.log("b = ", b);
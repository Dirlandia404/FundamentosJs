const escola = "Cod3r";

console.log(escola.charAt(1));
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3)); //tabela ASCII
console.log(escola.indexOf("3"));
console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log("escola ".concat(escola).concat("!"));
console.log(escola.replace(3, "e"));
console.log(escola.replace(/\w/g, "e")); //regex

console.log("Ana, Maria, Pedro");

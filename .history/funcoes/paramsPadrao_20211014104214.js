function soma(a, b, c) {
  a = a || 1;
  b = b || 1;
  c = c || 1;
  return a + b + c;
}
console.log(soma(), soma(3), soma(1, 2, 3));

function soma2(a, b, c) {
  a = a !== undefined ? a : 1;
}
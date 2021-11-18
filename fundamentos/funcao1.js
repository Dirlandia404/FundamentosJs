//função é: a execução de processo, definida em bloco, com nome e recebe parametos de netradas retornando valor, mas tbm pode nõ receber, nem retornar

function imprimirSoma(a, b) {
  console.log(a + b, a - b, a * b);
}

imprimirSoma(6, 3);
imprimirSoma(6);

function soma(a, b = 0) {
  return a + b;
}
console.log(soma(2, 3));
console.log(soma(2));
console.log(soma());

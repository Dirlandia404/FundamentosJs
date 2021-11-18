const notas = [7.7, 2, 8, 8.8, 6, 5, 9, 3.4];

//sem calll
let notasBaixas = [];

for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas.push(notas[i]);
  }
}
console.log(notasBaixas);

//com call
const notasBaixas2 = notas.filter(function (nota) {
  return nota < 7;
});
console.log(notasBaixas2);

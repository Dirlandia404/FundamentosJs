const notas = [6, 7.8, 7.7, 8.9, 10];

for (let i in notas) {
  console.log(i, notas[i]);
}
const pessoa = {
  nome: "di",
  sobrenome: "sousa",
  idade: 29,
};

for (let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`);
}

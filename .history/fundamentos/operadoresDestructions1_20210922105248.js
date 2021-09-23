const Pessoa = {
  nome: "ana",
  idade: 5,
  endereco: {
    rua: "kasajd",
    n: 54,
  },
};
const { nome, idade } = Pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = Pessoa;
console.log(n, i);

const {
  endereco: { rua, n },
} = Pessoa;
console.log(rua, n);

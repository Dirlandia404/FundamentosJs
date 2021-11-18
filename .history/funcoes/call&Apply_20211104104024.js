function getPreco(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
  nome: "Notebook",
  preco: 4500,
  desc: 0.35,
  getPreco,
};

global.preco = 20;
global.desc = 0.1;
console.log(getPreco());

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
  falar() {
    console.log(`Meu nome é ${this.nome}`);
  }
}
const p1 = new Pessoa("Dirlandia");
p1.falar();
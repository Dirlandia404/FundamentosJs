function criarProduto(nome, valor) {
  return {
    nome,
    valor,
    desconto: 0.1,
  };
}
console.log(criarProduto("batata", 25));
console.log(criarProduto("arros", 205));

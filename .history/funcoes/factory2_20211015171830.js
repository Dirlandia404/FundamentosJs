function criarProduto(nome, valor) {
  return {
    nome,
    valor,
    desconto: 0.1 * valor,
  };
}
console.log(criarProduto("batata", 25));
console.log(criarProduto("arros", 205));

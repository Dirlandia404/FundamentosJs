let valor; //não iniciado
console.log(valor);

valor = null; //ausencia
console.log(valor);
//console.log(valor.toString()); erro

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.5;
console.log(produto);

produto.preco = undefined; //evitar isso
console.log(!!produto.preco);
//delete produto.preco;
console.log(produto);

produto.preco = null; //sem preco
console.log(!!produto.preco);
console.log(produto);

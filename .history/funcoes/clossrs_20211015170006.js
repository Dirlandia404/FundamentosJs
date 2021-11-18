//closure é o escopo criado quando uma funcao é declarada
//permite a funçao acessar e manipular variaveis externas
//context léxico

const x = "Global";

function fora() {
  const x = "local";
  function dentro() {
    return x;
  }
  return dentro;
}
const minhaFuncao = fora();
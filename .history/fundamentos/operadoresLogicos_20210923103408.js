//tabela verdade
function Compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2;
  const comprarTv50 = trabalho1 && trabalho2;
  const comprarTv32 = trabalho1 != trabalho2;
  const saudavel = !comprarSorvete;

  return { comprarSorvete, comprarTv32, comprarTv50, saudavel };
}

console.log(Compras(true, true));
console.log(Compras(true, false));
console.log(Compras(false, true));
console.log(Compras(false, false));

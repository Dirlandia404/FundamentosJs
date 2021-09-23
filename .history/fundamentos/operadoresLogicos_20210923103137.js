//tabela verdade
function Compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2;
  const comprarTv50 = trabalho1 && trabalho2;
  const comprarTv32 = trabalho1 != trabalho2;
  const saudavel = !comprarSorvete;

  return comprarSorvete, comprarTv32, comprarTv50, saudavel;
}

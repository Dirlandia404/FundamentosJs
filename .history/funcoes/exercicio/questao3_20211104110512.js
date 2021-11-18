function potencia(base, expoente) {
  for (let i = 0; i < expoente; i++) {
    base *= i;
  }
  console.log(base);
}

potencia(2, 2);
potencia(2, 3);

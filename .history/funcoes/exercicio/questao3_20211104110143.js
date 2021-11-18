function potencia(base, expoente) {
  for (let i = 0; i < expoente; i++) {
    base *= base + 1;
  }
  console.log(base);
}

potencia(2, 2);
potencia(2, 3);

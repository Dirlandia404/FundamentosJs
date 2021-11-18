function potencia(base, expoente) {
  for (let i = 0; i <= expoente; i++) {
    base *= base + 1;
  }
}

potencia(2, 2);

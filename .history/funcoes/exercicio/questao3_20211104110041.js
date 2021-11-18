function potencia(base, expoente) {
  for (let i = 0; i < expoente; i++) {
    base += base;
  }
  console.log(base);
}

potencia(2, 2);

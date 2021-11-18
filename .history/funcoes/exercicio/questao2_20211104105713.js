function comparar(lado1, lado2, lado3) {
  if (lado1 == lado2 && lado2 == lado3) {
    console.log("Isosceles");
  } else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
    console.log("escaleno");
  } else {
    console.log("equilatero");
  }
}

comparar(2, 2, 2);
comparar(1, 3, 2);

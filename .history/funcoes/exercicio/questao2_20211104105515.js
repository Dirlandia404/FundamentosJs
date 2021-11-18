function comparar(lado1, lado2, lado3) {
  if (lado1 == lado2 && lado2 == lado3 && lado1 == lado3) {
    console.log("Escaleno");
  } else if (lado1 == lado2 && lado2 == lado3) {
    console.log("Isosceles");
  }
}

comparar(2, 2, 2);

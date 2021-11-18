const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (x in numb) {
  if (x == 5) {
    break;
  }
  console.log(`${x} = ${numb[x]}`);
}
for (y in numb) {
  if (y == 5) {
    continue;
  }
  console.log(`${y} = ${numb[y]}`);
}

externo: for (a in numb) {
  for (b in numb) {
    if (a == 2 && b == 3) break externo;
    console.log(`par ${a}, ${b}`);
  }
}

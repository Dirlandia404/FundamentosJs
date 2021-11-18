function function1() {}

//armazenar em variavel

const fun2 = function () {};

//armazenar em um array
const array = [
  function (a, b) {
    return a + b;
  },
  function1,
  fun2,
];

console.log(array[0](2, 3));

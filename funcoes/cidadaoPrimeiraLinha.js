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

//armazenamento em um atributo de objeto

const obj = {};
obj.falar = function () {
  return "Opa";
};
console.log(obj.falar());

//passar funçao como parametro
function run(fun) {
  fun();
}
run(function () {
  console.log("Executando...");
});

//uma função pode retornar/conter um função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}
soma(1, 6)(3);

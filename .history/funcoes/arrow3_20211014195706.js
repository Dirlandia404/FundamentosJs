let comparaThis = function (param) {
  console.log(this === param);
};
comparaThis(global);

const obj = {};
comparaThis = comparaThis.bind(obj);
comparaThis(global);
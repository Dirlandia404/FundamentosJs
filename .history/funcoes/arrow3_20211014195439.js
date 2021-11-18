let comparaThis = function (param) {
  console.log(this === param);
};
comparaThis(global);

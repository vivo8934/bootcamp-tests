function regCheck(number,loc){
  var regis1 = number.endsWith(loc);

  return regis1;
}
var isGP = regCheck('DV 23 NB GP', 'GP');
console.log(isGP);

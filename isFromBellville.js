function isFromBellville(carReg){
  var regis = carReg.startsWith('CY');
 // console.log(regis);

  return regis;

}

var result = isFromBellville('CY22WW');
console.log(result);

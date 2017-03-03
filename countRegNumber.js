function countRegNumber(regis){
  var count = regis.split(",");
  var result = count.length;

  return result;
};

countRegNumber("CA 182736,CY 523519,CJ 812328");

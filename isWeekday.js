function isWeekday (day){
  var duringWeek =! day.startsWith('S');
  //console.log(duringWeek);
  return duringWeek
};
isWeekday('Monday');

function isBigger(number1, number2) {
  return number1 - number2 > 0;
}

function isSmaller(number1, number2) {
  return isBigger(number2, number1);
}

isSmaller(5, -1);
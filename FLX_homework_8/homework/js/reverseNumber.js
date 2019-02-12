function reverseNumber(number) {
  let sign = number > 0 ? 1 : -1;
  number = Math.abs(number);
  let revers = 0;
  
  while(number > 0) {
    revers *= 10;
    revers += (number % 10 ^ 0);
    number = (number / 10 ^ 0);
  }
  
  return sign * revers;
}

reverseNumber(123); 
reverseNumber(-456);
reverseNumber(10000); 
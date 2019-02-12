function isInteger(value) {
  return (value ^ 0) === value;
}

isInteger(5);
isInteger(4.5);
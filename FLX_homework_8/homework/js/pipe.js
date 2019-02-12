function addOne(x) {
  return x + 1;
}

function pipe() {
  if (arguments.length === 0) {
  return undefined;
}

  let result = arguments[0];
  
  for (let i = 1; i < arguments.length; i++) {
    result = arguments[i](result);
  }
  
  return result;
}
	
pipe(1, addOne);
pipe(1, addOne, addOne);

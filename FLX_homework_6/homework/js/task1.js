let a, b, c;
a = parseFloat(prompt('Input a ', '1')); 
b = parseFloat(prompt('Input b ', '0'));
c = parseFloat(prompt('Input c ', '0')); 
if(!(!isNaN((a)) && isFinite(a)) || !(!isNaN((b)) && isFinite(b)) || !(!isNaN((c)) && isFinite(c)) || a === 0){
	alert('Invalid input data');
}else{
	let det = b * b - 4 * a * c;
	if(det < 0){
		alert('no solution');
	}else{
		if(det === 0){
			let x = -b / (2 * a);
			alert('x = ' + +x.toFixed(2));
		}else{
			let x1 = (-b + Math.sqrt(det)) / (2 * a);
			let x2 = (-b - Math.sqrt(det)) / (2 * a);
			alert('x1 = ' + +x1.toFixed(2) + 'and x2 = ' + +x2.toFixed(2));
		}
	}
}

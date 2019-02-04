let price = parseFloat(prompt('Input amount of money ', '0'));
let discount = parseFloat(prompt('Input discount ', '0'));
if(!(!isNaN((price)) && isFinite(price)) || !(!isNaN((discount)) && isFinite(discount)) || 
	price < 0 || price > 9999999 || discount < 0 || discount > 99){
	alert('Invalid input data');
}else{
	let discountPrice = price - price * discount / 100;
	let saved = price-discountPrice;
	alert('Price without discount: ' + Math.floor(price * 100) / 100 + 
			'\nDiscount: ' + Math.floor(discount * 100) / 100 + '%' +
			'\nPrice with discount: ' + Math.floor(discountPrice * 100) / 100 + 
			'\nSaved: ' + Math.floor(saved * 100) / 100);
	}

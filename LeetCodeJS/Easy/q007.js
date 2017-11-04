// Basic brute force method
// Converting first to string then to array then back
// to use .reverse
function reverse(x) {
	
	if(x > 2147483647 || x < -2147483647) {
		return 0;
	}

	let temp_str = x.toString();
	let temp_arr = temp_str.split('');
	let reverse_num;

	if(temp_arr[0] === '-'){
		reverse_num = -parseInt((temp_arr.slice(1).reverse().join('')));
		
		if(reverse_num < -2147483647) {
			return 0;
		}
		
		return reverse_num;
	}
	
	reverse_num = parseInt(temp_arr.reverse().join(''));
	
	if(reverse_num > 2147483647) {
		return 0;
	}
	
	return reverse_num;
}
// This solution works and is better than 57.90% JS submissions

module.exports = reverse;
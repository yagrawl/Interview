
// Basically looping through the back, and once the add 1
// doesn't exceed 9, break loop and return. If in the end
// there's a 0 in the most significant bit, unshift and add
// 1 to the array
function plusOne(digits) {

	for(let i = digits.length - 1; i >= 0; i--) {
		if(digits[i] + 1 < 10) {
			digits[i] += 1;
			break;
		}
		else {
			digits[i] = 0;
		}
	}

	if(digits[0] === 0) {
		digits.unshift(1);
	}

	return digits;
}
// This solution works and is better than 92.98% JS submissions


module.exports = plusOne;
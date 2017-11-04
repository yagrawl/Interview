// Converts int to string and the loops from front/back
// On the first instance of not finding similar chars
// return 0, else return 1
// Probably could be changed to just run half the distance
// But uses extra space

function isPalindrome(x) {
	
	for(let i = 0; i < x.toString().length; i++) {
		if(x.toString()[i] !== x.toString()[x.toString().length - i -1]) {
			return false;
		}
	}

	return true;
}
// This solution works and is better than 45.49% JS submissions

// Basically just revert the last half of integers and compare
// Some problems I dealt with in JS is that numbers don't behave
// as math integers and we need parseInt()
function isPalindrome_efficient(x) {

	if(x < 0 || x % 10 == 0 && x != 0) {
		return false;
	}

	let revert_half = 0;
	while(x > revert_half) {
		revert_half = parseInt(revert_half * 10 + x % 10);
		x = parseInt(x/10);
	}

	return parseInt(x) == parseInt(revert_half) || parseInt(x) == parseInt(revert_half/10);
}
// This solution works and is better than 43.39% JS submissions

module.exports = isPalindrome_efficient;